import React, { useState } from "react";
import "../../../styles/components/CommentList.css";
import ReplyInputBox from "./ReplyInputBox";
export default function CommentList() {

  const [replyInputBox,showReplyInputBox]=useState(false)

  return (
    <div>
      <div className="commentList">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQFmeJIz0DYD9A/profile-displayphoto-shrink_100_100/0/1625409631133?e=1642032000&v=beta&t=wOB4B-QXl_1BwC3YCjmXPx-jiOtkveea1AuTyzbktmc"
          alt=""
        />

        <div className="commentContent">
          <p>
            <b>Himanshu Bisht</b>
          </p>
          <p>User Summary</p>
          <h6>This is the comment</h6>
        </div>
      </div>
      <div className="replyBtn commentHover">
        <p>Like</p>
        <p>|</p>
        <p
          onClick={() => {
            showReplyInputBox(!replyInputBox);
          }}
        >
          Reply
        </p>
      </div>
      {replyInputBox && <ReplyInputBox />}
    </div>
  );
}
