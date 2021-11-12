import React, { useEffect, useState } from "react";
import "../../../styles/components/RightSide.css";
// API-Key : 9d835d6ef6a343e5b122ffdaf2b4f678
import axios from "axios";

export default function RightSide() {
  const [list, setList] = useState([]);
  const [showMore,setShowMore]=useState(true)

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9d835d6ef6a343e5b122ffdaf2b4f678"
      )
      .then((res) => {
        setList(res.data.articles);
        console.log(list);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="newsBox">
      <h3>LinkedIn News</h3>
      <ul>
        {showMore
          ? list.slice(0, 5).map((news) => <li>{news.title}</li>)
          : list.slice(0, 10).map((news) => <li>{news.title}</li>)}
      </ul>

      <div className="buttonContainer">
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show More" : "Show Less "}
        </button>
        {showMore ? (
          <img src="/images/down.svg" alt="" />
        ) : (
          <img src="/images/up.svg" alt="" />
        )}
      </div>
    </div>
  );
}