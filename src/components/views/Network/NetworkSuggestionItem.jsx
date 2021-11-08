import { useState } from "react";
import { MdDone } from "react-icons/md";
import NetworksLink from "../../assets/svg/NetworksLink";
import NetworkCross from "../../assets/svg/NetworkCross";

export const NetworkSuggestionItem = ({
  id,
  bgImg,
  avatar,
  name,
  desc,
  common,
}) => {
  const [connect, setConnect] = useState("");

  const handleConnect = (id) => {
    setConnect(id);
  };

  return (
    <div className="NetSugItemDiv">
      <div className="NetCrossDiv">
        <NetworkCross className="netCross"/>
      </div>
      <img className="bgDiv" src={bgImg} alt="" />
      <img className="avatarImg" src={avatar} alt="" />
      <p className="NetSuggestionName">{name}</p>
      <p className="NetSugesstionDesc">{desc}</p>
      <div className="NetcommonDiv">
        <NetworksLink />
        <p>{common}</p>
      </div>
      <button className="NetSuggestConnect"
        onClick={() => {
          handleConnect(id);
        }}
      >
        {id === connect ? (
          <>
            {" "}
            <MdDone /> Pending
          </>
        ) : (
          "Connect"
        )}
      </button>
    </div>
  );
};


// pending button color: rgb(94, 94, 94);