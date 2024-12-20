import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { SxProps, Theme } from "@mui/system";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const SimpleBarStyle = styled(SimpleBar)(() => ({
  maxHeight: "100%",
}));

interface PropsType {
  children: React.ReactElement | React.ReactNode;
  sx: SxProps;
}

const Scrollbar = (props: PropsType) => {
  const { children, sx, ...other } = props;
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  if (lgDown) {
    return <Box sx={{ overflowX: "auto" }}>{children}</Box>;
  }

  return (
    <SimpleBarStyle sx={sx} {...other}>
      {children}
    </SimpleBarStyle>
  );
};

export default Scrollbar;
