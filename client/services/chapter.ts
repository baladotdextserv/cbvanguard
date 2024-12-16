import { Chapter } from "@/types";
import axios from "axios";

const base = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllChapters = async (): Promise<Chapter[]> => {
  try {
    const res = await axios.get(`${base}/api/chapter`);
    return res.data;
  } catch (error) {
    console.error("Error fetching chapters:", error);
    throw error;
  }
};

export const getChaptersBySection = async (sectionName: string): Promise<Chapter[]> => {
  try {
    const res = await axios.get(`${base}/api/chapter/section?name=${sectionName}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching chapters:", error);
    throw error;
  }
};
