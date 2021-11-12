import NetworkConnections from "../../assets/svg/NetworkConnections";
import { useState } from "react";
import NetworkContacts from "../../assets/svg/NetworkContacts";
import NetworkFollow from "../../assets/svg/NetworkFollow";
import NetworkGroup from "../../assets/svg/NetworkGroup";
import NetworkEvent from "../../assets/svg/NetworkEvent";
import NetworkPages from "../../assets/svg/NetworkPages";
import NetworkLess from "../../assets/svg/NetworkLess";
import NetworkMore from "../../assets/svg/NetworkMore";
import NetworkNews from "../../assets/svg/NetworkNews";
import NetworkHashtag from "../../assets/svg/NetworkHashtag";

export const NetworksNavItem = ({ title, count, children }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  
  return (
    <div>
      <div className="NetworksNavItemsDiv">
        <div className="NavItemsFlex">
          <NetworkConnections className="NavIcon" />
          <p className="netNavItemTitle">Connections</p>
          {/* <p className="netNavItemCount"
            style={{ marginLeft: "9rem" }}
          >
            358
          </p> */}
        </div>
        <div className={show ? "hide" : "unhide"}>
          <div className="NavItemsFlex">
            <NetworkContacts className="NavIcon" />
            <p className="netNavItemTitle">Contacts</p>
            {/* <p className="netNavItemCount"
              style={{ marginLeft: "12.5rem" }}
            >
              73
            </p> */}
          </div>
          <div className="NavItemsFlex">
            <NetworkFollow className="NavIcon" />
            <p className="netNavItemTitle">People I Follow</p>
            {/* <p className="netNavItemCount"
              style={{ marginLeft: "8rem" }}
            >
              11
            </p> */}
          </div>
          <div className="NavItemsFlex">
            <NetworkGroup className="NavIcon" />
            <p className="netNavItemTitle">Group</p>
            {/* <p className="netNavItemCount"
              style={{ marginLeft: "14.8rem" }}
            >
              4
            </p> */}
          </div>
          <div className="NavItemsFlex">
            <NetworkEvent className="NavIcon" />
            <p className="netNavItemTitle">Event</p>
            {/* <p className="netNavItemCount"
              style={{ marginLeft: "15.5rem" }}
            >
              1
            </p> */}
          </div>
          <div className="NavItemsFlex">
            <NetworkPages className="NavIcon" />
            <p className="netNavItemTitle">Pages</p>
            {/* <p className="netNavItemCount"
              style={{ marginLeft: "15.5rem" }}
            >
              9
            </p> */}
          </div>
          <div className="NavItemsFlex">
            <NetworkNews className="NavIcon" />
            <p className="netNavItemTitle">Newsletters</p>
            {/* <p className="netNavItemCount"
              style={{ marginLeft: "11.3rem" }}
            >
              0
            </p> */}
          </div>
          <div className="NavItemsFlex">
            <NetworkHashtag className="NavIcon" />
            <p className="netNavItemTitle">Hashtag</p>
            {/* <p className="netNavItemCount"
              style={{ marginLeft: "13.8rem" }}
            >
              1
            </p> */}
          </div>
        </div>
      </div>
      <button onClick={handleToggle} className="NetNavBtn1">
        {show ? (
          <>
            Show More <NetworkMore />
          </>
        ) : (
          <>
            show Less <NetworkLess />
          </>
        )}
      </button>
    </div>
  );
};
