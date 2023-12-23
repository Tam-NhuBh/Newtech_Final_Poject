import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SwitchCameraOutlinedIcon from "@mui/icons-material/SwitchCameraOutlined";

// Create an array containing empty items
const emptyItems = Array.from({ length: 10 }).map(() => ({ name: "" }));

export const adminSideBar = [
  {
    name: "Manage Projects",
    icon: <HomeOutlinedIcon />,
    href: "/",
  },
  {
    name: "Account Management",
    icon: <PersonOutlineIcon />,
    href: "/account-management",
  },
  {
    name: "Manage Majors",
    icon: <DescriptionOutlinedIcon />,
    href: "/major-management",
  },
  {
    name: "Register Project",
    icon: <AddCircleOutlineIcon />,
    href: "/admin-sub-topic",
  },
  {
    name: "Manage Registration Periods",
    icon: <CalendarTodayOutlinedIcon />,
    href: "/period-management",

  },
  ...emptyItems,

];

export const managementSideBar = [
  { name: "Home", icon: <HomeOutlinedIcon />, href: "/" },
  {
    name: "Personal Information",
    icon: <PersonOutlineIcon />,
    href: "/management-info",
  },
  {
    name: "Submit Project",
    icon: <AddCircleOutlineIcon />,
    href: "/management-sub-topic",
  },
  {
    name: "Approve Project Submissions",
    icon: <CheckCircleOutlineIcon />,
    href: "/management-approve-sub-topic",
  },
  {
    name: "Assign Reviewers",
    icon: <RateReviewOutlinedIcon />,
    href: "/assign-teacher-review",
  },

];

export const teacherSideBar = [
  { name: "Manage Projects", icon: <HomeOutlinedIcon />, href: "/" },
  {
    name: "Personal Information",
    icon: <PersonOutlineIcon />,
    href: "/teacher-info",
  },
  {
    name: "Choose Project",
    icon: <SwitchCameraOutlinedIcon />,
    href: "/teacher-select-topic",
  },
  {
    name: "Register Project",
    icon: <AddCircleOutlineIcon />,
    href: "/teacher-sub-topic",
  },
  {
    name: "Assigned Projects for Review",
    icon: <RateReviewOutlinedIcon />,
    href: "/assigned-review",
  },
   ...emptyItems,

];

export const studentSideBar = [
  { name: "Manage Projects", icon: <HomeOutlinedIcon />, href: "/" },
  {
    name: "Personal Information",
    icon: <PersonOutlineIcon />,
    href: "/student-info",
  },
  {
    name: "Register Project",
    icon: <AddCircleOutlineIcon />,
    href: "/sub-topic",
  },
  ...emptyItems,
];

export const guestSideBar = [
  { name: "Home", icon: <HomeOutlinedIcon />, href: "/" },
  {
    name: "Instructions",
    icon: <PictureAsPdfOutlinedIcon />,
    href: "/guestInstruction",
  },
  {
    name: "Reference",
    icon: <MenuBookOutlinedIcon />,
    href: "/guestPreference",
  },
  {
    name: "Contact",
    icon: <MailOutlineIcon />,
    href: "/guestContact",
  },
  ...emptyItems,
];
