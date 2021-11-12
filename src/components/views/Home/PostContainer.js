import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import '../../../styles/components/PostContainer.css';
import { checkProfileImage, toCapitalize } from '../../../utils/common.utils';

export default function PostContainer({_id, media, title, user, createdAt}) {
  const fullName = `${toCapitalize(user?.first_name)} ${toCapitalize(user?.last_name)}`;
  
  return (
    <div className='mainPostContainer'>
      <div className='post_header'>
        <div className='post_headerLeft'>
          <img
            src={checkProfileImage(user?.profile_img)}
            alt=''
          />

          <div className='profile_details'>
            <h3>{fullName || 'Himanshu Bisht'}</h3>
            <p>{ user && user?.description || 'Learning Mern Stack' }</p>
            <p>Date</p>
          </div>
        </div>

        <img src='/images/vertical_menu.svg' alt='' />
      </div>

      <div className='post_body'>
        <div>
          {title}
        </div>
        <img
          src={media && media.length > 0 && media[0]}
          alt=''
        />
      </div>

      <div className='social_counts'>
        <img
          src='https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt'
          alt=''
        />
        <img
          src='https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22'
          alt=''
        />

        <img
          src='https://static-exp1.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1'
          alt=''
        />
        <span>122</span>
        <span>.</span>
        <span>12 comments</span>
      </div>

      <div className='post_footer'>
        <div>
          <img src='/images/like.svg' alt='' />
          <p>Like</p>
        </div>
        <div>
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
    </div>
  );
}
