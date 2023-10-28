import {
  AppBar,
  Toolbar,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Company } from "types/company";

type HeaderProps = {
  companies: Company[];
  selectedCompany: string;
  onCompanyChange: (event: SelectChangeEvent<string>) => void;
};

export const Header = ({
  companies,
  selectedCompany,
  onCompanyChange,
}: HeaderProps) => {
  const sortedCompanies = [...companies].sort(
    (comp1: Company, comp2: Company) =>
      comp1.dataset_code.localeCompare(comp2.dataset_code)
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
          <Select
            id="company-selector"
            value={selectedCompany}
            onChange={onCompanyChange}
            displayEmpty
            sx={{ backgroundColor: "white", borderRadius: 2, m: 1, p: 1 }}
          >
            {!selectedCompany && (
              <MenuItem value="">
                <em>Select a company</em>
              </MenuItem>
            )}
            {sortedCompanies.map((company: Company) => (
              <MenuItem key={company.id} value={company.dataset_code}>
                {company.dataset_code}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};
