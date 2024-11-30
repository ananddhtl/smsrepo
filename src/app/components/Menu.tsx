import Link from "next/link";
import { MdHome, MdPerson, MdSettings, MdExitToApp } from "react-icons/md";
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaUserFriends,
  FaBook,
  FaClipboard,
  FaCalendarCheck,
  FaComment,
  FaBullhorn,
} from "react-icons/fa";

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: <MdHome />, label: "Home", href: "/" },
      { icon: <FaChalkboardTeacher />, label: "Teacher", href: "/teacher" },
      { icon: <FaUserGraduate />, label: "Student", href: "/student" },
      { icon: <FaUserFriends />, label: "Parent", href: "/parent" },
      { icon: <FaBook />, label: "Class", href: "/class" },
      { icon: <FaClipboard />, label: "Lesson", href: "/lesson" },
      { icon: <FaCalendarCheck />, label: "Exam", href: "/exam" },
      { icon: <FaClipboard />, label: "Assignments", href: "/assignments" },
      { icon: <FaCalendarCheck />, label: "Attendance", href: "/attendance" },
      { icon: <FaComment />, label: "Message", href: "/message" },
      { icon: <FaBullhorn />, label: "Announcement", href: "/announcement" },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: <MdPerson />, label: "Profile", href: "/profile" },
      { icon: <MdSettings />, label: "Settings", href: "/settings" },
      { icon: <MdExitToApp />, label: "Logout", href: "/logout" },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">{section.title}</span>
          {section.items.map((item) => (
            <Link key={item.label} href={item.href} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2">
              <span className="text-lg">{item.icon}</span>
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
