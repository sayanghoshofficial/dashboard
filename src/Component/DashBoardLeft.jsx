import React from "react";
import "../Style/Dashboard.css";
import piLogo from "../assets/Image/pie-chart.png";
import tagLogo from "../assets/Image/supermarket.png";
import settingLogo from "../assets/Image/setting.png";
import scheduleLogo from "../assets/Image/timetable.png";
import userLogo from "../assets/Image/user.png";

const DashBoardLeft = () => {
  return (
    <div className="dashBoardLeftCointainer">
      <div className="boardLogo">
        <h1>Board.</h1>
      </div>
      <div className="dashboardNavigation active">
        <p>
          <img src={piLogo} alt="dashboard" />
          Dashboard
        </p>
        <p>
          <img src={tagLogo} alt="Trasactions" />
          Trasactions
        </p>
        <p>
          <img src={scheduleLogo} alt="Schedules" />
          Schedules
        </p>
        <p>
          <img src={userLogo} alt="Users" />
          Users
        </p>
        <p>
          <img src={settingLogo} alt="Settings" /> Settings
        </p>
      </div>
      <div className="endDiv">
        <p>Help</p>
        <p>Contact Us</p>
        <p className="SignOut">
          <i className="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
        </p>
      </div>
    </div>
  );
};

export default DashBoardLeft;
