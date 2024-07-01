import { MdSpaceDashboard } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { ImBriefcase } from "react-icons/im";
import { MdAssignmentInd } from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

import { SideBarItem } from "./types";
import { IoMdClock } from "react-icons/io";

export const SIDEBAR_ITEMS_ADMIN: SideBarItem[] = [
  {
    title: "Dashboard",
    path: "/home/admin",
    icon: <MdSpaceDashboard />,
  },
  {
    title: "Time Records",
    path: "/home/admin/time-rec",
    icon: <IoMdClock />,
  },
  {
    title: "All Employees",
    path: "/home/admin/view-employee",
    icon: <IoPeopleSharp />,
  },
  {
    title: "Leave Requests",
    path: "/home/admin/leave-requests",
    icon: <ImBriefcase />,
  },
  {
    title: "Today's Leaves",
    path: "/home/admin/leave-requests-today",
    icon: <ImBriefcase />,
  },
  {
    title: "Notices",
    path: "/home/admin/notices",
    icon: <IoNewspaperSharp />,
  },
  {
    title: "Payroll",
    path: "/home/admin/payroll",
    icon: <MdPayments />,
  },
  {
    title: "Allowances",
    path: "/home/admin/allowances",
    icon: <MdPayments />,
  },
  {
    title: "Logout",
    path: "/login",
    icon: <IoLogOut />,
  },
  
];

export const SIDEBAR_ITEMS_USER: SideBarItem[] = [
  {
    title: "Dashboard",
    path: "/home/user",
    icon: <MdSpaceDashboard />,
  },
  {
    title: "All Employees",
    path: "/home/user/view-employee",
    icon: <IoPeopleSharp />,
  },
  {
    title: "My Leaves",
    path: "/home/user/leave-requests",
    icon: <ImBriefcase />,
  },
  {
    title: "Notices",
    path: "/home/user/notices",
    icon: <IoNewspaperSharp />,
  },
  {
    title: "Allowances",
    path: "/home/user/allowances",
    icon: <MdPayments />,
  },
  {
    title: "Logout",
    path: "/login",
    icon: <IoLogOut />,
  },
];
