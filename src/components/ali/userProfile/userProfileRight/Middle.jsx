import React from 'react'
import Divider from '../Divider'
import More from '../More'
import PeopleCard from './PeopleCard'

export default function Middle({ text }) {

    const data = [




        {
            btn: "connect",
            bgImg:
                "https://image.shutterstock.com/image-vector/light-blue-white-background-260nw-1387003745.jpg",
            imgUrl:
                "https://image.shutterstock.com/image-photo/young-beautiful-happy-businesswoman-sitting-260nw-165623561.jpg",
            name: "Rabia Basari",
            title: "Aspirining Full-stack Web Developer | Masai School",
            common: "Durga and 12 others",
        },
        {
            btn: "connect",
            bgImg:
                "https://img.freepik.com/free-vector/pink-oil-painted-canvas-background_53876-93727.jpg?size=626&ext=jpg",
            imgUrl:
                "https://media.istockphoto.com/photos/mature-mixed-race-business-man-picture-id1059661424?k=20&m=1059661424&s=612x612&w=0&h=CLL4tto10GPo1gtMR9c-kPmf8VkvodjvTyqvtEuTLtg=",
            name: "Chiranjeev Thapliyal",
            title: "Aspirining Full-stack Web Developer | Masai School",
            common: "Durga and 12 others",
        },
        {
            btn: "connect",
            bgImg:
                "https://image.shutterstock.com/image-vector/light-blue-white-background-260nw-1387003745.jpg",
            imgUrl:
                "https://image.shutterstock.com/image-photo/young-happy-man-smiling-camera-260nw-307284695.jpg",
            name: "Himanshu Bisht",
            title: "Aspirining Full-stack Web Developer | Masai School",
            common: "Durga and 12 others",
        },
        {
            btn: "connect",
            bgImg:
                "https://img.freepik.com/free-vector/pink-oil-painted-canvas-background_53876-93727.jpg?size=626&ext=jpg",
            imgUrl:
                "https://i.pinimg.com/originals/0f/29/93/0f2993a7b520ed79b47f6661d8f9e5d9.jpg",
            name: "Ali Shahanshah",
            title: "Aspirining Full-stack Web Developer | Masai School",
            common: "Durga and 12 others",
        },

        {
            btn: "connect",
            bgImg:
                "https://thumbs.dreamstime.com/b/grey-textured-plain-background-wallpaper-grey-textured-plain-background-wallpaper-design-use-text-image-137515233.jpg",
            imgUrl:
                "https://images.unsplash.com/photo-1615022702095-ff2c036f3360?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Anuj Sharma",
            title: "Aspirining Full-stack Web Developer | Masai School",
            common: "Durga and 12 others",
        },
        {
            btn: "connect",
            bgImg:
                "https://image.shutterstock.com/image-vector/light-blue-white-background-260nw-1387003745.jpg",
            imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNb1jnC52Zm-Z92rKJuIXRc7ahmsH1mpTUow&usqp=CAU",
            name: "Anuj Sharma",
            title: "Aspirining Full-stack Web Developer | Masai School",
            common: "Durga and 12 others",
        },

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
