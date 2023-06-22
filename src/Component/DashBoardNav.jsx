import React from "react";
import "../Style/Dashboard.css";
import user from "../assets/Image/my image.jpg";

const DashBoardNav = () => {
  return (
    <div className="dashboardNavContainer">
      <h1>DashBoard</h1>
      <div className="navSearchMain">
        <div className="searchBox">
          <input type="text" placeholder="Search..." />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <i class="fa-regular fa-bell"></i>
        <img src={user} alt="user"/>
      </div>
    </div>
  );
};

export default DashBoardNav;
