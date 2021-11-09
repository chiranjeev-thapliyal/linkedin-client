import React from 'react'
import ExperienceAndEducation from './ExperienceAndEducation'
import ProfileAbout from './ProfileAbout'
import ProfileAccomplishment from './ProfileAccomplishment'
import ProfileActivity from './ProfileActivity'
import ProfileDashBoard from './ProfileDashBoard'
import ProfileFooter from './ProfileFooter'
import ProfileFrontCard from './ProfileFrontCard'
import ProfileInterests from './ProfileInterests'
import SkillsAndEndorsements from './SkillsAndEndorsements'
import Middle from './userProfileRight/Middle'

export default function Profile() {
    return (
        <div className="profileMainDiv">

            {/* <h1>Testing Profile.jsx</h1> */}

            {/* 
        
            profileFeatured
        
            profileEdit public profile & URL
            profilePeople also viewed
            profilePeople you may know 
            */}
            <div className="flex-row">
                <div className="profileLeftDiv">

                    <ProfileFrontCard />
                    <ProfileAbout />
                    <ProfileActivity />
                    <ExperienceAndEducation />
                    <SkillsAndEndorsements />
                    <ProfileAccomplishment />
                    <ProfileInterests />
                    <ProfileDashBoard />

                </div>

                <div className="profileRightDiv">
                    <Middle />

                </div>
            </div>

            <ProfileFooter />
        </div>// End of profileMainDiv 

    )
}
