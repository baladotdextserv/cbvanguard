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
      size='small'
      ref={ref}
      {...props}
    >
      {props.text}
    </Button>
  );
});

LinkButton.displayName = "LinkButton";

export default LinkButton;
