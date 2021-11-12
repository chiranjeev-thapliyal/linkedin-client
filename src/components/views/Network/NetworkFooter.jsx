import NetworkLinkedIcon from "../../assets/svg/NetworkLinkedIcon";
import NetworkMore from "../../assets/svg/NetworkMore";

export const NetworkFooter = () => {
  return (
    <div>
      <div className="netNavFooter">
        <div>
          <p style={{ paddingLeft: "1.6rem" }}>About</p>
          <p>Accessiblity</p>
          <p>Help Center</p>
          <div className="netNavPrivate">
            <p>Private Terms</p>
            <NetworkMore />
          </div>
          <p style={{ marginTop: "0.3rem" }}>Ad Choices</p>
          <p style={{ marginTop: "0.3rem" }}>Advertising</p>
          <div className="netNavPrivate">
            <p>Business Services</p>
            <NetworkMore />
          </div>
          <p style={{ marginTop: "0.3rem" }}>Get the LinkedIn App</p>
          <br />
          <p>More</p>
        </div>
        <div style={{ display: "flex" }}>
          <NetworkLinkedIcon />
          <p style={{ marginTop: "-3px", marginLeft: "5px" }}>
            LinkedIn Corporation &#169; 2021
          </p>
        </div>
      </div>
    </div>
  );
};
