"use client";

import { ThemeSettings } from "@/utils/theme/Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function MyApp({ children }: { children: React.ReactNode }) {
  const theme = ThemeSettings();

  return (
    <main>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </main>
  );
}
