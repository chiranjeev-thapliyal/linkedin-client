import { useState } from "react";
import { MdDone } from "react-icons/md";
import NetworksLink from "../../assets/svg/NetworksLink";
import NetworkCross from "../../assets/svg/NetworkCross";
import { checkCoverImage, checkProfileImage, toCapitalize } from "../../../utils/common.utils";

export const NetworkSuggestionItem = ({
  _id,
  cover_img,
  profile_img,
  first_name,
  last_name,
  description,
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
      <img className="bgDiv" src={checkCoverImage(cover_img)} alt="" />
      <img className="avatarImg" src={checkProfileImage(profile_img)} alt="" />
      <p className="NetSuggestionName">{toCapitalize(first_name) + " " + toCapitalize(last_name)}</p>
      <p className="NetSugesstionDesc">{description}</p>
      <div className="NetcommonDiv">
        {/* <NetworksLink /> */}
        {/* <p>{common}</p> */}
      </div>
      <button className="NetSuggestConnect"
        onClick={() => {
          handleConnect(_id);
        }}
      >
        {_id === connect ? (
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