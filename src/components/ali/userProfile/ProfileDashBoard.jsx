import React from 'react'
import CardHeader from './CardHeader'
import ProfileDashboardBottom from './ProfileDashboardBottom'
import ProfileDashboardMid from './ProfileDashboardMid'

export default function ProfileDashBoard() {




    return (
        <div className="ProfileDashBoard PMD ">


            <CardHeader title="Your Dashboard" subTitle="Private to you" image1={"icons/star.svg"} starTitle=" All Star" />

            <ProfileDashboardMid />
            <ProfileDashboardBottom />


        </div >
    )
}
