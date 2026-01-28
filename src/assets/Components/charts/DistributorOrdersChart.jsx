import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "A", orders: 80 },
  { name: "B", orders: 110 },
  { name: "C", orders: 150 },
  { name: "D", orders: 180 },
  { name: "E", orders: 220 },
  { name: "F", orders: 190 },
  { name: "G", orders: 250 },
  { name: "H", orders: 300 },
];

const DistributorOrdersChart = () => {
  return (
    <div className="h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="orders"
            fill="#45B7A4"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DistributorOrdersChart;
