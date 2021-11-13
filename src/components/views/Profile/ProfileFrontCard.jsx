import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import ProfileFrontCardContents from './ProfileFrontCardContents';
import {
  checkCoverImage,
  checkProfileImage,
} from '../../../utils/common.utils';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProfileFrontCard({ userDetails }) {
  // const { userID } = useParams();
  // const [userDetails, setUserDetails] = useState({});

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8080/profile/${userID}`)
  //     .then(({ data }) => {
  //       console.log('data: ', data);
  //       setUserDetails({ ...data.profile });
  //     })
  //     .catch((e) => console.log('something went wrong'));
  // }, []);

  return (
    <div className='profileFrontCardMainDiv'>
      {/* <h1>Testing profileFrontCard.jsx</h1> */}
      <div className='PFC-MainComponentBox'>
        <div className='PFC-BackgroundImageBox'>
          <img src={checkCoverImage(userDetails.cover_img)} alt='bgImage' />
        </div>{' '}
        {/* profileBackgroundImageBox */}
        <div className='PFC-FrontCardDownBox'>
          <div className='PFC-DB-ImageBox positionRelative'>
            <img src={checkProfileImage(userDetails.profile_img)} alt='dp' />
          </div>
          {/* PFC-DB-ImageBox */}

          <ProfileFrontCardContents userDetails={userDetails} />
        </div>{' '}
        {/* PFC-FrontCardDownBox */}
      </div>{' '}
      {/* End of  PFC-MainComponentBox */}
    </div> // End of profileFrontCardMainDiv
  );
}
