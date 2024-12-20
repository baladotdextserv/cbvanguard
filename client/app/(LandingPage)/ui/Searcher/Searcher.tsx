import SearchBox from "./SearchBox";
import { Card } from "@mui/material";

export default function Searcher() {
  return (
    <Card
      sx={{
        p: 2,
        backgroundColor: "primary.main",
        borderRadius: "0px",
        height: "300px",
      }}
      // className='font-sangavyRegular'
    >
      <h2 className='font-sangavyRegular text-2xl text-white'>AI Searcher</h2>
      <SearchBox />
    </Card>
  );
}
