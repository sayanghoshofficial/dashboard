import React from "react";
import {
  Activities,
  AnalyticsBox,
  DashBoardLeft,
  DashBoardNav,
  PieRechartComponent,
  Schedule,
} from "../Component";
import "../Style/Dashboard.css";
import { Analytics } from "../data/analyticsData";

const DashBoard = () => {
  return (
    <div className="dashboardMainCointainer">
      <div className="leftD">
        <DashBoardLeft />
      </div>
      <div className="rightD">
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
        <div className="lineGraphBox">
          <Activities />
        </div>
        <div className="bottomDiv">
          <div className="pieChart">
            <PieRechartComponent />
          </div>
          <div className="todaysSchedule">
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
