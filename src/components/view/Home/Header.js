/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import * as S from "./Header.Styles";

export default function Header() {
  // const [signout, setSignOut] = useState(false);

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
            <S.NavList>
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

            <S.User>
              <a href="">
                <img src="/images/user.svg" alt="" />
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="" />
              </a>

            
                 <S.Signout>
                  <a href="">Sign Out</a>
                 </S.Signout>
            
            </S.User>

            <S.Work>
              <a href="">
                <img src="/images/nav-work.svg" alt="" />
                <span>Work</span>
                <img src="/images/down-icon.svg" alt="" />
              </a>
            </S.Work>
          </S.Wrapper>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
}
