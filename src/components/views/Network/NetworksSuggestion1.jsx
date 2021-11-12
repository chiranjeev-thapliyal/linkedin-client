import { NetworkSuggestionItem } from "./NetworkSuggestionItem";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthContextProvider";

const suggestData1 = [
  {
    id: 1,
    bgImg:
      "https://img.freepik.com/free-vector/green-sand-paper_53876-86281.jpg?size=626&ext=jpg",
    avatar:
      "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVlbiUyMGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Rabia Basari",
    desc: "Aspirining Full-stack Web Developer | Masai School",
    common: "Durga and 12 others",
  },
  {
    id: 2,
    bgImg:
      "https://image.shutterstock.com/image-vector/light-blue-white-background-260nw-1387003745.jpg",
    avatar:
      "https://image.shutterstock.com/image-photo/young-beautiful-happy-businesswoman-sitting-260nw-165623561.jpg",
    name: "Rabia Basari",
    desc: "Aspirining Full-stack Web Developer | Masai School",
    common: "Durga and 12 others",
  },
  {
    id: 3,
    bgImg:
      "https://img.freepik.com/free-vector/pink-oil-painted-canvas-background_53876-93727.jpg?size=626&ext=jpg",
    avatar:
      "https://media.istockphoto.com/photos/mature-mixed-race-business-man-picture-id1059661424?k=20&m=1059661424&s=612x612&w=0&h=CLL4tto10GPo1gtMR9c-kPmf8VkvodjvTyqvtEuTLtg=",
    name: "Chiranjeev Thapliyal",
    desc: "Aspirining Full-stack Web Developer | Masai School",
    common: "Durga and 12 others",
  },
  {
    id: 4,
    bgImg:
      "https://image.shutterstock.com/image-vector/light-blue-white-background-260nw-1387003745.jpg",
    avatar:
      "https://image.shutterstock.com/image-photo/young-happy-man-smiling-camera-260nw-307284695.jpg",
    name: "Himanshu Bisht",
    desc: "Aspirining Full-stack Web Developer | Masai School",
    common: "Durga and 12 others",
  },
  {
    id: 5,
    bgImg:
      "https://img.freepik.com/free-vector/pink-oil-painted-canvas-background_53876-93727.jpg?size=626&ext=jpg",
    avatar:
      "https://i.pinimg.com/originals/0f/29/93/0f2993a7b520ed79b47f6661d8f9e5d9.jpg",
    name: "Ali Shahanshah",
    desc: "Aspirining Full-stack Web Developer | Masai School",
    common: "Durga and 12 others",
  },
  {
    id: 6,
    bgImg:
      "https://image.shutterstock.com/image-vector/light-blue-white-background-260nw-1387003745.jpg",
    avatar:
      "data:image/jpeg;base64,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",
    name: "Anuj Sharma",
    desc: "Aspirining Full-stack Web Developer | Masai School",
    common: "Durga and 12 others",
  },
  {
    id: 7,
    bgImg:
      "https://thumbs.dreamstime.com/b/grey-textured-plain-background-wallpaper-grey-textured-plain-background-wallpaper-design-use-text-image-137515233.jpg",
    avatar:
      "https://images.unsplash.com/photo-1615022702095-ff2c036f3360?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Anuj Sharma",
    desc: "Aspirining Full-stack Web Developer | Masai School",
    common: "Durga and 12 others",
  },
  {
    id: 8,
    bgImg:
      "https://image.shutterstock.com/image-vector/light-blue-white-background-260nw-1387003745.jpg",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNb1jnC52Zm-Z92rKJuIXRc7ahmsH1mpTUow&usqp=CAU",
    name: "Anuj Sharma",
    desc: "Aspirining Full-stack Web Developer | Masai School",
    common: "Durga and 12 others",
  },
];


export const NetworkSuggestion1 = ({ heading1, handleId }) => {
  const { token } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  
  useEffect(() => {
    getConnects();
    return () => {
      
    }
  }, [])

  const getConnects = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8080/users/recommendations`,
        {
        headers: {
          Authorization: `Bearer ${token} `,
        }
        }
      );
      console.log("Recommendations:", res);
      setRecommendations(res.data.recommendations);
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <div className="NetSuggestion1">
      <div className="NetSugHeading1">
        <p>{heading1}</p>
        <p>See all</p>
      </div>
      <div className="NetSuggestionsAll">
        {recommendations.map((e, i) => {
          return (
            <div key={e.id} className="NetworkSuggestions">
              <NetworkSuggestionItem {...e} handleId={handleId}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};
