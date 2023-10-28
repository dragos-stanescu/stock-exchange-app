import axios from "axios";
import { NASDAQ_API_KEY } from "const/app";
import { ENDPOINTS } from "const/endpoints";

export const fetchCompanies = async (page: number) => {
  const response = await axios.get(ENDPOINTS.GET_COMPANIES, {
    params: {
      api_key: NASDAQ_API_KEY,
      database_code: "WIKI",
      page,
    },
  });

  return response.data;
};

export const fetchCompanyTimeSeries = async (company: string) => {
  const endpoint = ENDPOINTS.GET_TIME_SERIES.replace("{dataset_code}", company);

  const response = await axios.get(endpoint, {
    params: {
      api_key: NASDAQ_API_KEY,
    },
  });

  return response.data;
};
