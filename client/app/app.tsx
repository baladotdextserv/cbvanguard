"use client";

import { ThemeSettings } from "@/utils/theme/Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Source_Sans_3 } from "next/font/google";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800", "900"],
  variable: "--font-sourceSans",
});

export default function MyApp({ children }: { children: React.ReactNode }) {
  const theme = ThemeSettings();

  return (
    <main className={`${sourceSans3.variable}`}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </main>
  );
}
