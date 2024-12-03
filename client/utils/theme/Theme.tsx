'use client'
import _ from "lodash";
import { baseDarkTheme, baselightTheme } from "./DefaultColors";
import typography from "./Typography";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { createTheme } from "@mui/material";
import components from "./Components";

export const BuildTheme = (config: any = {}) => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const defaultTheme = customizer.activeMode === "dark" ? baseDarkTheme : baselightTheme;
  const baseMode = {
    palette: {
      mode: customizer.activeMode,
    },
    typography,
  };
  const theme = createTheme(_.merge({},defaultTheme, baseMode, config));
  theme.components = components(theme);

  return theme;
};

const ThemeSettings = () => {
  const activeTheme = useSelector((state: AppState) => state.customizer.activeTheme);
  const theme = BuildTheme({
    theme: activeTheme
  });
  return theme;
};

export {ThemeSettings};
