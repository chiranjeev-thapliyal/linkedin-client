import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import '../../../styles/components/PostContainer.css';
import { checkProfileImage, toCapitalize } from '../../../utils/common.utils';
import CommentBox from './CommentBox';

export default function PostContainer({ _id, media, title, user }) {
  const { first_name, last_name, profile_img, createdAt } = user;
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comments, setComments] = useState([]);
  const [seeMore, setSeeMore] = useState(false);
  const [likes, setLikes] = useState([]);
  const [post, setPost] = useState({});
  const [canLike, setCanLike] = useState(false);

  const [likesTotal, setLikesTotal] = useState(0);

  const fullName = `${toCapitalize(user?.first_name)} ${toCapitalize(
    user?.last_name
  )}`;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts/post/all/${_id}`)
      .then(({ data }) => {
        setComments(data.comments);
        setLikes(data.likes);
        setPost(data.post);
        setLikesTotal(data.likes.length);
        const personCanLike = data.likes.filter((item) => {
          return item.user._id === user._id;
        });
        if (personCanLike && personCanLike.length > 0) {
          setCanLike(false);
        } else {
          setCanLike(true);
        }
      })
      .catch((err) => console.log(err, 'cant get posts likes'));
  }, []);

  const handleLike = (text) => {
    if (canLike) {
      axios
        .post(`http://localhost:8080/likes`, {
          form: text,
          post: _id,
          user: user._id,
        })
        .then(({ data }) => {
          console.log('after like: ', data);
          setLikesTotal(likesTotal + 1);
          setCanLike(false);
        })
        .catch((e) => console.error('check like create route'));
    } else {
      axios
        .patch(`http://localhost:8080/likes`, {
          form: text,
          user: user._id,
          post: _id,
        })
        .then(({ data }) => console.log(data))
        .catch((e) => console.error(e));
    }
  };

  return (
    <div className='mainPostContainer'>
      <div className='post_header'>
        <div className='post_headerLeft'>
          <img src={checkProfileImage(user.profile_img)} alt='' />

          <div className='profile_details'>
            <h3>{fullName || 'Himanshu Bisht'}</h3>
            <p>{(user && user.description) || 'Learning Mern Stack'}</p>
            <p>Date</p>
          </div>
        </div>

        <img src='/images/vertical_menu.svg' alt='' />
      </div>

      {/* <div className='post_body'>
        <div>
          {title}
        </div>
        <img
          src={media && media.length > 0 && media[0]}
          alt=''
        />
      </div> */}

      <div className='post_body'>
        <div>
          <div>{seeMore ? title : title.substring(0, 100)}</div>
          {title.length >= 100 && (
            <button onClick={() => setSeeMore(!seeMore)}>
              {seeMore ? '' : '...see more'}
            </button>
          )}
        </div>
        <img src={media} alt='' />
      </div>

      <div className='social_counts'>
        {likes.filter(({ form: type }) => type === 'like').length > 0 && (
          <img
            src='https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt'
            alt=''
          />
        )}
        {likes.filter(({ form: type }) => type === 'celebrate').length > 0 && (
          <img
            src='https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22'
            alt=''
          />
        )}
        {likes.filter(({ form: type }) => type === 'celebrate').length > 0 && (
          <img
            src='https://static-exp1.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1'
            alt=''
          />
        )}

        {likesTotal > 0 && <span>{likesTotal}</span>}
        {likesTotal > 0 && comments.length > 0 && <span>.</span>}
        {comments.length > 0 && <span>{comments.length} comments</span>}
      </div>

      <div className='post_footer'>
        <div onClick={() => handleLike('like')}>
          <img src='/images/like.svg' alt='' />
          <p>Like</p>
        </div>
        <div onClick={() => setShowCommentBox(!showCommentBox)}>
          <img src='/images/comment.svg' alt='' />
          <p>Comment</p>
        </div>
        <div>
          <img src='/images/share.svg' alt='' />
          <p>Share</p>
        </div>
        <div>
          <img src='/images/send.svg' alt='' />
          <p>Send</p>
        </div>
      </div>
      {showCommentBox && <CommentBox />}
    </div>
  );
}
