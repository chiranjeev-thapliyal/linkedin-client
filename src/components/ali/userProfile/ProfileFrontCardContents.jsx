import React from 'react'

export default function ProfileFrontCardContents() {
    return (
        <div className="ProfileFrontCardContents">

            <div class="PFCC-LeftPanel mt2rem positionRelative">
                <div className="PFCC-LeftPanelHeader">
                    <h1>MD ALI SHAHANSHAH</h1>
                </div>
                <div class="PFCC-LeftPanelSubHeader">
                    <h3> Learning MERN stack | Aspiring Full Stack Web Developer at Masai School, Bengaluru, Karnataka</h3>
                </div>
                <div class="PFCC-RightPanel flex">
                    <img src="experienceLogo.png" />
                    <a href="#Experience">
                        Mytoshika IT Solutions</a>

                    <img src="educationLogo.png" />
                    <a href="#Education">
                        Masai School</a>
                </div>

                <div class="PFCC-BottomPanel">
                    <div className="PFCC-BottomPanelAddress">
                        <p>Bengaluru, Karnataka, India <span>Contact info</span></p>
                    </div>
                </div>


            </div> {/* PFCC-LeftPanel */}
        </div >//End of ProfileFrontCardContents

    )
}
