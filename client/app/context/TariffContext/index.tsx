"use client";

import { getAllChapters } from "@/services/chapter";
import { getAllSections, getSections } from "@/services/section";
import { Chapter } from "@/types";
import { Section } from "@/types/section";
import React, { createContext, useContext, useEffect } from "react";

interface TariffContextType {
  search: string;
  chapters: Chapter[] | null;
  sections: Section[] | null;
  currChapter: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setChapters: React.Dispatch<React.SetStateAction<Chapter[] | null>>;
  setSections: React.Dispatch<React.SetStateAction<Section[] | null>>;
  setCurrChapter: React.Dispatch<React.SetStateAction<string>>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TariffContext = createContext<TariffContextType | any>(undefined);

export function TariffProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = React.useState("");
  const [currChapter, setCurrChapter] = React.useState("Hello World");
  const [chapters, setChapters] = React.useState<Chapter[] | null>(null);
  const [sections, setSections] = React.useState<Section[] | null>(null);

  useEffect(() => {
    AllChapters();
    if (search == "") {
      AllSections();
    } else {
      GetSpecificSections(search.slice(0, 2));
    }
  }, [search]);

  const AllChapters = async () => {
    const chapters = await getAllChapters();
    setChapters(chapters);
  };

  const AllSections = async () => {
    const sections = await getAllSections();
    setSections(sections);
  };

  const GetSpecificSections = async (chapterNo: string) => {
    const sections = await getSections({ chapterNo });
    setSections(sections);
  };

  return (
    <TariffContext.Provider
      value={{
        search,
        setSearch,
        chapters,
        setChapters,
        currChapter,
        setCurrChapter,
        sections,
        setSections,
      }}
    >
      {children}
    </TariffContext.Provider>
  );
}

export const useTariffContext = () => {
  const context = useContext(TariffContext);
  return context;
};
