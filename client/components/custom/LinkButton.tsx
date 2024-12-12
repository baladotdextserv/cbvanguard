import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface LinkButtonProps extends ButtonProps {
  text: string;
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>((props, ref) => {
  return (
    <Button
      component='a'
      href='https://www.example.com'
      color='primary'
      sx={{
        background: "none",
        textDecoration: "underline",
        "&:hover": { background: "none", color: "primary" },
      }}
      ref={ref}
      {...props}
    >
      {props.text}
    </Button>
  );
});

export default LinkButton;
