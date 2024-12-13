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
} from "@mui/material";
import axios from "axios";
import * as React from "react";

const TariffContainer = () => {
  const [data, setData] = React.useState<Chapter[]>([]);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const loadData = async () => {
      const fetchedData = await getAllChapters();
      setData(fetchedData.chapters);
      console.log(fetchedData);
    };

    loadData();
  }, []);

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
              <TableCell />
              <TableCell>
                <Typography variant='h6'>Chapter No</Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6'>Chapter Notes</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow sx={{ "& > *": { borderBottom: "unset" } }} key={index}>
                <TableCell>
                  <IconButton
                    aria-label='expand row'
                    size='small'
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </TableCell>
                <TableCell>
                  <Typography variant='h6' fontWeight='600'>
                    {row.no}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color='textSecondary' variant='h6'>
                    {row.notes}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TariffContainer;
