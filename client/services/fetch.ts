import axios, { AxiosResponse } from "axios";

interface FetchDataParams {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
}

export const fetchData = async <T>({ url, method = "GET", data }: FetchDataParams): Promise<T> => {
  try {
    const res: AxiosResponse<T> = await axios({ url, method, data });

    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error(`Unexpected response status: ${res.status}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.status === 400) {
          throw new Error("Bad request. Please check the request parameters or data.");
        } else if (error.response.status === 500) {
          throw new Error("Server error. Please try again later.");
        } else {
          throw new Error(`Error: ${error.response.status}`);
        }
      } else if (error.request) {
        throw new Error("No response from server. Please check your network connection.");
      } else {
        throw new Error("Error setting up the request.");
      }
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};
