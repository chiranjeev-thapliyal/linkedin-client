import React, { useState } from "react";
import Post from "./Post";
import PostContainer from "./PostContainer";
import PostModal from "./PostModal";

export default function Main() {

  const [showModal,setShowModal]=useState(false)

  return (
    <>
      <Post showModal={showModal} setShowModal={setShowModal} />
      <PostContainer />
      {showModal && (
        <PostModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
}
