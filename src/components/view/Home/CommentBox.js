import React from "react";
import "../../../styles/components/CommentBox.css";
import CommentList from "./CommentList";

export default function CommentBox() {
  return (
    <div>
      <div className="commentInput">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQFmeJIz0DYD9A/profile-displayphoto-shrink_100_100/0/1625409631133?e=1642032000&v=beta&t=wOB4B-QXl_1BwC3YCjmXPx-jiOtkveea1AuTyzbktmc"
          alt=""
        />

        <div>
          <input type="text" placeholder="Add a comment..." autoFocus={true} />
          <div>
            <img src="/images/emojie.svg" alt="" />
            <img src="/images/modal_img.svg" alt="" />
          </div>
        </div>
      </div>

      <CommentList />
    </div>
  );
}
