import { useTariffContext } from "@/app/context/TariffContext";
import { Button, Stack, TextField, Tooltip } from "@mui/material";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

export default function SearchBox() {
  const searchRef = React.useRef<HTMLInputElement>(null);
  function handleSearch() {
    if (searchRef.current) {
      console.log(searchRef.current.value);
      setSearch(searchRef.current.value);
      searchRef.current.value = "";
      searchRef.current.focus();
    }
  }

  const { setSearch } = useTariffContext();

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
        borderRadius: "6px",
      }}
    >
      <TextField
        inputRef={searchRef}
        variant='standard'
        sx={{ border: "none", width: "100%" }}
        InputProps={{
          disableUnderline: true,
        }}
        placeholder="I'm Looking For..."
        onKeyDown={e => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
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
        <Tooltip title='Search'>
          <IconSearch stroke={2} />
        </Tooltip>
      </Button>
    </Stack>
  );
}
