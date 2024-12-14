"use client";

import { getAllChapters } from "@/services/chapter";
import { Chapter } from "@/types";
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
import {
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconDeviceGamepad3,
  IconDeviceGamepad3Filled,
  IconTable,
  IconTableRow,
} from "@tabler/icons-react";
import axios from "axios";
import * as React from "react";

const ChapterRow = ({
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
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }} onClick={toggleCollapse}>
        <TableCell align='center' width='100px'>
          <IconButton aria-label='expand row' size='small' onClick={toggleCollapse}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Typography variant='h6' fontWeight='600'>
            {chapter.no}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography color='textSecondary' variant='h6'>
            {chapter.notes}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={3} sx={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ padding: 2 }}>
              <Typography variant='body1' fontWeight='500'>
                Detailed information for Chapter {chapter.no}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                {/* Add more details about the chapter here */}
                {chapter.notes || "No details available"}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const TariffContainer = () => {
  const [data, setData] = React.useState<Chapter[]>([]);
  const [open, setOpen] = React.useState(false);
  const [openRows, setOpenRows] = React.useState<boolean[]>([]);

  React.useEffect(() => {
    const loadData = async () => {
      const fetchedData = await getAllChapters();
      console.log(fetchedData);
      setData(fetchedData);
      setOpenRows(new Array(fetchedData.length).fill(false));
    };

    loadData();
  }, []);

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
      <TableContainer>
        <Table
          aria-label='collapsible table'
          sx={{
            whiteSpace: {
              xs: "nowrap",
              sm: "unset",
            },
          }}
        >
          <TableHead>
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
              <TableCell>
                <Typography variant='h6'>Chapter No</Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6'>Chapter Notes</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((chapter, index) => (
              <ChapterRow
                key={index}
                chapter={chapter}
                open={openRows[index]}
                toggleCollapse={() => toggleCollapse(index)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TariffContainer;
