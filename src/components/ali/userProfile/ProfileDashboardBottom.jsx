import React from 'react'
import Divider from './Divider'

export default function ProfileDashboardBottom() {
    return (
        <div className="ProfileDashboardBottom PD-BottomBox  mt2rem">


            <div className="flex-col">

                <div className="flex-row ">

                    <div className="PDB-ImageBox">
                        <img src="icons/creatorIcon.svg" alt="" />
                    </div>

                    <div className="flex-col ml1rem">
                        <h3>Creator mode:</h3><span> Off</span>
                        <p>Grow your audience and get discovered by highlighting content on your profile.</p>
                    </div>
                </div>

                <div className="ml3rem mt1rem">
                    <Divider />
                </div>

                {/* My Network */}
                <div className="flex-row">

                    <div className="PDB-ImageBox">
                        <img src="icons/myNetwork.svg" alt="" />
                    </div>

                    <div className="flex-col ml1rem">
                        <h3>My Network</h3>
                        <p>Manage your connections, events, and interests.</p>

                    </div>

                </div>
                <div className="ml3rem mt1rem">
                    <Divider />
                </div>

                {/* Salary */}
                <div className="flex-row ">

                    <div className="PDB-ImageBox">
                        <img src="icons/Salary.svg" alt="" />
                    </div>

                    <div className="flex-col ml1rem">
                        <h3>Salary insights</h3>
                        <p>See how your salary compares to others in the community.</p>
                    </div>
                </div>

                <div className="ml3rem mt1rem">
                    <Divider />
                </div>

                {/* MyItems */}
                <div className="flex-row">

                    <div className="PDB-ImageBox">
                        <img src="icons/myItems.svg" alt="" />
                    </div>

                    <div className="flex-col ml1rem">
                        <h3>My items</h3>
                        <p>Keep track of your jobs, courses and articles.</p>
                    </div>
                </div>







            </div>





        </div>
    )
}
