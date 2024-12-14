import { Section } from "@/types/section";
import axios from "axios";

const base = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllSections = async (): Promise<Section[]> => {
  try {
    const res = await axios.get(`${base}/api/section`);
    return res.data;
  } catch (error) {
    console.error("Error fetching sections:", error);
    throw error;
  }
};
