"use client";

import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTextField = styled((props: any) => <TextField {...props} />)(({ theme }) => ({
  "& .MuiOutlinedInput-input::-webkit-input-placeholder": {
    color: theme.palette.text.secondary,
    opacity: "0.8",
  },
  "& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder": {
    color: theme.palette.text.secondary,
    opacity: "1",
  },
  "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.grey[200],
  },
}));

export default CustomTextField;
