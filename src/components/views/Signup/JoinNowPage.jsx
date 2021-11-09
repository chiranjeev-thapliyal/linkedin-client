import linkedinLogin from "./images/linkedinLogin.PNG";
import { SignupGoogle } from "../../assets/svg/SignupGoogle";
import loginFooter from "./images/loginFooter.PNG";

export const JoinNowPage = () => {
  return (
    <div className="loginPageMain">
      <img src={linkedinLogin} alt="" className="linkedinLogo" />
      <p className="loginHeading">Make the most of your professional life</p>
      <div className="loginFormDiv">
        <div className="inputDiv">
          <p>Email or phone number</p>
          <input type="text" />
        </div>
        <div className="inputDiv">
          <p>Password (6 or more characters)</p>
          <input type="password" />
        </div>
        <p className="agreeText">
          By clicking Agree & Join, you agree to the Linkedin{" "}
          <span>
            User <br />
            Agreement
          </span>
          , <span>Privacy Policy</span> and <span>Cookie Policy.</span>
        </p>
        <button>Agree & Join</button>
        <div className="LoginOrDiv">
          <div></div>
          <p>or</p>
          <div></div>
        </div>
        <div className="googleBtn">
          <SignupGoogle className="googleIcon" />
          <p>Sign in with Google</p>
        </div>
        <p className="loginEnd">Already on LinkedIn? <span>Sign in</span></p>
        </div>
        <img src={loginFooter} alt="" style={{position: "fixed", bottom: "0px"}}/>
    </div>
  );
};
