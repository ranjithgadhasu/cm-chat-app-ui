import { useState } from "react";
import { IoArrowBack, IoChevronForward } from "react-icons/io5";
import Sidebar from "../sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import GroupImage from "../../assets/images/Group 3.png";

function Privacy() {
  const navigate = useNavigate();

  const [readReceipts, setReadReceipts] = useState(true);

  const privacyItems = [
    {
      id: 1,
      title: "Last Seen",
      value: "Everyone",
      path: "/privacy/last-seen",
    },
    {
      id: 2,
      title: "Profile Photo",
      value: "Everyone",
      path: "/privacy/profile-photo",
    },
    {
      id: 3,
      title: "About",
      value: "Everyone",
      path: "/privacy/profile-about",
    },
    {
      id: 4,
      title: "Groups",
      value: "Everyone",
      path: "/privacy/groups",
    },
    {
      id: 5,
      title: "Blocked contacts",
      value: "9",
      path: "/privacy/blocked-contacts",
    },
  ];

  return (
    <div className="app-page min-h-screen flex h-screen bg-[#f4f5f8]">
      {/* Sidebar */}
      <Sidebar />

      {/* Privacy Panel */}
      <div className="w-[320px] bg-[#f8f9fc] border-r border-gray-200 dark:bg-[#0b141a] dark:border-gray-700 flex flex-col h-full">
        {/* Header */}
        <div className="h-[60px] px-5 flex items-center gap-4">
          <IoArrowBack
            size={20}
            className="cursor-pointer text-gray-700 dark:text-white"
            onClick={() => navigate("/settings")}
          />

          <h1 className="text-[25px] font-semibold text-[#111827] dark:text-white">
            Privacy
          </h1>
        </div>

        {/* Top Items */}
        <div className="px-4 flex-1 overflow-y-auto">
          {privacyItems.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(item.path)}
              className="py-4 border-b border-gray-300 dark:border-gray-700 flex items-center justify-between cursor-pointer "
            >
              <div>
                <p className="text-[15px] text-[#374151] dark:text-white">
                  {item.title}
                </p>

                <p className="text-[14px] text-gray-400 mt-1 dark:text-white">
                  {item.value}
                </p>
              </div>

              <IoChevronForward
                size={18}
                className="text-gray-500 dark:text-white"
              />
            </div>
          ))}

          {/* Read Receipts */}
          <div className="py-4 border-b border-gray-300 dark:border-gray-700 flex items-start justify-between">
            <div>
              <p className="text-[15px] text-[#374151] dark:text-white">
                Read receipts
              </p>

              <p className="text-[14px] text-gray-400 mt-1 leading-4 dark:text-white">
                If turned off, you won't send or receive read receipts. Read
                receipts are always sent for group chats.
              </p>
            </div>

            <input
              type="checkbox"
              checked={readReceipts}
              onChange={() => setReadReceipts(!readReceipts)}
              className="w-4 h-4 accent-blue-500 mt-1"
            />
          </div>

          {/* Bottom Items */}
          {privacyItems.slice(3).map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(item.path)}
              className="py-4 border-b border-gray-300 dark:border-gray-700 dark:text-white flex items-center justify-between cursor-pointer"
            >
              <div>
                <p className="text-[15px] text-[#374151] dark:text-white">
                  {item.title}
                </p>

                <p className="text-[14px] text-gray-400 mt-1 dark:text-white">
                  {item.value}
                </p>
              </div>

              <IoChevronForward
                size={18}
                className="text-gray-500 dark:text-white"
              />
            </div>
          ))}
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

export default Privacy;
