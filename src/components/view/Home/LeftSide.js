import React from "react";
import "../../../styles/components/leftSide.css";

export default function LeftSide() {
  return (
    <div className="main_Left">
      <div className="coverPic"></div>
      <div className="profilePic"></div>
      <div className="userDetails">
        <div className="userName"> User Name</div>
        <div> User summary</div>
      </div>

      <div className="connectionDetails">
        <div>
          <div>Who viewed your profile</div>
          <div className="num">31</div>
        </div>
        <div>
          <div>Connections</div>
          <div className="num">108</div>
        </div>

        <div style={{color:'black'}}>
          {" "}
           Grow your network
        </div>
      </div>

      <div className="premium">
        <p>Access exclusive tools & insights</p>
        <div className="items">
          <img src="/images/image.svg" alt="" />
          <p>Try Premium for free</p>
        </div>
      </div>

      <div className="items premium">
        <img src="/images/item-icon.svg" alt="" />
        <p>My items </p>
      </div>
    </div>
  );
}
