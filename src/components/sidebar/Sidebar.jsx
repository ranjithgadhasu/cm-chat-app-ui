import { useTheme } from "../../context/ThemeContext";
import {
  FaCommentDots,
  FaUserFriends,
  FaPhoneAlt,
  FaCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Budgie from "../../assets/images/Budgie.png";

function Sidebar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="w-20 h-full dark:bg-[#0b141a] border-r border-[#dfe5f1] dark:border-[#374045] bg-[#eef1f7] flex flex-col justify-between items-center py-5 relative z-50 shrink-0">
      {/* Top Section */}
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <Link
          to="/profile"
          className="w-12 h-12 rounded-xl bg-[#cfd5ff] flex items-center justify-center"
        >
          <img src={Budgie} alt="logo" className="w-7" />
        </Link>

        {/* Menu Icons */}
        <div className="flex flex-col items-center gap-8">
          {/* Chat */}
          <Link
            to="/chat"
            className="bg-[#5b8cff] text-white p-3 rounded-xl hover:scale-105 transition duration-200"
          >
            <FaCommentDots size={18} />
          </Link>

          {/* Group */}
          <Link
            to="/group"
            className="text-gray-600 hover:text-[#5b8cff] transition duration-200"
          >
            <FaUserFriends size={18} />
          </Link>

          {/* Call Log */}
          <Link
            to="/calllog"
            className="text-gray-600 hover:text-[#5b8cff] transition duration-200"
          >
            <FaPhoneAlt size={18} />
          </Link>

          {/* Divider */}
          <div className="w-10 border-b border-gray-300"></div>

          {/* Settings */}
          <Link
            to="/settings"
            className="text-gray-600 hover:text-[#5b8cff] transition duration-200"
          >
            <FaCog size={18} />
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center gap-6">
        {/* Toggle */}
        <div
          onClick={toggleTheme}
          className={`w-12 h-6 rounded-full flex items-center px-1 cursor-pointer transition-all duration-300 ${
            isDarkMode ? "bg-[#5b8cff]" : "bg-gray-400"
          }`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full transition-all duration-300 ${
              isDarkMode ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>

        {/* Profile */}
        <img
          src="https://i.pravatar.cc/100?img=8"
          alt="profile"
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Sidebar;
