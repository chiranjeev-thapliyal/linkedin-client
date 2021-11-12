import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import '../../../styles/components/Post.css';
import { checkProfileImage, toCapitalize } from '../../../utils/common.utils';

export default function Post({ showModal, setShowModal }) {
  const { userDetails } = useContext(AuthContext);
  const fullName =
    toCapitalize(userDetails?.first_name) +
    ' ' +
    toCapitalize(userDetails?.last_name);

  return (
    <div className='statusBox'>
      <div className='postInput'>
        <img src={checkProfileImage(userDetails?.profile_img)} alt='' />
        <div onClick={() => setShowModal(!showModal)}> Start a Post</div>
      </div>

      <div className='postingOptions'>
        <div className='iconsDiv'>
          <img src='/images/photo.svg' alt='' />
          <div>Photo</div>
        </div>
        <div className='iconsDiv'>
          <img src='/images/video.svg' alt='' />
          <div>Video</div>
        </div>
        <div className='iconsDiv'>
          <img src='/images/event.svg' alt='' />
          <div>Event</div>
        </div>
        <div className='iconsDiv'>
          <img src='/images/article.svg' alt='' />
          <div>Write article</div>
        </div>
      </div>
    </div>
  );
}
