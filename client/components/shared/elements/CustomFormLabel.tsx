"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomFormLabel = styled((props: any) => (
  <Typography
    variant='subtitle1'
    fontWeight={600}
    {...props}
    component='label'
    htmlFor={props.htmlFor}
  />
))(() => ({
  marginBottom: "5px",
  marginTop: "25px",
  display: "block",
}));

export default CustomFormLabel;
