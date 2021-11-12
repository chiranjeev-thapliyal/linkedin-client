import NetworkLinkedIcon from "../../assets/svg/NetworkLinkedIcon";
import NetworkMore from "../../assets/svg/NetworkMore";

export const NetworkFooter = () => {
  return (
    <div>
      <div className="netNavFooter">
        <div>
          <p style={{paddingLeft: "1.6rem"}}>About</p>
          <p>Accessiblity</p>
          <br />
          <p>Help Center</p>
          <div className="netNavPrivate">
            <p>Private Terms</p>
            <NetworkMore />
          </div>
          <p>Ad Choices</p>
          <p>Advertising</p>
          <div className="netNavPrivate">
            <p>Business Services</p>
            <NetworkMore />
          </div>
          <p>Get the LinkedIn App</p>
          <p>More</p>
        </div>
        <div style={{ display: "flex", paddingBottom: "1rem" }}>
          <NetworkLinkedIcon />
          <p style={{ marginTop: "-3px", marginLeft: "5px" }}>
            LinkedIn Corporation &#169; 2021
          </p>
        </div>
      </div>
    </div>
  );
};
