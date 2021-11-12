import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import ProfileFrontCardContents from './ProfileFrontCardContents';
import {
  checkCoverImage,
  checkProfileImage,
} from '../../../utils/common.utils';

export default function ProfileFrontCard() {
  const { userDetails } = useContext(AuthContext);

  return (
    <div className='profileFrontCardMainDiv'>
      {/* <h1>Testing profileFrontCard.jsx</h1> */}
      <div className='PFC-MainComponentBox'>
        <div className='PFC-BackgroundImageBox'>
          <img src={checkCoverImage(userDetails?.cover_img)} alt='bgImage' />
        </div>{' '}
        {/* profileBackgroundImageBox */}
        <div className='PFC-FrontCardDownBox'>
          <div className='PFC-DB-ImageBox positionRelative'>
            <img src={checkProfileImage(userDetails?.profile_img)} alt='dp' />
          </div>
          {/* PFC-DB-ImageBox */}

          <ProfileFrontCardContents />
        </div>{' '}
        {/* PFC-FrontCardDownBox */}
      </div>{' '}
      {/* End of  PFC-MainComponentBox */}
    </div> // End of profileFrontCardMainDiv
  );
}
