import linkedinLogin from "./images/linkedinLogin.PNG";
import { SignupGoogle } from "../../assets/svg/SignupGoogle";
import loginFooter from "./images/loginFooter.PNG";
import { useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const JoinNowPage = () => {
  const history = useHistory();
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

  const handleSignin = async () => {
    console.log(signinUser);
    try {
      let res = await axios.post(`http://localhost:8080/auth/login`, signinUser)
      console.log(res);
      history.push("/home");
    }
    catch (err) {
      console.log(err);
    }
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
