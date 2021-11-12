import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostContainer from "./PostContainer";
import PostModal from "./PostModal";
import axios from "axios";

export default function Main() {
  const [posts, setPosts] = useState([]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const userPosts = axios
      .get("http://localhost:8080/posts")
      .then(({ data }) => setPosts(data.posts))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Post showModal={showModal} setShowModal={setShowModal} />

      {posts?.map(({ _id, media, title, user }) => (
        <PostContainer
          key={_id}
          media={media}
          title={title}
          user={user}
          id={_id}
        />
      ))}

      {showModal && (
        <PostModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
}
