import React from "react";
import { AnalyticsBox, DashBoardLeft, DashBoardNav, Schedule } from "../Component";
import "../Style/Dashboard.css";
import { Analytics } from "../data/analyticsData";

const DashBoard = () => {
  return (
    <div className="dashboardMainCointainer">
      <div className="left">
        <DashBoardLeft />
      </div>
      <div className="right">
        <DashBoardNav />
        <div className="annaliticBox">
          {Analytics.map((a) => (
            <AnalyticsBox
              key={a.id}
              icon={a.icon}
              heading={a.heading}
              data={a.data}
              color={a.color}
            />
          ))}
        </div>
        <div className="lineGraphBox"></div>
        <div className="bottomDiv">
          <div className="pieChart"></div>
          <div className="todaysSchedule"><Schedule/></div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
