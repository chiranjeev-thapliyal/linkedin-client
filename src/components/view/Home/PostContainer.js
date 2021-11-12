import React, { useEffect, useState } from "react";
import "../../../styles/components/PostContainer.css";
import { checkProfileImage } from "../../../utils/common.utils";
import axios from "axios";
import CommentBox from "./CommentBox";

export default function PostContainer({ id, title, media, user }) {
  const { first_name, last_name, profile_img, createdAt } = user;
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/comments/posts/${id}`)
      .then(({ data }) => {
        setComments(data?.comments);
        // console.log(data);
        // console.log(id);
      })

      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="mainPostContainer">
      <div className="post_header">
        <div className="post_headerLeft">
          <img src={checkProfileImage(profile_img)} alt="" />

          <div className="profile_details">
            <h3>
              {first_name} {last_name}
            </h3>
            <p>Working on project</p>
            <p>{createdAt}</p>
          </div>
        </div>

        <img src="/images/vertical_menu.svg" alt="" />
      </div>

      <div className="post_body">
        <div>{title}</div>
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
        <span>{comments?.length} comments</span>
      </div>

      <div className="post_footer">
        <div>
          <img src="/images/like.svg" alt="" />
          <p>Like</p>
        </div>
        <div>
          <img
            src="/images/comment.svg"
            alt=""
            onClick={() => setShowCommentBox(!showCommentBox)}
          />
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
