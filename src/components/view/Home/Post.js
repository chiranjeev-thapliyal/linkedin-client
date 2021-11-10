import React from "react";
import "../../../styles/components/Post.css";

export default function Post({ showModal, setShowModal }) {
  return (
    <div className="statusBox">
      <div className="postInput">
        <img src="/images/HB.jpg" alt="" />
        <div onClick={()=>setShowModal(!showModal)}> Start a Post</div>
      </div>

      <div className="postingOptions">
        <div className="iconsDiv">
          <img src="/images/photo.svg" alt="" />
          <div>Photo</div>
        </div>
        <div className="iconsDiv">
          <img src="/images/video.svg" alt="" />
          <div>Video</div>
        </div>
        <div className="iconsDiv">
          <img src="/images/event.svg" alt="" />
          <div>Event</div>
        </div>
        <div className="iconsDiv">
          <img src="/images/article.svg" alt="" />
          <div>Write article</div>
        </div>
      </div>
    </div>
  );
}
