"use client";

import ChapterTable from "./ChapterTable";
import Header from "./components/CustomHeader";
import LoadingSkeleton from "./components/LoadingSkeleton";
import ToggleAllControl from "./components/ToggleAllControl";
import { useTariffContext } from "@/app/context/TariffContext";
import { Section } from "@/types/section";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Typography,
  Box,
  Paper,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  AppBar,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { IconArrowsMaximize, IconArrowsMinimize, IconMenu3 } from "@tabler/icons-react";
import * as React from "react";

const LazyChapterTable = React.lazy(() => import("./ChapterTable"));

const Row = ({
  section,
  open,
  toggleCollapse,
}: {
  section: Section;
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
            {section.name}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography color='textSecondary' variant='h6'>
            {section.description}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={3} sx={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout='auto' sx={{ padding: "4px" }} unmountOnExit>
            <React.Suspense fallback={<LoadingSkeleton />}>
              <LazyChapterTable sectionName={section.name} />
            </React.Suspense>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const TariffContainer = () => {
  const [data, setData] = React.useState<Section[]>([]);
  const [open, setOpen] = React.useState(false);
  const [openRows, setOpenRows] = React.useState<boolean[]>([]);
  const [loading, setLoading] = React.useState(true);

  const tariffContext = useTariffContext();

  React.useEffect(() => {
    const loadData = async () => {
      if (tariffContext?.sections) {
        setData(tariffContext.sections);
        setOpenRows(new Array(tariffContext.sections.length).fill(false));
      }
      setLoading(false);
    };

    if (tariffContext?.sections) {
      loadData();
    }
  }, [tariffContext?.sections]);

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
    <Paper sx={{ p: 2 }}>
      <TableContainer sx={{ border: theme => `1px solid ${theme.palette.primary.main}` }}>
        <Header text='Sections' iconNode={<IconMenu3 size={28} />} />
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
                <ToggleAllControl
                  openRows={openRows}
                  expandAll={expandAll}
                  collapseAll={collapseAll}
                />
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
                  <LoadingSkeleton />
                </TableCell>
              </TableRow>
            ) : (
              data.map((section, index) => (
                <Row
                  key={index}
                  section={section}
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
};

export default TariffContainer;
