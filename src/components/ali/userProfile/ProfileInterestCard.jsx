import React from 'react'

export default function ProfileInterestCard({ imgUrl, title, subTitle, followers }) {
    return (
        <div className="ProfileInterestCard">
            <div className="flex-row">

                <div className="PIC-imageBox img5 mr1rem">
                    <img src={imgUrl} alt="companyLogo" />
                </div>

                <div className="PIC-ContentBox flex-col cardText" >
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
                    <p>{followers} followers</p>
                </div>


            </div>
        </div>
    )
}
