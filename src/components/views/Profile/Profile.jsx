import React, { useContext, useEffect, useState } from 'react';
import '../../../styles/pages/_profile.scss';
import ExperienceAndEducation from './ExperienceAndEducation';
import ProfileAbout from './ProfileAbout';
import ProfileAccomplishment from './ProfileAccomplishment';
import ProfileActivity from './ProfileActivity';
import ProfileDashBoard from './ProfileDashBoard';
import ProfileFooter from './ProfileFooter';
import ProfileFrontCard from './ProfileFrontCard';
import ProfileInterests from './ProfileInterests';
import SkillsAndEndorsements from './SkillsAndEndorsements';
import Middle from './ProfileRight/Middle';
import { Redirect, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import axios from 'axios';

export default function Profile() {
  const [isUser, setIsUser] = useState(true);
  const { userID } = useParams();
  const { userDetails } = useContext(AuthContext);

  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    if (userID === userDetails._id) {
      setUserProfile(userDetails);
    } else {
      axios
        .get(`http://localhost:8080/profile/${userID}`)
        .then(({ data }) => setUserProfile(data.profile))
        .catch((e) => setIsUser(false));
    }
  }, []);

  if (!isUser) {
    return <Redirect to='/home' />;
  }

  return (
    <div className='profileMainDiv'>
      <div className='flex-row'>
        <div className='profileLeftDiv'>
          <ProfileFrontCard />
          {userProfile && userProfile._id === userDetails._id && (
            <ProfileDashBoard />
          )}
          <ProfileAbout />
          <ProfileActivity />
          <ExperienceAndEducation />
          <SkillsAndEndorsements />
          <ProfileAccomplishment />
          <ProfileInterests />
        </div>

        <div className='profileRightDiv'>
          <Middle text='People also viewed' />
          <div className='mt2rem'>
            <Middle text='People you may know' />
          </div>
        </div>
      </div>

      <ProfileFooter />
    </div>
  );
}
