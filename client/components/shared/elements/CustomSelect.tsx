"use client";

import { Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomSelect = styled((props: any) => <Select {...props} />)(({}) => ({}));

export default CustomSelect;
