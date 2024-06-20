import { MdSpaceDashboard } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { ImBriefcase } from "react-icons/im";
import { MdAssignmentInd } from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

import { SideBarItem } from "./types";

export const SIDEBAR_ITEMS: SideBarItem[] = [
  {
    title: "Dashboard",
    path: "/home",
    icon: <MdSpaceDashboard />,
  },
  {
    title: "All Employees",
    path: "/home/view-employee",
    icon: <IoPeopleSharp />,
  },
  {
    title: "Leave Requests",
    path: "/home/leave-requests",
    icon: <ImBriefcase />,
  },
  {
    title: "Today's Leaves",
    path: "/home/leave-requests-today",
    icon: <ImBriefcase />,
  },
  {
    title: "Assign Roles",
    path: "/home/assign-roles",
    icon: <MdAssignmentInd />,
  },
  {
    title: "Notices",
    path: "/home/notices",
    icon: <IoNewspaperSharp />,
  },
  {
    title: "Payroll",
    path: "/home/payroll",
    icon: <MdPayments />,
  },
  {
    title: "Allowances",
    path: "/home/allowances",
    icon: <MdPayments />,
  },
  {
    title: "Logout",
    path: "/login",
    icon: <IoLogOut />,
  },
];
