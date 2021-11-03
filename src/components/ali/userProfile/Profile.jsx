import React from 'react'
import ProfileAbout from './ProfileAbout'
import ProfileFrontCard from './ProfileFrontCard'

export default function Profile() {
    return (
        <div className="profileMainDiv">

            <h1>Testing Profile.jsx</h1>

            {/* 
            profileFrontCard 
            profileAbout
            profileFeatured
            profileActivity
            profileExperienceAndEducation
            profileSkills&Endorsements
            profileAccomplishments
            profileInterests
            profileEdit public profile & URL
            profilePeople also viewed
            profilePeople you may know 
            */}
            <ProfileFrontCard />
            <ProfileAbout />


        </div>// End of profileMainDiv 

    )
}
