import { useState } from "react";
import {
  IoArrowBack,
  IoNotificationsOutline,
  IoLockClosedOutline,
  IoColorPaletteOutline,
  IoImageOutline,
  IoDocumentTextOutline,
  IoKeyOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";

import { PiKeyboard } from "react-icons/pi";
import Sidebar from "../sidebar/Sidebar";
import GroupImage from "../../assets/images/Group 3.png";
import { Link } from "react-router-dom";

function Settings() {
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [theme, setTheme] = useState("light");
  const [showKeyboardModal, setShowKeyboardModal] = useState(false);

  return (
    <div className="app-page min-h-screen flex h-screen bg-[#f4f5f8]">
      <Sidebar />

      {/* Left Settings Panel */}
      <div className="w-[320px] bg-[#f8f9fc] border-r border-gray-200 dark:border-gray-700 dark:bg-[#0b141a] overflow-auto dark:text-white">
        {/* Header */}
        <div className="px-5 py-4 flex items-center gap-4">
          <Link to="/profile" className="cursor-pointer text-gray-700">
            <IoArrowBack size={20}  className="dark:text-white"/>
          </Link>

          <h1 className="text-[25px] font-semibold text-[#111827] dark:text-white">Settings</h1>
        </div>

        {/* User */}
        <div className="px-5 py-5 flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt=""
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-medium dark:text-white">Shreyansh shah</h3>

            <p className="text-xs text-gray-500 dark:text-white">Exploring</p>
          </div>
        </div>

        <div className="mt-2">
          <div className="px-4 ">
            {/* Notifications */}
            <Link
              to="/notifications"
              className="h-[60px] flex items-center gap-4 px-2 cursor-pointer "
            >
              <IoNotificationsOutline size={22} className="text-gray-500 dark:text-white" />
              <span className="text-[15px] text-gray-600 dark:text-white">Notifications</span>
            </Link>
            <div className="w-[250px] mx-auto border-b dark:border-gray-700 border-gray-300"></div>

            {/* Privacy */}
            <Link
              to="/privacy"
              className="h-[60px] flex items-center gap-4 px-2 cursor-pointer"
            >
              <IoLockClosedOutline size={22} className="text-gray-500 dark:text-white" />
              <span className="text-[15px] text-gray-600 dark:text-white">Privacy</span>
            </Link>
            <div className="w-[250px] mx-auto border-b border-gray-300 dark:border-gray-700"></div>

            {/* Security */}
            <Link
              to="/security"
              className="h-[60px] flex items-center gap-4 px-2 cursor-pointer"
            >
              <IoKeyOutline size={22} className="text-gray-500 dark:text-white" />
              <span className="text-[15px] text-gray-600 dark:border-gray-700 dark:text-white">Security</span>
            </Link>
            <div className="w-[250px] mx-auto border-b border-gray-300 dark:border-gray-700"></div>

            {/* Theme */}
            <div
              onClick={() => setShowThemeModal(true)}
              className="h-[60px] flex items-center gap-4 px-2 cursor-pointer"
            >
              <IoColorPaletteOutline size={22} className="text-gray-500 dark:text-white" />

              <span className="text-[15px] text-gray-600 dark:text-white">Theme</span>
            </div>
            <div className="w-[250px] mx-auto border-b border-gray-300 dark:border-gray-700"></div>

            {/* Chat Wallpaper */}
            <Link
              to="/wallpaper"
              className="h-[60px] flex items-center gap-4 px-2 cursor-pointer"
            >
              <IoImageOutline size={22} className="text-gray-500 dark:text-white" />
              <span className="text-[15px] text-gray-600 dark:text-white">Chat Wallpaper</span>
            </Link>
            <div className="w-[250px] mx-auto border-b border-gray-300 dark:border-gray-700"></div>

            {/* Request Account Info */}
            <Link
              to="/requestinfo"
              className="h-[60px] flex items-center gap-4 px-2 cursor-pointer"
            >
              <IoDocumentTextOutline size={22} className="text-gray-500 dark:text-white" />
              <span className="text-[15px] text-gray-600 dark:text-white">
                Request Account Info
              </span>
            </Link>
            <div className="w-[250px] mx-auto border-b border-gray-300 dark:border-gray-700"></div>

            {/* Keyboard Shortcuts */}
            <div
              onClick={() => setShowKeyboardModal(true)}
              className="h-[60px] flex items-center gap-4 px-2 cursor-pointer"
            >
              <PiKeyboard size={22} className="text-gray-500 dark:text-white" />
              <span className="text-[15px] text-gray-600 dark:text-white">
                Keyboard Shortcuts
              </span>
            </div>
            <div className="w-[250px] mx-auto border-b border-gray-300 dark:border-gray-700"></div>
            {/* Help */}
            <Link
              to="/help"
              className="h-[60px] flex items-center gap-4 px-2 cursor-pointer"
            >
              <IoHelpCircleOutline size={22} className="text-gray-500 dark:text-white" />
              <span className="text-[18px] text-gray-600 dark:text-white">Help</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col items-center justify-center dark:bg-[#0b141a]">
        <img src={GroupImage} alt="" className="w-[220px]" />

        <p className="mt-5 text-sm font-medium text-gray-700 dark:text-white">
          Select a conversation or start a
          <Link to="/chat">
            <span className="text-blue-500 ml-1 cursor-pointer">new one</span>
          </Link>
        </p>
      </div>
      {showThemeModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 ">
          <div className="w-[360px] bg-white rounded-2xl p-6 dark:bg-[#0b141a]">
            <h2 className="text-[16px] font-medium mb-6">Choose Theme</h2>

            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="theme"
                  value="light"
                  checked={theme === "light"}
                  onChange={(e) => setTheme(e.target.value)}
                />
                Light
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="theme"
                  value="dark"
                  checked={theme === "dark"}
                  onChange={(e) => setTheme(e.target.value)}
                />
                Dark
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="theme"
                  value="system"
                  checked={theme === "system"}
                  onChange={(e) => setTheme(e.target.value)}
                />
                System Default
              </label>
            </div>

            <div className="flex justify-end gap-3 mt-8">
              <button
                onClick={() => setShowThemeModal(false)}
                className="px-4 py-2 text-blue-500"
              >
                Cancel
              </button>

              <button
                onClick={() => setShowThemeModal(false)}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
      {showKeyboardModal && (
        <div className="fixed inset-0 bg-black/30 flex  z-50">
          <div className="w-[850px] h-[530px] bg-white ml-60 rounded-[18px] border-2 mt-27 border-[#2F80ED] px-8 py-5 shadow-lg dark:bg-[#0b141a] ">
            <div className="text-[19px] font-medium text-gray-700 mb- dark:text-white6">
             <span className="dark:text-white"> Keyboard Shortcuts</span>
            </div>

            <div className="grid grid-cols-2 gap-x-10 text-[11px] text-gray-600">
              {/* LEFT */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-800 dark:text-white">
                    Mark as unread
                  </span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Cmd
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Shift
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800">
                      U
                    </kbd>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-800 dark:text-white">
                    Archive chat
                  </span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Cmd
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Shift
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      E
                    </kbd>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-800 dark:text-white">Pin chat</span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Cmd
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Shift
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      P
                    </kbd>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-800 dark:text-white">Search Chat</span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Cmd
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Shift
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      F
                    </kbd>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-800 dark:text-white">Next Chat</span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Ctrl
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Tab
                    </kbd>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-800 dark:text-white">New Group</span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Cmd
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Shift
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      N
                    </kbd>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-800 dark:text-white">
                    Increase speed of voice messages
                  </span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Shift
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      .
                    </kbd>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-800 dark:text-white">Settings</span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Shift
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      ,
                    </kbd>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] dark:text-white">Settings</span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Cmd
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      G
                    </kbd>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-800 dark:text-white">Mute</span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Cmd
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 dark:text-white">
                      Shift
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      M
                    </kbd>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-800 dark:text-white">Delete chat</span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Cmd
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Shift
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800">
                      D
                    </kbd>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-800 dark:text-white">Search</span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Cmd
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      F
                    </kbd>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[12px] dark:text-white">New Chat</span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Cmd
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800">N
                    </kbd>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-800 dark:text-white">
                    Previous Chat
                  </span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Ctrl
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Shift
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Tab
                    </kbd>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-800 dark:text-white">
                    Profile&About
                  </span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800">
                      Cmd
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      P
                    </kbd>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-800 dark:text-white">
                    Decrease speed of voice message
                  </span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Shift
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      ,
                    </kbd>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-800 dark:text-white">Emoji Panel</span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Cmd
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      E
                    </kbd>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-800 dark:text-white">
                    Sticker Panel
                  </span>
                  <div className="flex gap-3">
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      Cmd
                    </kbd>
                    <kbd className="px-2 border rounded bg-gray-50 w-10 h-7 text-center p-1 text-gray-800 ">
                      S
                    </kbd>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={() => setShowKeyboardModal(false)}
                className="w-[70px] h-[30px] bg-[#2F80ED] text-white text-[11px] rounded-md   shadow"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
