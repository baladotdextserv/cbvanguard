import { fetchData } from "./fetch";
import { HSCodeType } from "@/types";

const base = process.env.NEXT_PUBLIC_BASE_URL;

export const getHsCodeByCode = async (code: string): Promise<HSCodeType[]> => {
  let url = "";
  if (code.length == 2) {
    url = `${base}/api/hscode/header/${code}`;
  } else if (code.length == 4) {
    url = `${base}/api/hscode/header/sub/${code}`;
  } else if (code.length == 6) {
    url = `${base}/api/hscode/header/sub/ritc/${code}`;
  }
  return fetchData<HSCodeType[]>({ url, method: "GET" });
};
