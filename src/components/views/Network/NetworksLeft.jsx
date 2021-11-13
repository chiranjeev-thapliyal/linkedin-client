// import styles from "./cNetworksLeft.module.css";
import { NetworksNavItem } from "./NetworksNavItem";
import Ad from "./images/NetworkNavAd.PNG";
import { NetworkFooter } from "./NetworkFooter";


export const NetworksLeft = ({userDetails}) => {
  
  return (
    <div className="networksLeftMain">
      <div className="networkNavDiv1">
        <p className="manageNetwork">Manage my network</p>
        <NetworksNavItem  userDetails={userDetails} />
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
          <input type="text" value={userDetails.email} style={{paddingLeft: "1rem"}}/>
          <br />
          <button className="netNavContinue">Continue</button>
          <p>More Options</p>
        </div>
        <NetworkFooter />
      </div>
    </div>
  );
};
