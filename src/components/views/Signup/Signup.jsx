import NetworkLinkedIcon from "../../assets/svg/NetworkLinkedIcon";
import { SignupGoogle } from "../../assets/svg/SignupGoogle";
import SignupLogo from "../../assets/svg/SignupLogo"
import signupImage1 from "./images/image1.svg";
import linkedin from "./images/linkedin.png";

export const Signup = () => {

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
              <div>
                <input type="" placeholder="Email or phone number" />
                <br />
                <input type="password" placeholder="Password" />
                <p>Forgot Password?</p>
                {/* <p>
                By clicking Agree & Join, you agree to the Linkedin{" "}
                <span>
                  User <br />
                  Agreement, Privacy Policy
                </span>{" "}
                and <span>Cookie Policy.</span>
              </p> */}

                <button>Sign in</button>
              </div>
              <div className="orDiv">
                <div></div>
                <p>or</p>
                <div></div>
              </div>
              <div className="googleBtn">
                <SignupGoogle className="googleIcon" />
                <p>Sign in with Google</p>
              </div>
            </div>
          </div>

          <div className="signupRight">
            <img src={signupImage1} alt="" />
          </div>
        </div>
      </div>
    );
}