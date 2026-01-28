import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 1800 },
  { month: "Feb", value: 2200 },
  { month: "Mar", value: 2500 },
  { month: "Apr", value: 2100 },
  { month: "May", value: 2600 },
  { month: "Jun", value: 3000 },
  { month: "Jul", value: 3500 },
  { month: "Aug", value: 3200 },
  { month: "Sep", value: 2800 },
  { month: "Oct", value: 3000 },
  { month: "Nov", value: 2400 },
  { month: "Dec", value: 2900 },
];

const ProductionChart = () => {
  return (
    <div className="h-[220px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="prodColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2EC4B6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#2EC4B6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#2EC4B6"
            fill="url(#prodColor)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductionChart;
