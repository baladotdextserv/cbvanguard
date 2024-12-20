"use client";

import { Grid, Typography, Breadcrumbs, Theme } from "@mui/material";
import { IconCircle } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

interface BreadCrumbType {
  subtitle?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items?: any[];
  title: string;
  children?: JSX.Element;
}

const Breadcrumb = ({ subtitle, items, title }: BreadCrumbType) => (
  <Grid
    container
    sx={{
      backgroundColor: "primary.light",
      borderRadius: (theme: Theme) => theme.shape.borderRadius / 4,
      p: "30px 25px 20px",
      marginBottom: "30px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Grid item xs={12} sm={6} lg={8} mb={1}>
      <Typography variant='h4'>{title}</Typography>
      <Typography color='textSecondary' variant='h6' fontWeight={400} mt={0.8} mb={0}>
        {subtitle}
      </Typography>
      <Breadcrumbs
        separator={
          <IconCircle
            size='5'
            fill='textSecondary'
            fillOpacity={"0.6"}
            style={{ margin: "0 5px" }}
          />
        }
        sx={{ alignItems: "center", mt: items ? "10px" : "" }}
        aria-label='breadcrumb'
      >
        {items
          ? items.map(item => (
              <div key={item.title}>
                {item.to ? (
                  <Link href={item.to} passHref>
                    <Typography color='textSecondary'>{item.title}</Typography>
                  </Link>
                ) : (
                  <Typography color='textPrimary'>{item.title}</Typography>
                )}
              </div>
            ))
          : ""}
      </Breadcrumbs>
    </Grid>
  </Grid>
);

export default Breadcrumb;
