import { useState } from "react";
import { MdDone } from "react-icons/md";
import NetworkCross from "../../assets/svg/NetworkCross";

export const NetworkSuggestionItem2 = ({id, bgImg, avatar, name, common}) => {
  const [follow, setFollow] = useState("");

  const handleConnect = (id) => {
    setFollow(id);
  };

  return (
    <div className="NetSugItemDiv" style={{height: "270px"}}>
      <div className="NetCrossDiv">
        <NetworkCross className="netCross" />
      </div>
      <img className="bgDiv" src={bgImg} alt="" />
      <img className="avatarImg" style={{borderRadius: "0px", marginTop: "-5rem"}} src={avatar} alt="" />
      <p className="NetSuggestionName" style={{padding: "1rem"}}>{name}</p>
      <p>{common}</p>
      <button
        className="NetSuggestConnect"
        onClick={() => {
          handleConnect(id);
        }}
      >
        {id === follow ? (
          <>
            {" "}
            <MdDone /> Following
          </>
        ) : (
          "Follow"
        )}
      </button>
    </div>
  );
};
