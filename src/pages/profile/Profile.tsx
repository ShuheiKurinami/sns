import React from "react";
import { Topbar } from "../../components/Topbar/Topbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Timeline } from "../../components/timeline/Timeline";
import { Rightbar } from "../../components/rightbar/Rightbar";
import "./Profile.css";

export const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <Timeline />
        <Rightbar />
      </div>
    </>
  );
};
