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

export default function Profile() {
    return (
        <div className="profileMainDiv">

            {/* <h1>Testing Profile.jsx</h1> */}

            {/* 
           // profileFrontCard 
           // profileAbout
            profileFeatured
           // profileActivity
           // profileExperienceAndEducation
            // profileSkills&Endorsements
            // profileAccomplishments
            // profileInterests
            profileEdit public profile & URL
            profilePeople also viewed
            profilePeople you may know 
            */}
            <div className="profileLeftDiv">

                <ProfileFrontCard />
                <ProfileAbout />
                <ProfileActivity />
                <ExperienceAndEducation />
                <SkillsAndEndorsements />
                <ProfileAccomplishment />
                <ProfileInterests />

                <ProfileDashBoard />

                <ProfileActivity />
            </div>

            <ProfileFooter />
        </div>// End of profileMainDiv 

    )
}
