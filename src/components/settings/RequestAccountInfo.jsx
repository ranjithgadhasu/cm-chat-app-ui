import { IoArrowBack } from "react-icons/io5";
import Sidebar from "../sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import ClipboardText from "../../assets/icons/ClipboardText.png";
import GroupImage from "../../assets/images/Group 3.png";

function RequestAccountInfo() {
  const navigate = useNavigate();

  return (
    <div className="app-page min-h-screen flex h-screen bg-[#f4f5f8]">
      {/* Sidebar */}
      <Sidebar />

      {/* Left Panel */}
      <div className="w-[320px] bg-[#f8f9fc] border-r dark:border-gray-700 border-gray-200 dark:bg-[#0b141a] ">
        {/* Header */}
        <div className="h-[60px] px-5 flex items-center gap-4">
          <IoArrowBack
            size={20}
            className="cursor-pointer text-gray-700 dark:text-white"
            onClick={() => navigate(-1)}
          />

          <h1 className="text-[22px] font-semibold text-[#111827] dark:text-white">
            Request Account Info
          </h1>
        </div>

        {/* Clipboard Circle */}
        <div className="flex justify-center mt-5">
          <div className="w-[95px] h-[95px] rounded-full bg-[#5B8DEF] flex items-center justify-center">
           <img
  src={ClipboardText}
  alt="Clipboard"
  className="w-12 h-12 brightness-0 invert"
/>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 mt-12">
          <div className="pb-4 border-b dark:border-gray-700 border-gray-300">
            <h3 className="text-[19px] font-medium text-[#374151] dark:text-white">
              Request Report
            </h3>
          </div>

          <p className="text-[15px] text-gray-500 leading-4 mt-5 dark:text-white">
            Create a report of your Talk Account information and settings, which
            you can access or port to another app. This report does not include
            your messages.
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex items-center justify-center bg-[#f4f5f8] dark:bg-[#0b141a] ">
        <div className="text-center">
          <img src={GroupImage} alt="" className="w-[220px] mx-auto" />

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
export default RequestAccountInfo;
