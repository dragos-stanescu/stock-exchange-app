import { useQuery } from "react-query";
import { fetchCompanies } from "services/companyService";

export const useCompanies = (page: number) => {
  return useQuery(["companies", page], () => fetchCompanies(page));
};
