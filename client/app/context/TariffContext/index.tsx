"use client";

import { getAllChapters } from "@/services/chapter";
import { Chapter } from "@/types";
import React, { createContext, useContext, useEffect } from "react";

interface TariffContextType {
  search: string;
  chapters: Chapter[] | null;
  currChapter: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setChapters: React.Dispatch<React.SetStateAction<Chapter[] | null>>;
  setCurrChapter: React.Dispatch<React.SetStateAction<string>>;
}

export const TariffContext = createContext<TariffContextType | any>(undefined);

export function TariffProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = React.useState("");
  const [currChapter, setCurrChapter] = React.useState("Hello World");
  const [chapters, setChapters] = React.useState<Chapter[] | null>(null);

  useEffect(() => {
    AllChapters();
  }, [search]);

  const AllChapters = async () => {
    const chapters = await getAllChapters();
    console.log(chapters);
    setChapters(chapters);
  };

  return (
    <TariffContext.Provider
      value={{ search, setSearch, chapters, setChapters, currChapter, setCurrChapter }}
    >
      {children}
    </TariffContext.Provider>
  );
}

export const useTariffContext = () => {
  const context = useContext(TariffContext);
  return context;
};
