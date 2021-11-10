import React from "react";
import "../../../styles/components/PostContainer.css";

export default function PostContainer() {
  return (
    <div className="mainPostContainer">
      <div className="post_header">
        <div className="post_headerLeft">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFmeJIz0DYD9A/profile-displayphoto-shrink_200_200/0/1625409631133?e=1642032000&v=beta&t=VQwKOFqHxw1L3S_OR5gx1wK0MzCSICZcCGCgD05Msx0"
            alt=""
          />

          <div className="profile_details">
            <h3>Himanshu Bisht</h3>
            <p>Working on project</p>
            <p>Date</p>
          </div>
        </div>

        <img src="/images/vertical_menu.svg" alt="" />
      </div>

      <div className="post_body">
        <div>Description</div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D22AQG1l3uIL4wOrg/feedshare-shrink_2048_1536/0/1636443701847?e=1639612800&v=beta&t=ukPy5Ool7HggJui2V2l7MFbKW9eo0PbIkjaht305UGc"
          alt=""
        />
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
        <div>
          <img src="/images/like.svg" alt="" />
          <p>Like</p>
        </div>
        <div>
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
    </div>
  );
}
