import SearchBox from "./SearchBox";
import { Card, Typography } from "@mui/material";

export default function Searcher() {
  return (
    <Card
      sx={{
        p: 2,
        backgroundColor: "primary.main",
        borderRadius: "0px",
        height: "300px",
      }}
      className='font-sangavyRegular'
    >
      <Typography
        variant='h3'
        sx={{ color: "primary.contrastText", marginTop: "1rem" }}
        className='text-center w-fit'
      >
        AI Searcher
      </Typography>
      <SearchBox />
    </Card>
  );
}
