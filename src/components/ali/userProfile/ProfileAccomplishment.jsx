import React from 'react';
import CardHeader from './CardHeader';
import Divider from './Divider';
import ProfileAccomplishmentCard from './ProfileAccomplishmentCard';

export default function ProfileAccomplishment() {

    const data = [
        {
            title: "Languages",
            subTitle: ["English", "Hindi", "Urdu"],

        },
        {
            title: "Honor & Award",
            subTitle: ["Most Popular Web App Award ( Construct week )"],


        }
    ]




    return (
        <div className="ProfileAccomplishmentMainDiv PMD">


            <CardHeader title={"Accomplishments"} image1={"icons/plusButton.svg"} />

            {
                data.map((e, i) => (

                    <div>

                        <ProfileAccomplishmentCard title={e.title} subTitle={e.subTitle} />

                        <div className="ml2rem">

                            <br />
                            {i < data.length - 1 ? <Divider /> : ""}
                        </div>
                    </div>
                ))
            }




        </div>
    )
}
