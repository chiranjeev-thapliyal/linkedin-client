import React from 'react';
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

export default function Profile() {
  return (
    <div className='profileMainDiv'>
      <div className='flex-row'>
        <div className='profileLeftDiv'>
          <ProfileFrontCard />
          <ProfileDashBoard />
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
