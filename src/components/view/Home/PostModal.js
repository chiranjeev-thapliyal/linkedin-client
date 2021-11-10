import React, { useState } from "react";
import "../../../styles/components/PostModal.css";
import styled from "styled-components";

export default function PostModal({ showModal, setShowModal }) {
  const [statusText, setStatusText] = useState("");
  const [sharedImage, setSharedImage] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`File upladed is not an image`);
      return;
    }

    setSharedImage(image);
  };

  return (
    <div className="outerDiv">
      <div className="innerDiv">
        <div className="modalHeader">
          <p>Create a post</p>
          <div>
            <img
              src="/images/close_icon.svg"
              alt=""
              onClick={() => setShowModal(!showModal)}
            />
          </div>
        </div>

        <div className="userInfo">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFmeJIz0DYD9A/profile-displayphoto-shrink_200_200/0/1625409631133?e=1642032000&v=beta&t=VQwKOFqHxw1L3S_OR5gx1wK0MzCSICZcCGCgD05Msx0"
            alt=""
          />
          <p>Himanshu Bisht</p>
        </div>

        <div className="statusInput">
          <input
            value={statusText}
            type="text"
            onChange={(e) => setStatusText(e.target.value)}
            placeholder="What do you want to talk about?"
            autoFocus={true}
          />
        </div>

        <div className='uploadedImage' >{sharedImage && <img src={URL.createObjectURL(sharedImage)} alt="" /> }</div>

        <div className="modalFooter">
          <div className="modalOptions">
            <div>
              <label for="file-input">
                <img src="/images/modal_img.svg" alt="" />
              </label>
              <input
                type="file"
                accept="image/gif,image/jpeg, image/png"
                name="image"
                id="file-input"
                onChange={handleChange}
              />
            </div>
            <img src="/images/modal_video.svg" alt="" />
            <img src="/images/modal_doc.svg" alt="" />
            <img src="/images/modal_hire.svg" alt="" />
            <img src="/images/modal_occa.svg" alt="" />
            <img src="/images/modal_poll.svg" alt="" />
            <img src="/images/modal_add.svg" alt="" />
          </div>

          <div className="modalButton">
            <div>
              <img src="/images/modal_any.svg" alt="" />
              <p>Anyone</p>
            </div>

            <PostButton disabled={!statusText ? true : false}>Post</PostButton>
          </div>
        </div>
      </div>
    </div>
  );
}

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  margin-right: 1.5rem;
  background: ${(props) => (props.disabled ? "#f5f5f5" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "rgba(0,0,0,0.6)" : "white")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;
  padding: 1rem;
  font-weight: 500;
  &:hover {
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.08)" : "#004182")};
  }
`;
