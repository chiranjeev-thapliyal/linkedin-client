import { NetworksLeft } from "./NetworksLeft"
import { NetworksRight } from "./NetworksRight"


export const NetworksPage = () => {

    return (
        <div style={{display: "flex", paddingLeft: "7%", paddingTop: "10vh", backgroundColor: "rgb(243,242,239)"}}>
            <NetworksLeft />
            <NetworksRight />
        </div>
    )
}