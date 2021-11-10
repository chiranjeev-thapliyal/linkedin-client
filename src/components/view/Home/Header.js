/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../../../styles/components/Header.css";
import * as S from "./Header.Styles";

export default function Header() {
  const [signout, setSignOut] = useState(false);

  // const handleClick = () => {
  //   setSignOut(!signout);
  //   console.log('changed',signout);
  // }

  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </S.Logo>

        <S.Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <S.SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </S.SearchIcon>
        </S.Search>

        <S.Nav>
          <S.Wrapper>
            <S.NavList className="active">
              <a>
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </S.NavList>
            <S.NavList >
              <a>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </S.NavList>
            <S.NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </S.NavList>
            <S.NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </S.NavList>
            <S.NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </S.NavList>

            <S.User
              onClick={() => {
                setSignOut(!signout);
              }}
            >
              <div className="profileTab">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQFmeJIz0DYD9A/profile-displayphoto-shrink_200_200/0/1625409631133?e=1642032000&v=beta&t=VQwKOFqHxw1L3S_OR5gx1wK0MzCSICZcCGCgD05Msx0"
                  alt=""
                />
                <div>
                  <span>Me</span>
                  <img src="/images/down-icon.svg" alt="" />
                </div>
              </div>
            </S.User>

            {signout && (
              <S.Signout>
                <div className="profileHeader">
                  <div>
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C4E03AQFmeJIz0DYD9A/profile-displayphoto-shrink_200_200/0/1625409631133?e=1642032000&v=beta&t=VQwKOFqHxw1L3S_OR5gx1wK0MzCSICZcCGCgD05Msx0"
                      alt=""
                    />
                    <div>
                      <p>
                        <b>Himanshu Bisht</b>
                      </p>
                      <p>User Summary</p>
                    </div>
                  </div>
                  <button>View Profile</button>
                </div>

                <div className="accountSettings">
                  <p>
                    <b>Account</b>
                  </p>
                  <p>Settings & Privacy</p>
                  <p>Help</p>
                  <p>Language</p>
                </div>

                <div className="manageProfile">
                  <p>
                    <b>Manage</b>
                  </p>
                  <p>Posts & Activity</p>
                  <p>Job Posting Account </p>
                </div>

                <div className="signoutOption">Sign Out</div>
              </S.Signout>
            )}

            <S.Work>
              <a href="">
                <img src="/images/nav-work.svg" alt="" />
                <div>
                  <span>Work</span>
                  <img src="/images/down-icon.svg" alt="" />
                </div>
              </a>
            </S.Work>
          </S.Wrapper>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
}
