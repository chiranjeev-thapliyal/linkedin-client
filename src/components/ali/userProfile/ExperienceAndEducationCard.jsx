import React from 'react'

export default function ExperienceAndEducationCard({ imageUrl, title, subTitle, timeDuration }) {
    return (
        <div className="ExperienceAndEducationCardMainDiv">

            <div className="EAEC-Box flex-sb">

                <div className="EAEC-Left flex-row" style={{ padding: "2rem" }}>
                    <div>
                        <img src={imageUrl} alt="logo" style={{ width: "5rem", height: "5rem", marginRight: "2rem" }} />
                    </div>
                    <div className="flex-col">
                        <h3>{title}</h3>
                        <p>{subTitle}</p>
                        <p className="timeDuration">{timeDuration}</p>

                    </div>
                </div>


                <div className="EAEC-Right">
                    {/* <img src="icons/editButton.svg" alt="editButton" /> */}
                </div>

            </div>
        </div>
    )
}
