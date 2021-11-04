import React from 'react'
import ExperienceAndEducation from './ExperienceAndEducation'
import ProfileAbout from './ProfileAbout'
import ProfileAccomplishment from './ProfileAccomplishment'
import ProfileActivity from './ProfileActivity'
import ProfileFrontCard from './ProfileFrontCard'
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
            profileSkills&Endorsements
            profileAccomplishments
            profileInterests
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




                <ProfileActivity />
            </div>


        </div>// End of profileMainDiv 

    )
}
