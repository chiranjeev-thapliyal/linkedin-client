import React from 'react'
import "../../../styles/components/CommentList.css";
export default function CommentList() {
    return (
      <div className='commentList'>
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
    );
}
