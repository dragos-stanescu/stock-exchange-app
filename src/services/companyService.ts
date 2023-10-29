import axios from "axios";
import { NASDAQ_API_KEY } from "const/app";
import { ENDPOINTS } from "const/endpoints";

export const fetchCompanies = async (page: number) => {
  try {
    const response = await axios.get(ENDPOINTS.GET_COMPANIES, {
      params: {
        api_key: NASDAQ_API_KEY,
        database_code: "WIKI",
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch companies");
  }
};

export const fetchCompanyTimeSeries = async (company: string) => {
  try {
    const endpoint = ENDPOINTS.GET_TIME_SERIES.replace(
      "{dataset_code}",
      company
    );

    const response = await axios.get(endpoint, {
      params: {
        api_key: NASDAQ_API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch company time series");
  }
};
