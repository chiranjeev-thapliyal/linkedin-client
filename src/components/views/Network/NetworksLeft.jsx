// import styles from "./cNetworksLeft.module.css";
import { NetworksNavItem } from "./NetworksNavItem";
import { useState } from "react";
import NetworkConnections from "../../assets/svg/NetworkConnections";
import NetworkContacts from "../../assets/svg/NetworkContacts";
import NetworkFollow from "../../assets/svg/NetworkFollow";
import NetworkEvent from "../../assets/svg/NetworkEvent";
import NetworkPages from "../../assets/svg/NetworkPages";
import NetworkNews from "../../assets/svg/NetworkNews";
import NetworkGroup from "../../assets/svg/NetworkGroup";
import NetworkHashtag from "../../assets/svg/NetworkHashtag";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Ad from "./images/NetworkNavAd.PNG";
import NetworkLinkedIcon from "../../assets/svg/NetworkLinkedIcon";

export const NetworksLeft = () => {
  
  return (
    <div className="networksLeftMain">
      <div className="networkNavDiv1">
        <p className="manageNetwork">Manage my network</p>
        <NetworksNavItem />
      </div>
      <div className="netNavDiv2">
        <div className="NetNavImgDiv">
          <img src={Ad} alt="" />
        </div>
        <div className="netNavPersonalDiv">
          <p className="personalHead">Add personal contacts</p>
          <p>
            We'll periodically import and store your contacts to help you and
            others connect. You choose who to connect to who to invite.{" "}
            <span>Learn more</span>
          </p>
          <input type="text" />
          <br />
          <button className="netNavContinue">Continue</button>
          <p>More Options</p>
        </div>
        <div className="netNavFooter">
          <div>
            <p>About</p>
            <p>Accessiblity</p>
            <p>Help Center</p>
            <p>Private Terms</p>
            <p>Ad Choices</p>
            <p>Advertising</p>
            <p>Business Services</p>
            <p>Get the LinkedIn App</p>
            <p>More</p>
          </div>
          <div style={{ display: "flex" }}>
            <NetworkLinkedIcon />
            <p style={{ marginTop: "-8px", marginLeft: "5px" }}>
              LinkedIn Corporation &#169; 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
