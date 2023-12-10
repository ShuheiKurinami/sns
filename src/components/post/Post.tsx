import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Post.css";

export const Post = () => {
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
            <span className="postDate">5分前</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>

        <span className="postText">SNSを自作中です。</span>
        <img src="./assets/post/1.jpeg" alt="" className="postImg" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img src="./assets/heart.png" alt="" className="likeIcon" />
          <span className="postLikeCounter">５人がいいねを押しました。</span>
        </div>
        <div className="postBottomRight">
          <span className="post CommentText">４のコメント</span>
        </div>
      </div>
    </div>
  );
};
