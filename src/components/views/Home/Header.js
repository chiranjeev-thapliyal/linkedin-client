/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import '../../../styles/components/Header.css';
import { checkProfileImage, toCapitalize } from '../../../utils/common.utils';
import * as S from './Header.Styles';

export default function Header() {
  const { userDetails } = useContext(AuthContext);
  const [signout, setSignOut] = useState(false);

  // const handleClick = () => {
  //   setSignOut(!signout);
  //   console.log('changed',signout);
  // }

  const fullName =
    toCapitalize(userDetails.first_name) +
    ' ' +
    toCapitalize(userDetails.last_name);

  const { handleLogout } = useContext(AuthContext);

  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <Link to='/home'>
            <img src='/images/home-logo.svg' alt='' />
          </Link>
        </S.Logo>

        <S.Search>
          <div>
            <input type='text' placeholder='Search' />
          </div>
          <S.SearchIcon>
            <img src='/images/search-icon.svg' alt='' />
          </S.SearchIcon>
        </S.Search>

        <S.Nav>
          <S.Wrapper>
            <S.NavList>
              <NavLink to='/home'>
                <img src='/images/nav-home.svg' alt='' />
                <span>Home</span>
              </NavLink>
            </S.NavList>
            <S.NavList>
              <NavLink to='/my-networks'>
                <img src='/images/nav-network.svg' alt='' />
                <span>My Network</span>
              </NavLink>
            </S.NavList>
            <S.NavList>
              <NavLink to='/jobs'>
                <img src='/images/nav-jobs.svg' alt='' />
                <span>Jobs</span>
              </NavLink>
            </S.NavList>
            <S.NavList>
              <NavLink to='/messaging'>
                <img src='/images/nav-messaging.svg' alt='' />
                <span>Messaging</span>
              </NavLink>
            </S.NavList>
            <S.NavList>
              <NavLink to='/notification'>
                <img src='/images/nav-notifications.svg' alt='' />
                <span>Notifications</span>
              </NavLink>
            </S.NavList>

            <S.User
              onClick={() => {
                setSignOut(!signout);
              }}
            >
              <div className='profileTab'>
                <img
                  src={checkProfileImage(userDetails.profile_img)}
                  alt={fullName}
                />
                <div>
                  <span>Me</span>
                  <img src='/images/down-icon.svg' alt='' />
                </div>
              </div>
            </S.User>

            {signout && (
              <S.Signout>
                <div className='profileHeader'>
                  <div>
                    <img
                      src={checkProfileImage(userDetails.profile_img)}
                      alt={fullName}
                    />
                    <div>
                      <p>
                        <b>{fullName}</b>
                      </p>
                      <p>{userDetails.description}</p>
                    </div>
                  </div>
                  <Link className='btn-profile' to='/profile'>
                    View Profile
                  </Link>
                </div>

                <div className='accountSettings'>
                  <p>
                    <b>Account</b>
                  </p>
                  <p>Settings & Privacy</p>
                  <p>Help</p>
                  <p>Language</p>
                </div>

                <div className='manageProfile'>
                  <p>
                    <b>Manage</b>
                  </p>
                  <p>Posts & Activity</p>
                  <p>Job Posting Account </p>
                </div>

                <div onClick={handleLogout} className='signoutOption'>
                  Sign Out
                </div>
              </S.Signout>
            )}

            <S.Work>
              <div className='profileTab'>
                <img src='/images/nav-work.svg' alt='' />
                <div>
                  <span>Work</span>
                  <img src='/images/down-icon.svg' alt='' />
                </div>
              </div>
            </S.Work>
          </S.Wrapper>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
}
