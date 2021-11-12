import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import Post from './Post';
import PostContainer from './PostContainer';
import PostModal from './PostModal';

export default function Main() {
  const [showModal, setShowModal] = useState(false);
  const { feedPosts } = useContext(AuthContext);

  return (
    <>
      <Post showModal={showModal} setShowModal={setShowModal} />
      {feedPosts && feedPosts.map((post) => <PostContainer {...post} />)}
      
      {showModal && (
        <PostModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
}
