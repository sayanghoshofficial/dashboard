import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import { LineChartData } from "../data/LineChatData";

const Activities = () => {
  return (
    <>
      <div className="lineChartHeading">
        <div className="innerHeading">
          <h2>Activites</h2>
          <p>
            May - June 2021 <i className="fa-solid fa-chevron-down"></i>
          </p>
        </div>
      </div>

      <ResponsiveContainer width="90%" height="80%">
        <LineChart data={LineChartData} width="90%" height={100}>
          <CartesianGrid stroke="#8c8c9b" vertical={false} />
          <XAxis
            dataKey="name"
            intercept={"preserveStartEnd"}
            tickLine={false}
            axisLine={false}
          />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ backgroundColor: "#f5f5f5" }} />
          <Legend wrapperStyle={{ top: "-10%", left: "40%" }} />
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
