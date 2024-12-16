import { fetchData } from "./fetch";
import { Section } from "@/types";

const base = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllSections = async (): Promise<Section[]> => {
  const url = `${base}/api/section`;
  return fetchData<Section[]>({ url, method: "GET" });
};
