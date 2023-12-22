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
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="assets/post/3.jpeg" alt="" className="profileCover" />
              <img
                src="assets/person/7.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInforName">Shin Code</h4>
              <span className="profileInfoDesc">Udemy講師をしています</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
};
