import { fetchData } from "./fetch";
import { TariffItem } from "@/types";

const base = process.env.NEXT_PUBLIC_BASE_URL;

export const getTariff = async (tariffItem: string): Promise<TariffItem[]> => {
  const url = `${base}/api/policy/?tariffItem=${tariffItem}`;
  return fetchData<TariffItem[]>({ url, method: "GET" });
};
