import { useState } from "react";
import NetworksLink from "../../assets/svg/NetworksLink";

const inviteData = [
  {
    avatar:
      "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVlbiUyMGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Rabia Basari",
    desc: "Aspirining Full-stack Web Developer | Masai School",
    common: "Durga and 12 others",
  },
  {
    avatar:
      "https://image.shutterstock.com/image-photo/young-beautiful-happy-businesswoman-sitting-260nw-165623561.jpg",
    name: "Rabia Basari",
    desc: "Aspirining Full-stack Web Developer | Masai School",
    common: "Durga and 12 others",
  },
  {
    avatar:
      "https://media.istockphoto.com/photos/mature-mixed-race-business-man-picture-id1059661424?k=20&m=1059661424&s=612x612&w=0&h=CLL4tto10GPo1gtMR9c-kPmf8VkvodjvTyqvtEuTLtg=",
    name: "Chiranjeev Thapliyal",
    desc: "Aspirining Full-stack Web Developer | Masai School",
    common: "Durga and 12 others",
  },
  {
    avatar:
      "https://image.shutterstock.com/image-photo/young-happy-man-smiling-camera-260nw-307284695.jpg",
    name: "Himanshu Bisht",
    desc: "Aspirining Full-stack Web Developer | Masai School",
    common: "Durga and 12 others",
  },
  {
    avatar:
      "https://i.pinimg.com/originals/0f/29/93/0f2993a7b520ed79b47f6661d8f9e5d9.jpg",
    name: "Ali Shahanshah",
    desc: "Aspirining Full-stack Web Developer | Masai School",
    common: "Durga and 12 others",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1615022702095-ff2c036f3360?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Anuj Sharma",
    desc: "Aspirining Full-stack Web Developer | Masai School",
    common: "Durga and 12 others",
  },
];

export const NetworkInvitations = () => {
    console.log(inviteData);
    const [invitesMore, setInvitesMore] = useState(false);

    return (
        <div className="NetworkIvitationsMainDiv">
            <div className="NetworkIvitationsDiv1">
                <p>Invitations</p>
                <p>See all {inviteData.length}</p>
            </div>
            {inviteData.map((e, i) => {
                return i < 3 ? (
                  <div className="inviteItems">
                    <img src={e.avatar} height="50px" width="50px" alt="" />
                    <div className="inviteDetails">
                      <p>{e.name}</p>
                      <p>{e.desc}</p>
                      <div style={{ display: "flex" }}>
                        <NetworksLink />
                        <p>{e.common}</p>
                      </div>
                    </div>
                    <div className="btnDiv">
                      <button className="ignoreBtn">Ignore</button>
                      <button className="acceptBtn">Accept</button>
                    </div>
                  </div>
                ) : invitesMore ? (
                  <div className="inviteItems">
                    <img src={e.avatar} height="50px" width="50px" alt="" />
                    <div className="inviteDetails">
                      <p>{e.name}</p>
                      <p>{e.desc}</p>
                      <div style={{ display: "flex" }}>
                        <NetworksLink />
                        <p>{e.common}</p>
                      </div>
                    </div>
                    <div className="btnDiv">
                      <button className="ignoreBtn">Ignore</button>
                      <button className="acceptBtn">Accept</button>
                    </div>
                  </div>
                ) : null;
            })}
            <button onClick={() => {setInvitesMore(!invitesMore)}} className="invitesMore">{ invitesMore ? "Show Fewer" : "Show More"}</button>
      </div>
    );
}