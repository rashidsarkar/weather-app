import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const RechartsChart = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div>
      <div className="p-4 mt-8 rounded-md custom-card">
        {/* Time range selection dropdown */}
        <select id="timeRangeSelect" className="p-2 border rounded-md">
          {/* Add time range options here */}
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
        </select>
        {/* Recharts Line Chart */}
        <LineChart
          width={600}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#ccc" />
        </LineChart>
      </div>
    </div>
  );
};

export default RechartsChart;
