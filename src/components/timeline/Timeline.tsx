import React, { useEffect, useState } from "react";
import "./Timeline.css";
import { Share } from "../share/Share";
import { Post } from "../post/Post";
import axios from "axios";
// import { Posts } from "../../dummyData";

interface Post {
  id: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  coverPicture: string;
  followers: any;
  followings: any;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const Timeline = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "/posts/timeline/655896ef9873be8e5031404a"
      );
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
