import linkedinLogin from "./images/linkedinLogin.PNG";
import { SignupGoogle } from "../../assets/svg/SignupGoogle";
import loginFooter from "./images/loginFooter.PNG";
import { useState } from "react";

export const JoinNowPage = () => {
  const [signinUser, setSigninUser] = useState({
    email: "",
    password: ""
  })

  const handleSigninUser = (e) => {
    const { name, value } = e.target;
    setSigninUser({
      ...signinUser,
      [name]: value
    })
  }

  const handleSignin = () => {
    console.log(signinUser);
  }

  return (
    <div className="loginPageMain">
      <img src={linkedinLogin} alt="" className="linkedinLogo" />
      <p className="loginHeading">Stay updated on your professional world</p>
      <div className="loginFormDiv">
        <div className="inputDiv">
          <p>Email or phone number</p>
          <input type="text" name="email" onChange={handleSigninUser} />
        </div>
        <div className="inputDiv">
          <p>Password</p>
          <input type="password" name="password" onChange={handleSigninUser} />
        </div>
        <p className="agreeText">Forgot Password ?</p>
        {/* <p className="agreeText">
          By clicking Agree & Join, you agree to the Linkedin{" "}
          <span>
            User <br />
            Agreement
          </span>
          , <span>Privacy Policy</span> and <span>Cookie Policy.</span>
        </p> */}
        <button onClick={handleSignin}>Sign in</button>
        <div className="LoginOrDiv">
          <div></div>
          <p>or</p>
          <div></div>
        </div>
        <div className="googleBtn">
          <SignupGoogle className="googleIcon" />
          <p>Sign in with Google</p>
        </div>
        <p className="loginEnd">
          New to LinkedIn? <span>Join now</span>
        </p>
      </div>
      <img
        src={loginFooter}
        alt=""
        style={{ position: "fixed", bottom: "0px" }}
      />
    </div>
  );
};
