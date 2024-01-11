import React from "react";

type users = {
  id: number;
  profilePicture: string;
  username: string;
};

type UserProps = {
  user: users;
};

export const Online = ({ user }: UserProps) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={PUBLIC_FOLDER + user.profilePicture}
          alt=""
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
};
