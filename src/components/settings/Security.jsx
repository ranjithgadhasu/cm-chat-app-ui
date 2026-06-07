import {
  IoArrowBack,
  IoLockClosedOutline,
  IoChatbubbleEllipsesOutline,
  IoCallOutline,
  IoLinkOutline,
  IoLocationOutline,
} from "react-icons/io5";
import Sidebar from "../sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { CircleDashed } from "lucide-react";
import GroupImage from "../../assets/images/Group 3.png";

function Security() {
  const navigate = useNavigate();

  return (
    <div className="app-page min-h-screen flex h-screen bg-[#f4f5f8]">
      {/* Sidebar */}
      <Sidebar />

      {/* Left Panel */}
      <div className="w-[320px] bg-[#f8f9fc] border-r border-gray-200 dark:bg-[#0b141a]">
        {/* Header */}
        <div className="h-[60px] px-5 flex items-center gap-4">
          <IoArrowBack
            size={20}
            className="cursor-pointer text-gray-700 dark:text-white"
            onClick={() => navigate(-1)}
          />

          <h1 className="text-[25px] font-semibold text-[#111827] dark:text-white">Security</h1>
        </div>

        {/* Lock Icon */}
        <div className="flex justify-center mt-3">
          <div className="w-[88px] h-[88px] rounded-full bg-[#5B8DEF] flex items-center justify-center">
            <IoLockClosedOutline size={22} className="dark:text-white" />
          </div>
        </div>

        {/* Description */}
        <div className="px-5 mt-5">
          <h3 className="text-[19px] font-semibold text-[#374151] dark:text-white">
            Your Chats and calls are private
          </h3>

          <p className="text-[14px] text-gray-500 leading-4 mt-2 dark:text-white">
            End-to-end encryption keeps your personal messages & call between
            you and person you choose to communicate with. Not even talk can
            read or listen to them. This includes your
          </p>
        </div>

        {/* Security Items */}
        <div className="px-5 mt-8">
          <div className="flex items-center gap-4 mb-6">
            <IoChatbubbleEllipsesOutline size={22} className="text-gray-500 dark:text-white" />

            <span className="text-[15px] text-[#6B7280] dark:text-white">
              Text and voice messages
            </span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <IoCallOutline size={22} className="text-gray-500 dark:text-white" />

            <span className="text-[15px] text-[#6B7280] dark:text-white">
              Audio & Video Calls
            </span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <IoLinkOutline size={22} className="text-gray-500 dark:text-white" />

            <span className="text-[15px] text-[#6B7280] dark:text-white">
              Photos, videos & documents
            </span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <IoLocationOutline size={22} className="text-gray-500 dark:text-white" />

            <span className="text-[15px] text-[#6B7280] dark:text-white">Location Sharing</span>
          </div>

          <div className="flex items-center gap-4">
            <CircleDashed size={22} className="text-gray-500 dark:text-white" />

            <span className="text-[15px] text-[#6B7280] dark:text-white">Status Updates</span>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex items-center justify-center bg-[#f4f5f8] dark:bg-[#0b141a]">
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

export default Security;
