"use client";

import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { Card } from "@mui/material";
import { SxProps, useTheme } from "@mui/material/styles";

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  sx?: SxProps;
};

const BlankCard = ({ children, className, sx }: Props) => {
  const customizer = useSelector((state: AppState) => state.customizer);

  const theme = useTheme();
  const borderColor = theme.palette.divider;

  return (
    <Card
      sx={{
        py: 4,
        border: !customizer.isCardShadow ? `1px solid ${borderColor}` : "none",
        position: "relative",
        ...sx,
      }}
      className={className}
      elevation={customizer.isCardShadow ? 9 : 0}
      variant={!customizer.isCardShadow ? "outlined" : undefined}
    >
      {children}
    </Card>
  );
};

export default BlankCard;
