import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import '../../../styles/components/leftSide.css';
import Bookmark from '../../assets/svg/Bookmark';
import { checkCoverImage, checkProfileImage, toCapitalize } from '../../../utils/common.utils';

export default function LeftSide() {
  const { userDetails, userProfile } = useContext(AuthContext);
  const fullName =
    toCapitalize(userDetails?.first_name) +
    ' ' +
    toCapitalize(userDetails?.last_name);

  return (
    <div className='main_Left'>
      <div className='coverPic'>
        <img
          src={checkCoverImage(userProfile?.cover_img)}
          alt={fullName || 'Himanshu Bisht'}
        />
      </div>
      <div className='profilePic'>
        <img
          src={checkProfileImage(userDetails?.profile_img)}
          alt={fullName || 'Himanshu Bisht'}
        />
      </div>
      <div className='userDetails'>
        <div className='userName'> {fullName || 'Himanshu Bisht'}</div>
        <div className='userSummary'>{userProfile?.description || ''}</div>
      </div>

      <div className='connectionDetails'>
        <div>
          <div>Who viewed your profile</div>
          <div className='num'>31</div>
        </div>
        <div>
          <div>Connections</div>
          <div className='num'>{userDetails?.connections?.length}</div>
        </div>

        <div style={{ color: 'black' }}> Grow your network</div>
      </div>

      <div className='premium'>
        <p>Access exclusive tools & insights</p>
        <div className='items'>
          <img src='/images/image.svg' alt='' />
          <p>Try Premium for free</p>
        </div>
      </div>

      <div className='items premium'>
        <Bookmark />
        <p>My items </p>
      </div>
    </div>
  );
}
