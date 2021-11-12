import React from 'react'
import ProfileFrontCardContents from './ProfileFrontCardContents'

export default function ProfileFrontCard() {
    return (
        <div className="profileFrontCardMainDiv">
            {/* <h1>Testing profileFrontCard.jsx</h1> */}

            <div className="PFC-MainComponentBox">


                <div className="PFC-BackgroundImageBox">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E16AQGqEB30Kdjrnw/profile-displaybackgroundimage-shrink_350_1400/0/1623062982531?e=1641427200&v=beta&t=ecm1k7b8bQ6og5JNdnorM-iAmuCSCgkRu_Wvrv_mzmo" alt="bgImage" />

                </div>  {/* profileBackgroundImageBox */}

                <div className="PFC-FrontCardDownBox">

                    <div className="PFC-DB-ImageBox positionRelative">

                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQF5SMtck2ilMQ/profile-displayphoto-shrink_800_800/0/1633069866333?e=1641427200&v=beta&t=7lSvvzOd17h1VXV60hXU4fUpuWW1bUiVUadvgAeDU0c" alt="dp" />
                    </div>{/* PFC-DB-ImageBox */}

                    <ProfileFrontCardContents />

                </div>  {/* PFC-FrontCardDownBox */}



            </div> {/* End of  PFC-MainComponentBox */}



        </div>// End of profileFrontCardMainDiv 
    )
}
