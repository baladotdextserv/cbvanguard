import { Chapter } from "@/types";
import axios from "axios";

const base = process.env.NEXT_PUBLIC_BASE_URL;

interface GetChaptersResponse {
  chapters: Chapter[];
}

export const getAllChapters = async (): Promise<GetChaptersResponse> => {
  try {
    const res = await axios.get<GetChaptersResponse>(`${base}/api/chapters`);
    return res.data;
  } catch (error) {
    console.error("Error fetching chapters:", error);
    throw error;
  }
};
