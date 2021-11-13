import React, { useState } from "react";
import { data } from "./ReactionData";
import "../../../styles/components/ReactionPopUp.css";

export default function ReactionPopUp({ handleReaction }) {
  return (
    <div className="reactionContainer" onMouseLeave={handleReaction}>
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
