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

export default function Chart1({ orders }) {
  return (
    <div className="my-20">
      <h5 className="text-2xl font-bold py-3"> Orders Amount</h5>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={orders}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            type="monotone"
            dataKey={`fullprice`}
            fill="#8884d8"
            activeDot={{ r: 8 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
