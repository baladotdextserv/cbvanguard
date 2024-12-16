import Header from "./Header";
import { useTariffContext } from "@/app/context/TariffContext";
import { getChaptersBySection } from "@/services/chapter";
import { Chapter } from "@/types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { IconArrowsMaximize, IconArrowsMinimize, IconListTree } from "@tabler/icons-react";
import * as React from "react";

interface ChapterTableProps {
  sectionName: string;
}

const Row = ({
  chapter,
  open,
  toggleCollapse,
}: {
  chapter: Chapter;
  open: boolean;
  toggleCollapse: () => void;
}) => {
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
          <Typography variant='h6' fontWeight='600'>
            {chapter.name}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography color='textSecondary' variant='h6'>
            {chapter.description}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={3} sx={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout='auto' sx={{ padding: "1rem" }} unmountOnExit>
            <h1>Test</h1>
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
        setOpenRows(new Array(data.length).fill(false));
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
    <TableContainer sx={{ border: theme => `1px solid ${theme.palette.primary.main}` }}>
      <Header text='Chapter' variant='h5' />
      <Table
        aria-label='collapsible table'
        sx={{
          whiteSpace: {
            xs: "nowrap",
            sm: "unset",
          },
        }}
      >
        <TableHead sx={{ backgroundColor: "primary.light" }}>
          <TableRow>
            <TableCell align='center' width='100px'>
              {openRows.some(open => open) ? (
                <Tooltip title='Collapse All'>
                  <IconButton
                    sx={{ margin: 0 }}
                    color='inherit'
                    onClick={collapseAll}
                    aria-label='collapse all'
                  >
                    <IconArrowsMinimize size={18} />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title='Expand All'>
                  <IconButton
                    sx={{ margin: 0 }}
                    color='inherit'
                    onClick={expandAll}
                    aria-label='expand all'
                  >
                    <IconArrowsMaximize size={18} />
                  </IconButton>
                </Tooltip>
              )}
            </TableCell>
            <TableCell width='200px'>
              <Typography variant='h6'>Name</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='h6'>Description</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={3} align='center'>
                <Typography>Loading...</Typography>
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
  );
}

export default ChapterTable;
