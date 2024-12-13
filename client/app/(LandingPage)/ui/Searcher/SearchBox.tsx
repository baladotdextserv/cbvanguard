import { useTariffContext } from "@/app/context/TariffContext";
import { Button, Stack, TextField } from "@mui/material";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

export default function SearchBox() {
  const searchRef = React.useRef<HTMLInputElement>(null);
  function handleSearch() {
    if (searchRef.current) {
      console.log(searchRef.current.value);
      setSearch(searchRef.current.value);
      searchRef.current.focus();
    }
  }

  const { search, setSearch } = useTariffContext();

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        backgroundColor: "white",
        width: "450px",
        padding: "10px",
        marginY: "1rem",
        borderRadius: "0",
      }}
    >
      <TextField
        inputRef={searchRef}
        variant='standard'
        sx={{ border: "none", width: "100%" }}
        InputProps={{
          disableUnderline: true,
          value: search,
          onChange: e => setSearch(e.target.value),
        }}
        placeholder="I'm Looking For..."
      />
      <Button
        sx={{
          borderRadius: 0,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
            color: "primary.main",
            scale: 1.1,
          },
        }}
        onClick={() => {
          handleSearch();
        }}
      >
        <IconSearch stroke={2} />
      </Button>
    </Stack>
  );
}
