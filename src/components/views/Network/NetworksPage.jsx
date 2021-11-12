import { NetworksLeft } from "./NetworksLeft";
import { NetworksRight } from "./NetworksRight";


export const NetworksPage = () => {
  

    return (
      <div className="networksMain">
        <div
          style={{
            display: "flex",
            marginLeft: "15%",
            // paddingLeft: "15%",
            paddingTop: "10vh",
            width: "70%"
          }}
        >
          <NetworksLeft />
          <NetworksRight />
      </div>
    );
}