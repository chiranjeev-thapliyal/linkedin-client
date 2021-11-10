import React from 'react'

export default function ProfileAccomplishmentCard({ title, subTitle }) {

    const n = subTitle.length;
    console.log("n", n.length)



    return (
        <div className="ProfileAccomplishmentCard ml2rem">

            <div className="flex-row ">
                <h1 className="lightBlueC weight400 mr1rem" >{n}</h1>

                <div className="flex-col mt05rem">
                    <h4 className="lightBlueC">{title}</h4>

                    <div className="flex-row">
                        {
                            subTitle.map((e, i) => (
                                <span>
                                    {e}

                                    <span style={{ margin: "1rem", fontSize: "x-large", fontWeight: "600" }}>
                                        {i < subTitle.length - 1 ? "." : ""}
                                    </span>


                                </span>



                            ))
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}
