import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import '../../../styles/components/CommentBox.css';
import { checkProfileImage } from '../../../utils/common.utils';
import CommentList from './CommentList';

export default function CommentBox({ post, comments, likes }) {
  const { token, userDetails } = useContext(AuthContext);
  const [text, setText] = useState('');
  const [comment, setComment] = useState({});
  const [enterComment, setEnterComment] = useState(false);

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      axios
        .post(
          `http://localhost:8080/comments`,
          {
            title: text,
            user: userDetails._id,
            post: post._id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(({ data }) => {
          console.log('data after comment: ', data);
          setComment({ ...data.comment });
          setEnterComment(true);
          console.log('after enter comment');
          setText('');
        })
        .catch((e) => setEnterComment(false));
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <div>
      <div className='commentInput'>
        <img src={checkProfileImage(userDetails.profile_img)} alt='' />

        <div>
          <input
            onKeyPress={handleKey}
            type='text'
            placeholder='Add a comment...'
            autoFocus={true}
            onChange={handleChange}
            value={text}
          />
          <div>
            <img src='/images/emojie.svg' alt='' />
            <img src='/images/modal_img.svg' alt='' />
          </div>
        </div>
      </div>
      {enterComment && (
        <CommentList
          comment={comment}
          post={post}
          comments={comments}
          likes={likes}
        />
      )}
    </div>
  );
}
