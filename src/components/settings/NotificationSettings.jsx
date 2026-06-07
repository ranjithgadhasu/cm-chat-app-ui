import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import Sidebar from "../sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import GroupImage from "../../assets/images/Group 3.png";
import { Link } from "react-router-dom";

function NotificationSettings() {
  const navigate = useNavigate();

  const [settings, setSettings] = useState([
    {
      id: 1,
      title: "Notifications",
      subtitle: "Show notifications for new messages",
      checked: true,
    },
    {
      id: 2,
      title: "Show Previews",
      checked: true,
    },
    {
      id: 3,
      title: "Show Reaction Notifications",
      checked: false,
    },
    {
      id: 4,
      title: "Incoming call ringtone",
      checked: false,
    },
    {
      id: 5,
      title: "Sounds",
      subtitle: "Play sounds for incoming messages",
      checked: true,
    },
  ]);

  const handleToggle = (id) => {
    setSettings((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  return (
    <div className="app-page min-h-screen flex h-screen bg-[#f4f5f8]">
      {/* Sidebar */}
      <Sidebar />

      {/* Notification Panel */}
   <div className="w-[320px] bg-[#f8f9fc] border-r border-gray-200 dark:border-gray-700 dark:bg-[#0b141a] flex flex-col h-full">
        {/* Header */}
        <div className="h-[60px] px-5 flex items-center gap-4">
          <IoArrowBack
            size={20}
            className="cursor-pointer text-gray-700 dark:text-white"
            onClick={() => navigate(-1)}
          />

          <h1 className="text-[25px] font-semibold text-[#111827] dark:text-white">
            Notifications
          </h1>
        </div>

        {/* Notification List */}
        <div className="px-4 mt-2 flex-1 overflow-y-auto">
          {settings.map((item) => (
            <div
              key={item.id}
              className="py-4 border-b border-gray-300 dark:border-gray-700 flex items-start justify-between"
            >
              <div>
                <p className="text-[16px] text-[#374151] dark:text-white">{item.title}</p>

                {item.subtitle && (
                  <p className="text-[14px] text-gray-400 mt-1 dark:text-white">
                    {item.subtitle}
                  </p>
                )}
              </div>

              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleToggle(item.id)}
                className="w-4 h-4 accent-blue-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex items-center justify-center bg-[#f4f5f8] dark:bg-[#0b141a]">
        <div className="text-center">
          <img
            src={GroupImage}
            alt="Empty State"
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

export default NotificationSettings;
