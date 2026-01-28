import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2024", forecast: 5000, actual: 3000 },
  { year: "2025", forecast: 7000, actual: 0 },
  { year: "2026", forecast: 10000, actual: 0 },
  { year: "2027", forecast: 12000, actual: 0 },
  { year: "2028", forecast: 14000, actual: 0 },
  { year: "2029", forecast: 12000, actual: 0 },
  { year: "2030", forecast: 16000, actual: 0 },
  { year: "2031", forecast: 20000, actual: 0 },
];

const CarbonOffsetChart = () => {
  return (
    <div className="h-40">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(v) => `${v / 1000}k`} />
          <Tooltip />
          <Bar dataKey="forecast" fill="#BE202E" radius={[6, 6, 0, 0]} />
          <Bar dataKey="actual" fill="#F3D7DA" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CarbonOffsetChart;
