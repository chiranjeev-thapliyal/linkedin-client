import { useState } from "react";
import { NetworkInvitations } from "./NetworkInvitations";
import { NetworkSuggestion1 } from "./NetworksSuggestion1";
import { NetworkSuggestion2 } from "./NetworkSuggestion2";

export const NetworksRight = () => {
  const [id, setId] = useState("");

    const handleId = (e) => {
      setId(e);
    }

    return (
      <div className="networkRightDiv">
        <div className="networksRightMain">
          <NetworkInvitations id={id}/>
        </div>
        <div className="networksRightMain networkRightSecond">
          <NetworkSuggestion1 heading1={"Industry Leaders you may know"} handleId={handleId}/>
          <NetworkSuggestion2 heading1={"Trending pages in your network"} />
          <NetworkSuggestion1
            heading1={"People you may know in Greater Hyderabad Area"}
          />
        </div>
      </div>
    );  
};
