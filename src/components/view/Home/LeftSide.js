import React from "react";
import "../../../styles/components/leftSide.css";
import Bookmark from "../../assets/svg/Bookmark";

export default function LeftSide() {
  return (
    <div className="main_Left">
      <div className="coverPic">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E16AQGX4j2u1oNlYg/profile-displaybackgroundimage-shrink_200_800/0/1633087595695?e=1642032000&v=beta&t=t5-afyk_K4B7PrvgGqpdhVgTDU8w8L1UZlMq4LuVULc"
          alt=""
        />
      </div>
      <div className="profilePic">
        <img src="../images/HB.jpg" alt="" />
      </div>
      <div className="userDetails">
        <div className="userName"> Himanshu Bisht</div>
        <div className="userSummary">
          Learning MERN Stack | Aspiring Full Stack Developer at Masai School,
          Bengaluru, Karnataka | Competitive Programmer
        </div>
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

        <div style={{ color: "black" }}> Grow your network</div>
      </div>

      <div className="premium">
        <p>Access exclusive tools & insights</p>
        <div className="items">
          <img src="/images/image.svg" alt="" />
          <p>Try Premium for free</p>
        </div>
      </div>

      <div className="items premium">
        <Bookmark />
        <p>My items </p>
      </div>
    </div>
  );
}
