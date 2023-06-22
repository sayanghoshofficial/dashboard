import React from "react";
import "../Style/Dashboard.css";

const Schedule = () => {
  return (
    <div className="scheduleCointainer">
      <div className="headingSchedule">
        <h3>Today's schedule</h3>
        <p>See All{" >"}</p>
      </div>
      <div className="meetingTime">
        <div className="fastMeeting">
          <h5>Meeting with suppliers from Kuta Bali</h5>
          <p>14.00-15.00</p>
          <small>at Sunset Road, Kuta ,Bali</small>
        </div>
        <div>
          <div className="senondMeeting">
            <h5>Check Operation at Giga Factory 1</h5>
            <p>18.00-20.00</p>
            <small>at Central Jakarta</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
