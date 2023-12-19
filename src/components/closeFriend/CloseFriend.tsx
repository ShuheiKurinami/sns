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
  return (
    <li className="sidebarFriend">
      <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};
