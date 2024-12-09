"use client";

import components from "./Components";
import { baseDarkTheme, baseLightTheme } from "./DefaultColors";
import typography from "./Typography";
import { darkshadows, DarkThemeColors, LightThemeColors, shadows } from "./palette";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { createTheme, ThemeOptions } from "@mui/material";
import * as locales from "@mui/material/locale";
import _ from "lodash";

export const BuildTheme = (config: any = {}) => {
  const themeOptions = LightThemeColors.find(theme => theme.name === config.theme);
  console.log(themeOptions);
  const darkthemeOptions = DarkThemeColors.find(theme => theme.name === config.theme);
  const customizer = useSelector((state: AppState) => state.customizer);
  const defaultTheme = customizer.activeMode === "dark" ? baseDarkTheme : baseLightTheme;
  const defaultShadow = customizer.activeMode === "dark" ? darkshadows : shadows;
  const themeSelect = customizer.activeMode === "dark" ? darkthemeOptions : themeOptions;
  const baseMode = {
    palette: {
      mode: customizer.activeMode,
    },
    shape: {
      borderRadius: customizer.borderRadius,
    },
    shadows: defaultShadow,
    typography: typography,
  };

  const theme = createTheme(
    _.merge({}, baseMode, defaultTheme, locales, themeSelect, {
      direction: config.direction,
    }),
  );

  theme.components = components(theme);

  return theme;
};

const ThemeSettings = () => {
  const activeTheme = useSelector((state: AppState) => state.customizer.activeTheme);
  const theme = BuildTheme({
    direction: "ltr",
    theme: activeTheme,
  });
  console.log(activeTheme);
  return theme;
};

export { ThemeSettings };
