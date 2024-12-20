"use client";

import { TariffProvider } from "../context/TariffContext";
import Navbar from "./ui/Navbar";
import Searcher from "./ui/Searcher/Searcher";
import TariffContainer from "./ui/TariffContainer";

export default function Page() {
  return (
    <>
      <TariffProvider>
        <Navbar />
        <Searcher />
        <TariffContainer />
      </TariffProvider>
    </>
  );
}
