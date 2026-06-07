import {
  IoArrowBack,
  IoFingerPrintOutline,
} from "react-icons/io5";
import Sidebar from "../sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import GroupImage from "../../assets/images/Group 3.png";



function Help() {
  const navigate = useNavigate();

  return (
    <div className="app-page min-h-screen flex h-screen bg-[#f4f5f8]">

      {/* Sidebar */}
      <Sidebar />

      {/* Left Panel */}
      <div className="w-[320px] bg-[#f8f9fc] border-r border-gray-200 dark:bg-[#0b141a] ">

        {/* Header */}
        <div className="h-[60px] px-5 flex items-center gap-4">
          <IoArrowBack
            size={20}
            className="cursor-pointer text-gray-700 dark:text-white"
            onClick={() => navigate(-1)}
          />

          <h1 className="text-[25px] font-semibold text-[#111827] dark:text-white">
            Help
          </h1>
        </div>

        {/* Fingerprint Circle */}
        <div className="flex justify-center mt-5">
          <div className="w-[95px] h-[95px] rounded-full bg-[#5B8DEF] flex items-center justify-center">
            <IoFingerPrintOutline
              size={50}
              className="text-white"
            />
          </div>
        </div>

        {/* Menu Items */}
        <div className="mt-10 px-6">

          <div className="h-[42px] mt-20 mb-2 flex items-center dark:border-gray-700 border-b border-gray-300">
            <span className="text-[15px] text-[#4B5563] dark:text-white">
              Help Center
            </span>
          </div>

          <div className="h-[42px] flex items-center border-b dark:border-gray-700 border-gray-300">
            <span className="text-[15px] text-[#4B5563] dark:text-white">
              Contact Us
            </span>
          </div>

          <div className="h-[42px] mt-2 mb-2 flex items-center border-b dark:border-gray-700 border-gray-300">
            <span className="text-[15px] text-[#4B5563] dark:text-white">
              Licenses
            </span>
          </div>

          <div className="h-[42px] flex items-center">
            <span className="text-[15px] text-[#4B5563] dark:text-white">
              Terms and Privacy Policy
            </span>
          </div>

        </div>

      </div>

      {/* Right Content */}
      <div className="flex-1 flex items-center justify-center bg-[#f4f5f8] dark:bg-[#0b141a] ">

        <div className="text-center">

          <img
            src={GroupImage}
            alt=""
            className="w-[220px] mx-auto"
          />

          <p className="mt-5 text-sm font-medium text-gray-700 dark:text-white">
            Select a conversation or start a
            <Link to="/chat">
              <span className="text-blue-500 ml-1 cursor-pointer">new one</span>
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Help;