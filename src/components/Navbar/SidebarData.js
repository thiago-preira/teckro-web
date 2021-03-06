import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Upload",
    path: "/upload",
    icon: <MdIcons.MdCloudUpload />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <RiIcons.RiDashboardFill />,
    cName: "nav-text",
  },
  {
    title: "Categories",
    path: "/categories",
    icon: <FaIcons.FaTags />,
    cName: "nav-text",
  },
];
