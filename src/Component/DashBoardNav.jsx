import React, { useContext } from "react";
import "../Style/Dashboard.css";
import user from "../assets/Image/my image.jpg";
import { AuthContext } from "../context/AuthContext";

const DashBoardNav = () => {
  const{currentUser}= useContext(AuthContext);
 
  return (
    <div className="dashboardNavContainer">
      <h1>DashBoard</h1>
      <div className="navSearchMain">
        <div className="searchBox">
          <input type="text" placeholder="Search..." />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <i className="fa-regular fa-bell"></i>
        <img src={currentUser?.photoURL? currentUser.photoURL:user} alt="user"/>
      </div>
    </div>
  );
};

export default DashBoardNav;
