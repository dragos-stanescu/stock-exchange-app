import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";

import useCompanyTimeSeries from "hooks/useCompanyTimeSeries";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = ({ company }: { company: string }) => {
  const { data, error, isLoading } = useCompanyTimeSeries(company);

  if (isLoading) {
    return <div>Fetching data...</div>;
  }

  if (error || !data) {
    return <div>Error fetching data</div>;
  }

  const chartData = {
    labels: data.dataset_data.data.map((item: any) => item[0]),
    datasets: [
      {
        label: "Stock Evolution",
        data: data.dataset_data.data.map((item: any) => item[1]),
        fill: false,
        borderColor: "green",
        backgroundColor: "green",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: `${company} Stock Evolution`,
      },
    },
  };

  return (
    <Box sx={{ width: 800, height: 500 }}>
      <Line data={chartData} options={options} />
    </Box>
  );
};
