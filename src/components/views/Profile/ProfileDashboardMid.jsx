import React from 'react'

export default function ProfileDashboardMid() {

    const profileViews = 224;
    const postViews = 41;
    const searchViews = 33;

    return (
        <div>
            <div className="PD-MidBox  mt2rem ">

                <div className=" flex-sb">


                    <div className="mxw33 pd1rem">
                        <h1 className="lightBlueC weight300">{profileViews}</h1>
                        <p>Who viewed you profile</p>
                    </div>


                    <div className="flex-row mxw33" >
                        {/* style={{ backgroundColor: "red" }} */}
                        <div className="verticalLine"  ></div>
                        <div className="PD-TextBox pd1rem"  >
                            <h1 className="lightBlueC weight300">{postViews}</h1>
                            <p>Post views</p>
                        </div>
                    </div>

                    <div className="flex-row mxw33">

                        <div className="verticalLine"></div>
                        <div className="PD-TextBox pd1rem">
                            <h1 className="lightBlueC weight300">{searchViews}</h1>
                            <p>Search appearances</p>
                        </div>
                    </div>

                </div>


            </div >
        </div>
    )
}
