import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { LineChartData } from "../data/LineChatData";

const Activities = () => {
  const pdata = [
    {
      name: "Python",
      student: 1000,
      fees: 6000,
    },
    {
      name: "java",
      student: 2000,
      fees: 7000,
    },
    {
      name: "javaScript",
      student: 1000,
      fees: 4000,
    },
  ];
  return (
    <>
      <h1>Activites</h1>
      <ResponsiveContainer width="100%">
        <LineChart data={LineChartData} width="100%" height={100}>
          <CartesianGrid stroke="#8c8c9b" vertical={false} />
          <XAxis dataKey="name" intercept={"preserveStartEnd"} tickLine={false} axisLine={false}/>
          <YAxis tickLine={false} axisLine={false}/>
          <Legend wrapperStyle={{ top: -50, left: 450 }} />
          <Line
            type="monotone"
            dataKey="Guest"
            stroke="#9bdd7c"
            strokeWidth={5}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="User"
            stroke="#e9a0a0"
            strokeWidth={5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Activities;
