import React from 'react'
import CardHeader from './CardHeader'
import More from './More'
import ProfileInterestCard from './ProfileInterestCard'

export default function ProfileInterests() {

    const data = [
        { imgUrl: "demo.png", title: "Syngenta", subTitle: "", followers: "849,070" },
        { imgUrl: "demo.png", title: "Ivy", subTitle: "", followers: "30,385" },
        { imgUrl: "demo.png", title: "Ankur Warikooo", subTitle: "Founder nearbuy.com, Mentor, Angel Investor, Pu", followers: "1,346,838" },
        { imgUrl: "demo.png", title: "Target", subTitle: "", followers: "1,392,324" },
        { imgUrl: "demo.png", title: "Cisco", subTitle: "", followers: "4,796,661" },
        { imgUrl: "demo.png", title: "Bill Gates", subTitle: "Co-chair, Bill & Melinda Gates Foundation", followers: "34,598,688" },
    ]


    return (
        <div className="ProfileInterestsMainDiv PMD">

            <CardHeader title="Interests" />

            <div className="PI-CardBox  mt2rem">


                <div className="PICB-ItemBox flex-wrap flex-sb" >

                    {
                        data.map((e, i) => (
                            <div className="PICB-Items" >
                                <ProfileInterestCard imgUrl={e.imgUrl} title={e.title} subTitle={e.subTitle} followers={e.followers} />

                                {i % 2 != 0 ? <br /> : ""}
                                {<br />}
                            </div>

                        ))
                    }

                </div>
            </div>{/* PI-CardBox  */}

            <More text={"See all"} />



        </div >// ProfileInterestsMainDiv
    )
}
