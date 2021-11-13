import React, { useState } from "react";
import { data } from "./ReactionData";
import "../../../styles/components/ReactionPopUp.css";

export default function ReactionPopUp() {
  return (
    <div className="reactionContainer">
      {data.map((react) => {
          return (
            <>
              <div className="innerReactionContainer">
                <div className="type"> {react.reaction}</div>
                <img src={react.link} alt="" />
              </div>
            </>
          );
      })}
    </div>
  );
}
