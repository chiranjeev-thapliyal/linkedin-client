import React, { useContext, useState } from 'react';
import '../../../styles/components/PostModal.css';
import styled from 'styled-components';
import axios from 'axios';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import { toCapitalize } from '../../../utils/common.utils';

export default function PostModal({ showModal, setShowModal }) {
  const { userDetails, handleNewPost } = useContext(AuthContext);
  const fullName =
    toCapitalize(userDetails?.first_name) +
    ' ' +
    toCapitalize(userDetails?.last_name);
  
  const { token } = useContext(AuthContext);
  const [statusText, setStatusText] = useState('');
  const [sharedImage, setSharedImage] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [fileInputState, setFileInputState] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const [image, setImage] = useState('');
  const [data, setData] = useState();

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleChange = async (e) => {
    const image = e.target.files[0];
    previewFile(image);
    setSelectedFile(image);
    setFileInputState(e.target.value);
  };

  const handleSubmitFile = () => {
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error('AHHHHHHHH!!');
      setErrMsg('something went wrong!');
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      const { data } = await axios.post(
        'http://localhost:8080/api/upload',
        JSON.stringify({ data: base64EncodedImage }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const res = await axios.post(
        'http://localhost:8080/posts',
        {
          title: statusText,
          media: [data.url],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      handleNewPost(res.data.post);

      setFileInputState('');
      setPreviewSource('');
      setSuccessMsg('Image uploaded successfully');
      setShowModal(false);
    } catch (err) {
      console.error(err);
      setErrMsg('Something went wrong!');
    }
  };

  return (
    <div className='outerDiv'>
      <div className='innerDiv'>
        <div className='modalHeader'>
          <p>Create a post</p>
          <div>
            <img
              src='/images/close_icon.svg'
              alt=''
              onClick={() => setShowModal(!showModal)}
            />
          </div>
        </div>

        <div className='userInfo'>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4E03AQFmeJIz0DYD9A/profile-displayphoto-shrink_200_200/0/1625409631133?e=1642032000&v=beta&t=VQwKOFqHxw1L3S_OR5gx1wK0MzCSICZcCGCgD05Msx0'
            alt=''
          />
          <p>Himanshu Bisht</p>
        </div>

        <div className='statusInput'>
          <input
            value={statusText}
            type='text'
            onChange={(e) => setStatusText(e.target.value)}
            placeholder='What do you want to talk about?'
            autoFocus={true}
          />
        </div>

        <div className='uploadedImage'>
          {/* {sharedImage && <img src={URL.createObjectURL(sharedImage)} alt="" />} */}
          {previewSource && <img src={previewSource} alt='' />}
        </div>

        <div className='modalFooter'>
          <div className='modalOptions'>
            <div>
              <label for='file-input'>
                <img src='/images/modal_img.svg' alt='' />
              </label>
              <input
                type='file'
                accept='image/gif,image/jpeg, image/png'
                name='image'
                id='file-input'
                onChange={handleChange}
              />
            </div>
            <div>
              <label for='video-input'>
                <img src='/images/modal_video.svg' alt='' />
              </label>
            </div>
            <img src='/images/modal_doc.svg' alt='' />
            <img src='/images/modal_hire.svg' alt='' />
            <img src='/images/modal_occa.svg' alt='' />
            <img src='/images/modal_poll.svg' alt='' />
            <img src='/images/modal_add.svg' alt='' />
          </div>

          <div className='modalButton'>
            <div>
              <img src='/images/modal_any.svg' alt='' />
              <p>Anyone</p>
            </div>

            <PostButton
              disabled={!statusText ? true : false}
              onClick={handleSubmitFile}
            >
              Post
            </PostButton>
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
  background: ${(props) => (props.disabled ? '#f5f5f5' : '#0a66c2')};
  color: ${(props) => (props.disabled ? 'rgba(0,0,0,0.6)' : 'white')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: none;
  padding: 1rem;
  font-weight: 500;
  &:hover {
    background: ${(props) => (props.disabled ? 'rgba(0,0,0,0.08)' : '#004182')};
  }
`;
