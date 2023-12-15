import React from "react";
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
  const user = Users.filter((user) => user.id === 1);
  console.log(user);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="./assets/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">shinCode</span>
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
          <img src="./assets/heart.png" alt="" className="likeIcon" />
          <span className="postLikeCounter">
            {post.like}人がいいねを押しました。
          </span>
        </div>
        <div className="postBottomRight">
          <span className="post CommentText">{post.comment}のコメント</span>
        </div>
      </div>
    </div>
  );
};
