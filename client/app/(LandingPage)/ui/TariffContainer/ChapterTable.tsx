import Header from "./Header";
import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { IconListTree } from "@tabler/icons-react";

export default function ChapterTable() {
  return (
    <TableContainer sx={{ border: theme => `1px solid ${theme.palette.primary.main}` }}>
      <Header text='Chapter' variant='h5' iconNode={<IconListTree />} />
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
            <TableCell>Chapter</TableCell>
            <TableCell>Chapter Name</TableCell>
            <TableCell>Chapter Description</TableCell>
            <TableCell>Chapter Type</TableCell>
          </TableRow>
        </TableHead>
        <TableRow>
          <TableCell />
          <TableCell>1</TableCell>
          <TableCell>Chapter Name</TableCell>
          <TableCell>Chapter Description</TableCell>
          <TableCell>Chapter Type</TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
}
