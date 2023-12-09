import React from "react";
import { Topbar } from "../../components/Topbar/Topbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Timeline } from "../../components/timeline/Timeline";
import { Rightbar } from "../../components/rightbar/Rightbar";
import "./home.css";

export const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Timeline />
        <Rightbar />
      </div>
    </>
  );
};
