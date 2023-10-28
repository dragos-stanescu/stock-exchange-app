import { useState } from "react";

import { Box, SelectChangeEvent, Typography } from "@mui/material";
import { Header, Chart } from "components";

import { useCompanies } from "hooks/useCompanies";

export const StockExchangeView = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const { data, isLoading, isError } = useCompanies(1);

  const handleCompanyChange = (event: SelectChangeEvent<string>) => {
    setSelectedCompany(event.target.value as string);
  };

  if (isLoading) {
    return <div>Fetching companies...</div>;
  }

  if (isError) {
    return <div>Error fetching companies</div>;
  }

  return (
    <Box>
      <Header
        companies={data.datasets}
        selectedCompany={selectedCompany}
        onCompanyChange={handleCompanyChange}
      />
      {selectedCompany ? (
        <Chart company={selectedCompany} />
      ) : (
        <Typography variant="h6" gutterBottom sx={{ padding: 5 }}>
          Please select a company from the header
        </Typography>
      )}
    </Box>
  );
};
