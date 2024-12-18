import ToggleAllControl from "../components/ToggleAllControl";
import { TableCell, TableHead, TableRow, Typography, useTheme } from "@mui/material";

interface HeaderType {
  openRows: boolean[];
  expandAll: () => void;
  collapseAll: () => void;
}

export default function TableHeader({ openRows, expandAll, collapseAll }: HeaderType) {
  const theme = useTheme();
  return (
    <TableHead
      sx={{
        backgroundColor: "primary.main",
        position: "sticky",
        top: 0,
        zIndex: 2,
      }}
    >
      <TableRow>
        <TableCell align='center' width='100px'>
          <ToggleAllControl
            color={theme.palette.primary.contrastText}
            openRows={openRows}
            expandAll={expandAll}
            collapseAll={collapseAll}
          />
        </TableCell>
        <TableCell width='200px'>
          <Typography variant='h6' color={"primary.contrastText"}>
            HS Code
          </Typography>
        </TableCell>
        <TableCell width='700px'>
          <Typography variant='h6' color={"primary.contrastText"}>
            Item Description
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant='h6' color={"primary.contrastText"}>
            Unit
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant='h6' color={"primary.contrastText"}>
            Basic
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant='h6' color={"primary.contrastText"}>
            Pre
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant='h6' color={"primary.contrastText"}>
            IGST
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant='h6' color={"primary.contrastText"}>
            Policy
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
