import React from 'react'
import Divider from '../Divider'
import More from '../More'
import PeopleCard from './PeopleCard'

export default function Middle({ text }) {

    const data = [
        { btn: "connect", imgUrl: "demo.png", name: "Rabia Basari", title: "Learning MERN stack, Aspiring Full-Stack Web-Developer at Masai School, Bengaluru, Karnataka" },
        { btn: "Message", imgUrl: "demo.png", name: "Vishal Rathod", title: "Learning MERN Stack | An Aspiring Full Stack Developer at Masai School" },
        { btn: "connect", imgUrl: "demo.png", name: "Rabia Basari", title: "Learning MERN stack, Aspiring Full-Stack Web-Developer at Masai School, Bengaluru, Karnataka" },
        { btn: "connect", imgUrl: "demo.png", name: "Rabia Basari", title: "Learning MERN stack, Aspiring Full-Stack Web-Developer at Masai School, Bengaluru, Karnataka" },
        { btn: "connect", imgUrl: "demo.png", name: "Rabia Basari", title: "Learning MERN stack, Aspiring Full-Stack Web-Developer at Masai School, Bengaluru, Karnataka" },

    ]




    return (
        <div className="userProfileRightMiddle UPR">
            <div>
                <h3 className="weight600 black">{text}</h3>
            </div>


            <div>
                {
                    data.map((e) => (
                        <div className="peopleCardSingle mt2rem ">

                            <PeopleCard btn={e.btn} imgUrl={e.imgUrl} name={e.name} title={e.title} />
                        </div>
                    ))
                }
            </div>
            <div className="mt1rem">
                <Divider />
            </div>

            <div>
                <More text="Show more" />
            </div>

        </div>
    )
}
