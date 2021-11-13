import { NetworkInvitations } from "./NetworkInvitations";
import { NetworkSuggestion1 } from "./NetworksSuggestion1";
import { NetworkSuggestion2 } from "./NetworkSuggestion2";

export const NetworksRight = ({userDetails}) => {
    return (
      <div className="networkRightDiv">
        <div className="networksRightMain">
          <NetworkInvitations userDetails={userDetails}/>
        </div>
        <div className="networksRightMain networkRightSecond">
          <NetworkSuggestion1 userDetails={userDetails} heading1={"Industry Leaders you may know"} />
          <NetworkSuggestion2 heading1={"Trending pages in your network"} />
          {/* <NetworkSuggestion1
            heading1={"People you may know in Greater Hyderabad Area"}
          /> */}
        </div>
      </div>
    );  
};
