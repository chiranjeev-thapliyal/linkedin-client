import axios from "axios";
import { useContext, useState, useEffect } from "react";
import NetworksLink from "../../assets/svg/NetworksLink";
import { AuthContext } from "../../../Contexts/AuthContextProvider";

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

export const NetworkInvitations = ({id}) => {
  // console.log(inviteData);
  const [invitesMore, setInvitesMore] = useState(false);
  const { token } = useContext(AuthContext);
  const [pendingInvites, setPendingInvites] = useState([]);
  const [acceptId, setAcceptId] = useState("");

  useEffect(() => {
    getInvitations();
    
  }, [])

    const getInvitations = async () => {
      try {
        let res = await axios.get(
          `http://localhost:8080/users/pending-requests`,
          {
            body: {
              id: id,
            },
            headers: {
              Authorization: `Bearer ${token} `,
            },
          }
          
        );
        console.log("Invitations:", res);
        setPendingInvites(res.data.user.pendingReceived)
      }
      catch (err) {
        console.log(err);
      }
    }

  const handleAccept = async (id) => {
    setAcceptId(id);
    try {
      let res = await axios.post(`http://localhost:8080/users/accept-request`, {
        params: {
          id: id
        }
      })
      console.log("accept-request:", res);
    }
    catch (err) {
      console.log(err);
    }
  }
  
    return pendingInvites.length ? (
      <div className="NetworkIvitationsMainDiv">
        <div className="NetworkIvitationsDiv1">
          <p>Invitations</p>
          <p>See all {inviteData.length}</p>
        </div>
        {pendingInvites.map((e, i) => {
          return i < 3 && acceptId != e._id ? (
            <div className="inviteItems">
              <img src={e.avatar} height="50px" width="50px" alt="" />
              <div className="inviteDetails">
                <p>
                  {e.first_name} {e.last_name}{" "}
                </p>
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
          ) : i < 3 && acceptId == e._id ? (
            <div style={{ display: "flex" }}>
              <img src={e.image} alt="" />
              <p>{e.first_name} is a connection now.</p>
            </div>
          ) : invitesMore && acceptId != e._id ? (
            <div className="inviteItems">
              <img src={e.avatar} height="50px" width="50px" alt="" />
              <div className="inviteDetails">
                <p>
                  {e.first_name} {e.last_name}
                </p>
                <p>{e.desc}</p>
                <div style={{ display: "flex" }}>
                  <NetworksLink />
                  <p>{e.common}</p>
                </div>
              </div>
              <div className="btnDiv">
                <button className="ignoreBtn">Ignore</button>
                <button
                  className="acceptBtn"
                  onClick={() => {
                    handleAccept(id);
                  }}
                >
                  Accept
                </button>
              </div>
            </div>
          ) : (
            invitesMore &&
            acceptId != e._id && (
              <div style={{ display: "flex" }}>
                <img src={e.image} alt="" />
                <p>{e.first_name} is a connection now.</p>
              </div>
            )
          );
        })}
        <button
          onClick={() => {
            setInvitesMore(!invitesMore);
          }}
          className="invitesMore"
        >
          {invitesMore ? "Show Fewer" : "Show More"}
        </button>
      </div>
    ) : (
      <div className="NetworkIvitationsMainDiv">
        <div className="NetworkIvitationsPendingDiv">
          <p>No pending Invites</p>
        </div>
      </div>
    );
}