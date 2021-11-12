import React from 'react'
import Divider from './Divider';
import ExperienceAndEducationCard from './ExperienceAndEducationCard'

export default function ExperienceAndEducation() {


    const experienceData = [
        {
            imageUrl: "demo.png", title: "Java Developer", subTitle: "MyToshika IT Solutions . Full-time", timeDuration: "oct 2020 - Mar 2021 . 6 mos"
        },
        {
            imageUrl: "demo.png", title: "Java Developer", subTitle: "MyToshika IT Solutions . Full-time", timeDuration: "oct 2020 - Mar 2021 . 6 mos"
        },
        {
            imageUrl: "demo.png", title: "Java Developer", subTitle: "MyToshika IT Solutions . Full-time", timeDuration: "oct 2020 - Mar 2021 . 6 mos"
        }
    ]

    const educationData = experienceData;

    return (
        <div className="ExperienceAndEducationMainDiv PMD" >

            {/* Experience section starts here */}
            <div className="EAE-Experience" >

                <div className="ProfileActivityHeader flex-sb PAMD-Header editButton" >
                    <h2>Experience</h2>
                    <img src="icons/plusButton.svg" alt="plusButton" />
                </div>

                {/* ExperienceCard */}
                <div className="EAE-CardMainDiv"  >

                    {
                        experienceData.map((e, i) => (
                            <div className="EAE-card" key={i}>

                                <ExperienceAndEducationCard imageUrl={e.imageUrl} title={e.title} subTitle={e.subTitle} timeDuration={e.timeDuration} />
                                {i < educationData.length - 1 ? <hr className="shadowC divider" style={{ marginLeft: "12%" }} /> : ""}

                            </div>
                        ))
                    }
                </div>
            </div> {/* EAE-Experience */}

            <Divider />

            {/* Education section starts here */}
            <div className="EAE-Education">

                <div className="ProfileActivityHeader flex-sb PAMD-Header editButton">
                    <h2>Education</h2>
                    <img src="icons/plusButton.svg" alt="plusButton" />
                </div>



                {/* EducationCard */}
                <div className="EAE-CardMainDiv"  >
                    {
                        educationData.map((e, i) => (
                            <div className="EAE-card" key={i}>

                                <ExperienceAndEducationCard imageUrl={e.imageUrl} title={e.title} subTitle={e.subTitle} timeDuration={e.timeDuration} />
                                {i < educationData.length - 1 ? <hr className="shadowC divider" style={{ marginLeft: "12%" }} /> : ""}

                            </div>
                        ))
                    }


                </div>

            </div>  {/* EAE-Education */}



        </div>
    )
}
