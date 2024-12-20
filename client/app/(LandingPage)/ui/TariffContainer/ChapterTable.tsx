import Header from "./components/CustomHeader";
import LoadingSkeleton from "./components/LoadingSkeleton";
import ToggleAllControl from "./components/ToggleAllControl";
import { getChaptersBySection } from "@/services/chapter";
import { Chapter } from "@/types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { IconMenu3 } from "@tabler/icons-react";
import * as React from "react";

interface ChapterTableProps {
  sectionName: string;
}

const LazyHSCodeTable = React.lazy(() => import("./HSCode/MainTable"));

const Row = ({
  chapter,
  open,
  toggleCollapse,
}: {
  chapter: Chapter;
  open: boolean;
  toggleCollapse: () => void;
}) => {
  let value = chapter.no.toString();
  if (value.length === 1) value = `0${value}`;
  return (
    <>
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset" },
          backgroundColor: open ? "primary.light" : "white",
        }}
        onClick={toggleCollapse}
      >
        <TableCell align='center' width='100px'>
          <IconButton aria-label='expand row' size='small' onClick={toggleCollapse}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell width='200px'>
          <Typography variant='body1' fontWeight='600'>
            {chapter.name}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography color='textSecondary' variant='body1'>
            {chapter.description}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={3} sx={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout='auto' sx={{ padding: "4px" }} unmountOnExit>
            <React.Suspense fallback={<LoadingSkeleton />}>
              <LazyHSCodeTable code={value} />
            </React.Suspense>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

function ChapterTable({ sectionName }: ChapterTableProps) {
  const [data, setData] = React.useState<Chapter[]>([]);
  const [openRows, setOpenRows] = React.useState<boolean[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadData = async () => {
      const res = await getChaptersBySection(sectionName);
      if (res != null) {
        setData(res);
        setOpenRows(new Array(res.length).fill(false));
      }
      setLoading(false);
    };

    loadData();
  }, [sectionName]);

  const toggleCollapse = (index: number) => {
    const newOpenRows = [...openRows];
    newOpenRows[index] = !newOpenRows[index];
    setOpenRows(newOpenRows);
  };

  const expandAll = () => {
    setOpenRows(new Array(data.length).fill(true));
  };

  const collapseAll = () => {
    setOpenRows(new Array(data.length).fill(false));
  };

  return (
    <Paper>
      <TableContainer sx={{ border: theme => `1px solid ${theme.palette.primary.main}` }}>
        <Header text='Chapters' variant='h5' iconNode={<IconMenu3 size={24} />} />
        <Table
          aria-label='collapsible table'
          sx={{
            whiteSpace: {
              xs: "nowrap",
              sm: "unset",
            },
            width: "100%",
          }}
        >
          <TableHead sx={{ backgroundColor: "primary.light" }}>
            <TableRow>
              <TableCell align='center' width='100px'>
                <ToggleAllControl
                  openRows={openRows}
                  expandAll={expandAll}
                  collapseAll={collapseAll}
                />
              </TableCell>
              <TableCell width='200px'>
                <Typography variant='body1' fontWeight='600'>
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='body1' fontWeight='600'>
                  Description
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={3} align='center'>
                  <LoadingSkeleton />
                </TableCell>
              </TableRow>
            ) : (
              data.map((chapter, index) => (
                <Row
                  key={index}
                  chapter={chapter}
                  open={openRows[index]}
                  toggleCollapse={() => toggleCollapse(index)}
                />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default ChapterTable;
