import NetworkLinkedIcon from "../../assets/svg/NetworkLinkedIcon";
import { SignupGoogle } from "../../assets/svg/SignupGoogle";
import SignupLogo from "../../assets/svg/SignupLogo";
import signupImage1 from "./images/image1.svg";
import linkedin from "./images/linkedin.png";
import { useState } from "react";
import axios from "axios";

export const Signup = () => {
  const [join, setJoin] = useState(false);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleJoin = () => {
    setJoin(!join);
  };

  const joinNow = async () => {
    // const { email, password, first_name, last_name } = user;
    console.log("user: ", user);
    try {
      console.log("before req: ");
      let res = await axios.post(`http://localhost:8080/auth/register`, {
        email: "abc@abc.com",
        password: "1234",
        first_name: "abc",
        last_name: "abc"
      });
      console.log("after req: ");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signupMainDiv">
      <div className="signupNav">
        <img src={linkedin} alt="" className="signupLogo" />
        <div>
          <button className="btn1">Join now</button>
          <button className="btn2">Sign in</button>
        </div>
      </div>

      <div className="signupBody">
        <div className="signupLeft">
          <p className="signupHeading">
            Welcome to your Professional community
          </p>
          <div>
            {!join && (
              <div className="joinNowDiv">
                <input
                  type=""
                  placeholder="Email or phone number"
                  name="email"
                  // value={user.email}
                  onChange={handleChange}
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  // value={user.password}
                  onChange={handleChange}
                />
                {/* <p>Forgot Password?</p> */}
                <p>
                  By clicking Agree & Join, you agree to the Linkedin{" "}
                  <span>
                    User <br />
                    Agreement, Privacy Policy
                  </span>{" "}
                  and <span>Cookie Policy.</span>
                </p>
                <button onClick={handleJoin}>Agree & Join</button>
              </div>
            )}
            {/* <div className="orDiv">
                <div></div>
                <p>or</p>
                <div></div>
              </div>
              <div className="googleBtn">
                <SignupGoogle className="googleIcon" />
                <p>Sign in with Google</p>
              </div> */}
            {join && (
              <div className="continueDiv">
                <input
                  type="text"
                  placeholder="First name"
                  name="first_name"
                  // value={user.first_name}
                  onChange={handleChange}
                />
                <br />
                <input
                  type="text"
                  placeholder="Last name"
                  name="last_name"
                  // value={user.last_name}
                  onChange={handleChange}
                />
                <button onClick={joinNow}>Continue</button>
              </div>
            )}
          </div>
        </div>

        <div className="signupRight">
          <img src={signupImage1} alt="" />
        </div>
      </div>
    </div>
  );
};
