import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

class PieRechartComponent extends React.Component {
  COLORS = ["#ee8484", "#82ca9d", "#FFBB28"];
  pieData = [
    {
      name: "Supper Hoodies",
      value: 14,
    },

    {
      name: "Basic Tree",
      value: 55,
    },
    {
      name: "Custom Short Pants",
      value: 31,
    },
  ];
  CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };
  render() {
    return (
      <>
        <div className="pieHeading">
          <h2>Top Products</h2>
          <p>
            May - June 2021 <i class="fa-solid fa-chevron-down"></i>
          </p>
        </div>
        <ResponsiveContainer>
          <PieChart width={730} height={300}>
            <Legend
              wrapperStyle={{ top: "30%", left: "60%" }}
              layout="vetical"
              verticalAlign="middle"
              align="right"
            />
            <Pie
              data={this.pieData}
              color="#000000"
              dataKey="value"
              nameKey="name"
              cx="30%"
              cy="60%"
              outerRadius={80}
              fill="#8884d8"
            >
              {this.pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={this.COLORS[index % this.COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<this.CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </>
    );
  }
}
export default PieRechartComponent;
