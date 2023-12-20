import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Post.css";
import { Users } from "../../dummyData";

type posts =
  | {
      id: number;
      desc: string;
      photo: string;
      date: string;
      userId: number;
      like: number;
      comment: number;
    }
  | {
      id: number;
      photo: string;
      date: string;
      userId: number;
      like: number;
      comment: number;
      desc?: undefined;
    };

type PostProps = {
  post: posts;
};

export const Post = ({ post }: PostProps) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

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
              src={
                Users.filter((user) => user.id === post.id)[0].profilePicture
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === post.id)[0].username}
            </span>
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
            src="./assets/heart.png"
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
