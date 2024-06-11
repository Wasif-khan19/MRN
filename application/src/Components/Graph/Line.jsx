import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement
);

export const LineGraph = () => {
  return <div>Line</div>;
};

export default Line; 
