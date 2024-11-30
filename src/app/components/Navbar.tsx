import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100">
      {/* Search Section */}
      <div className="hidden md:flex items-center w-full max-w-sm relative">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* User Actions Section */}
      <div className="flex items-center gap-6 relative justify-end w-full">
        {/* User Icon */}
        <div
          className="flex items-center justify-center bg-white rounded-full w-9 h-9 cursor-pointer shadow"
          title="User Account"
        >
          <FaUser className="text-gray-700" />
        </div>

        {/* Notification Icon */}
        <div className="relative">
          <div
            className="flex items-center justify-center bg-white rounded-full w-9 h-9 cursor-pointer shadow"
            title="Notifications"
          >
            <HiOutlineSpeakerphone className="text-gray-700" />
          </div>
          <span className="absolute -top-2 -right-1 flex items-center justify-center w-5 h-5 bg-purple-500 text-white rounded-full text-[10px] font-bold">
            1
          </span>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col text-right">
            <span className="text-xs font-medium">John Doe</span>
            <span className="text-[12px] text-gray-500">Admin</span>
          </div>
          <div
            className="flex items-center justify-center bg-white rounded-full w-9 h-9 cursor-pointer shadow"
            title="Profile"
          >
            <RxAvatar className="text-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
