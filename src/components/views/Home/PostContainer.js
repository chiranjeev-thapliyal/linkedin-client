import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthContextProvider";
import "../../../styles/components/PostContainer.css";
import { checkProfileImage, toCapitalize } from "../../../utils/common.utils";
import CommentBox from "./CommentBox";
import ReactionPopUp from "./ReactionPopUp";

export default function PostContainer({ _id, media, title, user }) {
  const { first_name, last_name, profile_img, createdAt } = user;
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comments, setComments] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  const fullName = `${toCapitalize(user?.first_name)} ${toCapitalize(
    user?.last_name
  )}`;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/comments/posts/${_id}`)
      .then(({ data }) => {
        setComments(data?.comments);
        // console.log(data);
        // console.log(id);
      })

      .catch((err) => console.log(err));
  }, []);

  const [reactionBox, showReactionBox] = useState(false);

  const handleReaction = () => {
    showReactionBox(!reactionBox)
  }

  return (
    <div className="mainPostContainer">
      <div className="post_header">
        <div className="post_headerLeft">
          <img src={checkProfileImage(user?.profile_img)} alt="" />

          <div className="profile_details">
            <h3>{fullName || "Himanshu Bisht"}</h3>
            <p>{(user && user?.description) || "Learning Mern Stack"}</p>
            <p>Date</p>
          </div>
        </div>

        <img src="/images/vertical_menu.svg" alt="" />
      </div>

      {/* <div className='post_body'>
        <div>
          {title}
        </div>
        <img
          src={media && media.length > 0 && media[0]}
          alt=''
        />
      </div> */}

      <div className="post_body">
        <div>
          <div>{seeMore ? title.substring(0, 50) : title}</div>
          <button onClick={() => setSeeMore(!seeMore)}>
            {seeMore ? (title.length < 50 ? "...see more" : "") : ""}
          </button>
        </div>
        <img src={media} alt="" />
      </div>

      <div className="social_counts">
        <img
          src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
          alt=""
        />
        <img
          src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22"
          alt=""
        />

        <img
          src="https://static-exp1.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1"
          alt=""
        />
        <span>122</span>
        <span>.</span>
        <span>12 comments</span>
      </div>

      <div className="post_footer">
        {reactionBox && <ReactionPopUp handleReaction={handleReaction} />}
        <div onMouseOver={handleReaction}>
          <img src="/images/like.svg" alt="" />
          <p>Like</p>
        </div>
        <div
          className="commentHover"
          onClick={() => setShowCommentBox(!showCommentBox)}
        >
          <img src="/images/comment.svg" alt="" />
          <p>Comment</p>
        </div>
        <div>
          <img src="/images/share.svg" alt="" />
          <p>Share</p>
        </div>
        <div>
          <img src="/images/send.svg" alt="" />
          <p>Send</p>
        </div>
      </div>
      {showCommentBox && <CommentBox />}
    </div>
  );
}
