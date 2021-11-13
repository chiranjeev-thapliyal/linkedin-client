import React, { useState } from "react";
import "../../../styles/components/ReplyInputBox.css";
import styled from "styled-components";
import ReplyBox from './ReplyBox'

export default function ReplyInputBox() {
    const [replyContent, setReplyContent] = useState("");
    const [replied,setReplied]=useState(true)

  return (
    <div className="replyInputWrapper">
      {replied ? (
        <div className="replyInput">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFmeJIz0DYD9A/profile-displayphoto-shrink_100_100/0/1625409631133?e=1642032000&v=beta&t=wOB4B-QXl_1BwC3YCjmXPx-jiOtkveea1AuTyzbktmc"
            alt=""
          />

          <div>
            <input
              value={replyContent}
              type="text"
              placeholder="Add a reply..."
              autoFocus={true}
              id="reply"
              onChange={(e) => setReplyContent(e.target.value)}
            />
            <div>
              <img src="/images/emojie.svg" alt="" />
              <img src="/images/modal_img.svg" alt="" />
            </div>
          </div>
        </div>
      ) : (
        <ReplyBox />
      )}

      <div>
        <ReplyButton
          display={!replyContent ? true : false}
                  onClick={() => { setReplied(!replied);setReplyContent(!replyContent)}}
        >
          Reply
        </ReplyButton>
      </div>
    </div>
  );
}

const ReplyButton = styled.button`
 
    min-width: 60px;
    border-radius: 20px;
    margin-left: 5rem;
    margin-top: 1rem;
    background-color: #0a66c2;
    cursor: : 'pointer';
    border: none;
    padding: 0.5rem;
    font-weight: 500;
    &:hover {
        background: ${(props) => (props.display ? "#0a66c2" : "#004182")};
      };
      color:  white;
     display: ${(props) => (props.display ? "none" : "block")};
`;