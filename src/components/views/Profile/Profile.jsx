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
  const { userID } = useParams();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/profile/${userID}`)
      .then(({ data }) => {
        console.log('data: ', data);
        setUserDetails({ ...data.profile });
      })
      .catch((e) => console.log('something went wrong'));
  }, []);

  return userDetails && userDetails.first_name ? (
    <div className='profileMainDiv'>
      <div className='flex-row'>
        <div className='profileLeftDiv'>
          <ProfileFrontCard userDetails={userDetails} />
          <ProfileDashBoard userDetails={userDetails}/>
          <ProfileAbout userDetails={userDetails}/>
          <ProfileActivity userDetails={userDetails}/>
          <ExperienceAndEducation userDetails={userDetails}/>
          <SkillsAndEndorsements userDetails={userDetails}/>
          <ProfileAccomplishment userDetails={userDetails}/>
          <ProfileInterests userDetails={userDetails}/>
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
  ) : (
    ''
  );
}
