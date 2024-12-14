"use client";

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
import { IconArrowsMaximize, IconArrowsMinimize } from "@tabler/icons-react";
import * as React from "react";

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
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }} onClick={toggleCollapse}>
        <TableCell align='center' width='100px'>
          <IconButton aria-label='expand row' size='small' onClick={toggleCollapse}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Typography variant='h6' fontWeight='600'>
            {section.no}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography color='textSecondary' variant='h6'>
            {section.notes}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={3} sx={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ padding: 2 }}>
              <Typography variant='body1' fontWeight='500'>
                Detailed information for Section {section.no}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                {/* Add more details about the section here */}
                {section.notes || "No details available"}
              </Typography>
            </Box>
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
  }, [tariffContext?.sections]); // Depend on tariffContext.sections

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
                <Typography variant='h6'>Section No</Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6'>Section Notes</Typography>
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
