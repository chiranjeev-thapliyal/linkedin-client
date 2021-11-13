import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import '../../../styles/components/CommentList.css';
import { checkProfileImage, toCapitalize } from '../../../utils/common.utils';
import ReplyInputBox from './ReplyInputBox';

export default function CommentList({ comment, post, comments, likes }) {
  const { userDetails } = useContext(AuthContext);
  const [allComments, setAllComments] = useState([comment, ...comments]);
  console.log('got all comments: ', allComments);

  const [replyInputBox, showReplyInputBox] = useState(false);

  return allComments.map(({ _id, title, post, user: commentUser }) => (
    <div>
      <div className='commentList'>
        <img src={checkProfileImage(userDetails.profile_img)} alt='' />

        <div className='commentContent'>
          <p>
            <b>
              {toCapitalize(commentUser.first_name) +
                ' ' +
                toCapitalize(commentUser.last_name)}
            </b>
          </p>
          <p>{commentUser.description}</p>
          <h6>{title}</h6>
        </div>
      </div>
      <div className='replyBtn commentHover'>
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
  ));
}
