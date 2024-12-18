"use client";

import { SingleRow } from "./Row";
import TableHeader from "./TableHeader";
import { getHsCodeByCode } from "@/services/hscode";
import { HSCodeTableType, HSCodeType } from "@/types/hscode";
import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import * as React from "react";

export default function MainTable({ code }: HSCodeTableType) {
  const [data, setData] = React.useState<HSCodeType[]>([]);
  const [openRows, setOpenRows] = React.useState<boolean[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadData = async () => {
      const res = await getHsCodeByCode(code);
      console.log(res);
      if (res != null) {
        setData(res);
        setOpenRows(new Array(data.length).fill(false));
      }
      setLoading(false);
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
    <TableContainer sx={{ maxHeight: "90vh", width: "95vw", overflowY: "auto" }}>
      <Table
        aria-label='collapsible table'
        sx={{
          whiteSpace: {
            xs: "nowrap",
            sm: "unset",
          },
        }}
      >
        <TableHeader openRows={openRows} expandAll={expandAll} collapseAll={collapseAll} />
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={3} align='center'>
                <Typography>Loading...</Typography>
              </TableCell>
            </TableRow>
          ) : (
            data.map((hscode, index) => (
              <SingleRow
                code={hscode.hscode}
                key={index}
                hscode={hscode}
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
