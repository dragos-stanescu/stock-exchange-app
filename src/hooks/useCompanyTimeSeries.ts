import { useQuery } from "react-query";
import { fetchCompanyTimeSeries } from "services/companyService";

const useCompanyTimeSeries = (company: string) => {
  return useQuery(
    ["companyTimeSeries", company],
    () => fetchCompanyTimeSeries(company),
    { enabled: !!company }
  );
};

export default useCompanyTimeSeries;
