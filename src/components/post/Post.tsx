import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Post.css";
import axios from "axios";
// import { Users } from "../../dummyData";

type posts = {
  id: number;
  desc?: string;
  photo?: string;
  date: string;
  userId: number;
  like: number;
  comment: number;
  // PostInterface から必要なプロパティを追加
};

type PostProps = {
  // post: posts;
  post: any;
};

interface PostInterface {
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

export const Post = ({ post }: PostProps) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const [user, setUser] = useState<PostInterface | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get("/users/${post.userId}");
      // console.log(response);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={user?.profilePicture || "/person/noAvatar.png"}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">{user?.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>

        <span className="postText">{post.desc}</span>
        <img src={post.photo} alt="" className="postImg" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img
            src={PUBLIC_FOLDER + "/heart.png"}
            alt=""
            className="likeIcon"
            onClick={() => handleLike()}
          />
          <span className="postLikeCounter">
            {like}人がいいねを押しました。
          </span>
        </div>
        <div className="postBottomRight">
          <span className="post CommentText">{post.comment}のコメント</span>
        </div>
      </div>
    </div>
  );
};
