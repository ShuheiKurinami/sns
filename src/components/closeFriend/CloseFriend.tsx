import React from "react";

type users = {
  id: number;
  profilePicture: string;
  username: string;
};

type UserProps = {
  user: users;
};

export const CloseFriend = ({ user }: UserProps) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img
        src={PUBLIC_FOLDER + user.profilePicture}
        alt=""
        className="sidebarFriendImg"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};
