import LandingWrapper from "../shared/LandingWrapper";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";

export default function FullWidthGrid() {
  return (
    <LandingWrapper id='about'>
      <Typography variant='h2' marginY={"2rem"}>
        About
      </Typography>
      <Grid container mt={3}>
        <Grid item xs={12} display='flex' alignItems='center'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, mollitia? Praesentium
          odit asperiores, odio non corrupti dolores placeat, molestias itaque iure, temporibus eum
          minima? Aliquam itaque similique accusantium saepe quo.
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2'>
            A product name is required and recommended to be unique.
          </Typography>
        </Grid>

        <Grid item xs={12} display='flex' alignItems='center'></Grid>
        <Grid item xs={12}>
          <Typography variant='body2'>
            Set a description to the product for better visibility.
          </Typography>
        </Grid>
      </Grid>
    </LandingWrapper>
  );
}
