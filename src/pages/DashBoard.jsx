import React from "react";
import { AnalyticsBox, DashBoardLeft, DashBoardNav } from "../Component";
import "../Style/Dashboard.css";

const DashBoard = () => {
  return (
    <div className="dashboardMainCointainer">
      <div className="left">
        <DashBoardLeft />
      </div>
      <div className="right">
        <DashBoardNav />
        <div className="annaliticBox">
          <AnalyticsBox />
          <AnalyticsBox />
          <AnalyticsBox />
          <AnalyticsBox />
        </div>
        <div className="lineGraphBox"></div>
        <div className="bottomDiv"></div>
      </div>
    </div>
  );
};

export default DashBoard;
