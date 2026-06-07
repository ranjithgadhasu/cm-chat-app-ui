import { useState, useRef } from "react";
import Sidebar from "../Sidebar/Sidebar";
import {
  Search,
  Plus,
  Send,
  Smile,
  Paperclip,
  ChevronDown,
} from "lucide-react";
import { IoClose } from "react-icons/io5";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";

const mediaImages = [
  {
    id: 1,
    url: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    url: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    url: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    url: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 1,
    url: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 2,
    url: "https://i.pravatar.cc/100?img=6",
  },
  {
    id: 3,
    url: "https://i.pravatar.cc/100?img=7",
  },
  {
    id: 4,
    url: "https://i.pravatar.cc/100?img=8",
  },
  {
    id: 1,
    url: "https://i.pravatar.cc/100?img=9",
  },
  {
    id: 2,
    url: "https://i.pravatar.cc/100?img=10",
  },
  {
    id: 3,
    url: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 4,
    url: "https://i.pravatar.cc/100?img=12",
  },
];
const mediaPreview = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=500",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=500",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=500",
  },
];
const groupsData = [
  {
    id: 1,
    name: "Animal Kingdom",
    message: "You: thnx!",
    time: "9:36",
    unread: 0,
    image: "https://i.pravatar.cc/100?img=12",
    avatar: "https://i.pravatar.cc/150?img=3",

    members: "Pink Panda, Turtle, 212 others",
    chats: [
      {
        sender: "other",
        text: "Hi 👋, How are ya ?",
        time: "0:12",
      },

      {
        sender: "me",
        text: "Can you send me an image and it as file?",
        time: "8:17",
      },
      {
        sender: "me",
        text: "Thnx!",
        time: "11:28",
      },
    ],
  },

  {
    id: 2,
    name: "Dog Hat",
    message: "It's so quite outside 😌",
    time: "9:36",
    unread: 2,
    image: "https://i.pravatar.cc/100?img=15",
    avatar: "https://i.pravatar.cc/150?img=1",

    members: "Tom, Jerry, 20 others",
    chats: [
      {
        sender: "other",
        text: "Hey bro 🔥",
        time: "9:00",
      },
      {
        sender: "me",
        text: "What's up?",
        time: "9:05",
      },
    ],
  },

  {
    id: 3,
    name: "Cute Turtle",
    message: "That's It, Goodbye!",
    time: "9:36",
    unread: 3,
    image: "https://i.pravatar.cc/100?img=18",
    avatar: "https://i.pravatar.cc/150?img=5",
    members: "Cute Panda, 10 others",
    chats: [
      {
        sender: "other",
        text: "Can we meet tomorrow?",
        time: "7:10",
      },
    ],
  },

  {
    id: 4,
    name: "Cool spirit",
    message: "Look what I found",
    time: "9:36",
    unread: 0,
    image: "https://i.pravatar.cc/100?img=25",
    avatar: "https://i.pravatar.cc/150?img=18",
    members: "Alex, 34 others",
    chats: [
      {
        sender: "other",
        text: "Check this image 😍",
        time: "4:30",
      },
    ],
  },

  {
    id: 5,
    name: "strange cat",
    message: "You: Hi, sorry to bother you...",
    time: "9:36",
    unread: 0,
    image: "https://i.pravatar.cc/100?img=31",
    avatar: "https://i.pravatar.cc/150?img=11",
    members: "Mr Cat, 90 others",
    chats: [
      {
        sender: "other",
        text: "Are you free today?",
        time: "1:10",
      },
    ],
  },
];

export default function Groups() {
  const [selectedGroup, setSelectedGroup] = useState(groupsData[0]);

  const [allGroups, setAllGroups] = useState(groupsData);

  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [showProfilePanel, setShowProfilePanel] = useState(false);
  const [showMediaPanel, setShowMediaPanel] = useState(false);
  const [showStarredPanel, setShowStarredPanel] = useState(false);
  const [activeTab, setActiveTab] = useState("media");
  const [showVideoCallModal, setShowVideoCallModal] = useState(false);
  const [callStatus, setCallStatus] = useState("connecting");
  const [showCallModal, setShowCallModal] = useState(false);

  // SEND MESSAGE
  const handleSendMessage = () => {
    if (!message.trim()) return;

    const updatedGroups = allGroups.map((group) => {
      if (group.id === selectedGroup.id) {
        return {
          ...group,
          chats: [
            ...group.chats,
            {
              sender: "me",
              text: message,
              time: "Now",
            },
          ],
          message: `You: ${message}`,
        };
      }

      return group;
    });

    setAllGroups(updatedGroups);

    const updatedSelectedGroup = updatedGroups.find(
      (group) => group.id === selectedGroup.id,
    );

    setSelectedGroup(updatedSelectedGroup);

    setMessage("");
  };
  const filteredGroups = allGroups.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const fileInputRef = useRef(null);

  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      console.log(file);
    }
  };
  const handleVideoCall = () => {
    setShowVideoCallModal(true);
  };

  const handleAudioCall = () => {
    setShowCallModal(true);
    setTimeout(() => {
      setCallStatus("connected");
    }, 3000);
  };

  return (
    <div className="app-page min-h-screen h-screen bg-[#f4f6fb] dark:bg-[#0b141a] flex ">
      {/* LEFT SIDEBAR */}

      <Sidebar />
      {/* GROUP LIST */}
      <div className="w-[320px] bg-[#f7f8fc] dark:bg-[#0b141a] border-r border-[#e7eaf3] dark:border-gray-700 px-5 py-5 overflow-y-auto">
        <h1 className="text-[38px] font-bold text-[#121826] dark:text-white">
          Groups
        </h1>

        {/* Search */}
        <div className="relative mb-7">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5b8cff]"
          />

          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-12 rounded-2xl border-2 border-[#5b8cff] bg-transparent dark:bg-[#2a3942] text-black dark:text-white pl-11 pr-4 text-sm outline-none placeholder:text-[#7d92c2] dark:placeholder:text-gray-400"
          />
        </div>

        {/* Create Group */}
        <div className="flex items-center justify-between mb-4 cursor-pointer">
          <button
            onClick={() => setShowModal(true)}
            className="text-[#5b8cff] text-sm font-medium cursor-pointer"
          >
            Create New Group
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="text-[#5b8cff] cursor-pointer"
          >
            <Plus size={18} />
          </button>
        </div>

        <div className="border-b border-[#e5e7ef] mb-4 dark:border-gray-700"></div>

        {/* Pinned */}
        <p className="text-sm text-gray-500 mb-4">Pinned</p>

        {/* GROUPS */}
        <div className="space-y-3">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              onClick={() => setSelectedGroup(group)}
              className={`rounded-2xl px-4 py-3 cursor-pointer transition-all ${
                selectedGroup.id === group.id
                  ? "bg-[#5b8cff] text-white shadow-md rounded-[18px]"
                  : "bg-[#fdfdfd] dark:bg-[#111b21] hover:bg-white dark:hover:bg-[#2a3942]"
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <img
                    src={group.image}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-[15px]">{group.name}</h3>

                    <p
                      className={`text-xs mt-1 ${
                        selectedGroup.id === group.id
                          ? "text-white/90"
                          : "text-gray-500"
                      }`}
                    >
                      {group.message}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`text-[11px] ${
                      selectedGroup.id === group.id
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    {group.time}
                  </span>

                  {group.unread > 0 && (
                    <div className="w-5 h-5 rounded-full bg-[#5b8cff] text-white text-[10px] flex items-center justify-center">
                      {group.unread}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT SECTION */}
      <div
        className={`flex-1 flex flex-col bg-[#f4f6fb] dark:bg-[#0b141a] transition-all duration-300 ${
          showProfilePanel || showMediaPanel || showStarredPanel
            ? "mr-[340px]"
            : ""
        }`}
      >
        {/* HEADER */}
        <div className="h-[74px] bg-[#f0f2f5] dark:bg-[#0b141a] border-b border-[#e5e7eb] dark:border-[#374045] px-6 flex items-center justify-between shadow-sm">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setShowProfilePanel(true)}
          >
            <img
              src={selectedGroup.image}
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h3 className="font-semibold text-[#111827] dark:text-white">
                {selectedGroup.name}
              </h3>

              <p className="text-sm text-gray-500 dark:text-white">
                {selectedGroup.members}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 text-gray-700 dark:text-white">
            <div className="flex flex-col items-center text-gray-700 cursor-pointer">
              <FaVideo
                className="dark:text-white"
                size={18}
                onClick={handleVideoCall}
              />
              <p className="text-xs mt-2 dark:text-white">Video</p>
            </div>
            <div className="flex flex-col items-center text-gray-700 cursor-pointer">
              <FaPhoneAlt
                className="dark:text-white"
                size={18}
                onClick={handleAudioCall}
              />
              <p className="text-xs mt-2 dark:text-white">Voice</p>
            </div>
            <Search className="dark:text-white mb-5" size={18} />

            <ChevronDown className="dark:text-white mb-5" size={18} />
          </div>
        </div>

        {/* CHAT BODY */}
        <div className="flex-1 px-5 py-6 overflow-y-auto dark:bg-[#0b141a]">
          <div className="flex items-center gap-3 mb-8flex  mb-8">
            <div className="flex-1 h-[1px] bg-gray-200 dark:bg-gray-700"></div>

            <span className="text-xs text-[#8696a0]">Today</span>

            <div className="flex-1 h-[1px] bg-gray-200 dark:bg-gray-700"></div>
          </div>

          {/* MESSAGES */}
          <div className="space-y-5">
            {selectedGroup.chats.map((chat, index) => (
              <div
                key={index}
                className={`flex ${
                  chat.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div>
                  <div
                    className={`max-w-[300px] px-5 py-3 rounded-2xl text-sm ${
                      chat.sender === "me"
                        ? "bg-[#5b8cff] text-white"
                        : "bg-[#ffffff] text-[#111827] shadow-mdrounded-[18px]"
                    }`}
                  >
                    {chat.text}
                  </div>

                  <p
                    className={`text-[11px] text-gray-400 mt-1 ${
                      chat.sender === "me" ? "text-right" : "text-left"
                    }`}
                  >
                    {chat.time}
                  </p>
                </div>
              </div>
            ))}

            {/* IMAGE */}
            {selectedGroup.id === 1 && (
              <>
                <div className="mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500"
                    alt=""
                    className="w-[160px] h-[120px] object-cover rounded-2xl shadow-lg border border-[#1f2c34]"
                  />

                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    🔥 1<span className="text-xs ml-20">10:35</span>
                  </div>
                </div>

                {/* FILE */}
                <div className="mt-8 flex items-center justify-between bg-[#f8f9fc] dark:bg-[#202c33] w-[240px] rounded-2xl px-4 py-4 shadow-lg border border-[#e5e7eb] dark:border-[#374045]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#f2f4fa] flex items-center justify-center">
                      🖼️
                    </div>

                    <div>
                      <h4 className="text-sm text-gray-700 dark:text-white">
                        Abstract.png
                      </h4>
                    </div>
                  </div>

                  <button className="text-gray-600">⬇</button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* BOTTOM INPUT */}
        <div className="px-5 py-4 border-t border-gray-300 dark:border-gray-700">
          <div className="h-[62px] bg-[#eef2fb] rounded-2xl flex items-center px-5 gap-4 dark:bg-[#202c33]">
            <button
              className="text-[#6b8cff] cursor-pointer"
              onClick={handleAttachmentClick}
            >
              <Paperclip size={20} />
            </button>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            <input
              type="text"
              placeholder="Write a message ..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-[#8fa0c7]"
            />

            <button className="text-[#5b8cff]">
              <Smile size={21} />
            </button>

            <button
              onClick={handleSendMessage}
              className="w-11 h-11 rounded-xl bg-[#5b8cff] flex items-center justify-center text-white cursor-pointer"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
      {/* CREATE GROUP MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
          <div className="w-[420px] bg-white rounded-2xl p-7 shadow-2xl dark:bg-[#0b141a]  relative">
            {/* CLOSE */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 w-7 h-7 rounded-full bg-gray-500 text-white flex items-center justify-center text-sm dark:text-white"
            >
              ✕
            </button>

            {/* TITLE */}
            <h2 className="text-[18px] font-semibold text-[#111827] mb-8 dark:text-white">
              Create New Group
            </h2>

            {/* GROUP NAME */}
            <div className="mb-6 relative">
              <label className="absolute -top-2 left-4 dark:text-black bg-white px-1 text-xs text-[#7c8db5]">
                Name
              </label>

              <input
                type="text"
                placeholder="Group Name"
                className="w-full h-12 border-2  dark:border-gray-700 border-[#5b8cff] rounded-xl px-4 outline-2"
              />
            </div>

            {/* MEMBERS */}
            <div className="border border-[#d9dce5]  rounded-xl p-4 mb-24 relative">
              <label className="absolute -top-2 left-4 dark:text-black bg-white px-1 text-xs text-[#7c8db5]">
                Members
              </label>

              <div className="flex items-center gap-3 flex-wrap">
                {/* MEMBER */}
                <div className="bg-[#f1f3f7] rounded-full px-2 py-1 flex items-center gap-2">
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt=""
                    className="w-7 h-7 rounded-full"
                  />

                  <span className="text-sm text-gray-700 dark:text-black">Chip</span>

                  <button className="w-4 h-4 rounded-full bg-gray-300 text-[10px] flex items-center justify-center">
                    ✕
                  </button>
                </div>

                {/* MEMBER */}
                <div className="bg-[#f1f3f7] rounded-full px-2 py-1 flex items-center gap-2">
                  <img
                    src="https://i.pravatar.cc/100?img=15"
                    alt=""
                    className="w-7 h-7 rounded-full"
                  />

                  <span className="text-sm text-gray-700 dark:text-black">Chip</span>

                  <button className="w-4 h-4 rounded-full bg-gray-300 text-[10px] flex items-center justify-center">
                    ✕
                  </button>
                </div>
              </div>
            </div>

            {/* CREATE BUTTON */}
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#3867ff] hover:bg-[#2954e8] transition text-white px-8 py-3 rounded-xl font-medium shadow-lg"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
      {/* AUDIO CALL MODAL */}
      {showCallModal && (
        <div className="fixed top-6 right-6 z-50 ">
          <div className="w-[520px] h-[395px] bg-[#f7f7f7] dark:bg-[#0b141a] rounded-[30px] p-10 text-center relative shadow-2xl">
            {/* Close */}
            <button
              onClick={() => setShowCallModal(false)}
              className="absolute top-5 right-5 text-gray-500 text-xl"
            >
              ✕
            </button>

            {/* Users */}
            <div className="flex flex-col items-center mb-1">
              {/* Avatar Group */}
              <div className="relative flex items-center justify-center h-[120px]">
                {/* Your Avatar */}
                <div className="relative z-10">
                  <img
                    src={selectedGroup.image}
                    alt=""
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </div>

                {/* Audio Wave */}
                <div className="absolute flex items-center justify-center">
                  <svg
                    width="180"
                    height="50"
                    viewBox="0 0 180 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Main Wave */}
                    <path
                      d="
                  M0 25
                  C8 5,16 45,24 25
                  S40 5,48 25
                  S64 45,72 25
                  S88 5,96 25
                  S112 45,120 25
                  S136 5,144 25
                  S160 45,180 25
                "
                      stroke="#3B82F6"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="transparent"
                    />

                    {/* Second Wave */}
                    <path
                      d="
                  M0 25
                  C8 45,16 5,24 25
                  S40 45,48 25
                  S64 5,72 25
                  S88 45,96 25
                  S112 5,120 25
                  S136 45,144 25
                  S160 5,180 25
                "
                      stroke="#60A5FA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="transparent"
                      opacity="0.8"
                    />
                  </svg>
                </div>

                {/* User Avatar */}
                <div className="ml-[140px] relative z-10">
                  <img
                    src={selectedGroup?.avatar}
                    alt=""
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </div>
              </div>
              {/* Name */}
              <h3 className="mt-6 text-[20px] font-semibold text-gray-800 dark:text-white ">
                {selectedGroup?.name}
              </h3>

              {/* Status */}
              <p className="text-sm text-gray-500 mt-1">
                {callStatus === "connecting" ? "Connecting..." : ""}
              </p>
            </div>
            {/* Status */}
            {callStatus === "connecting" ? (
              <h5 className="text-1xl font-semibold text-gray-500 mb-8">
                Connecting...
              </h5>
            ) : (
              <div className="mb-8">
                <h5 className="text-green-500 font-semibold text-lg">
                  Connected
                </h5>

                <p className="text-3xl font-bold mt-3">12:32</p>
              </div>
            )}

            {/* Hangup */}
            <button
              onClick={() => setShowCallModal(false)}
              className="px-6 py-3 border border-red-400 text-red-400 rounded-xl hover:bg-red-50"
            >
              Hang Up
            </button>
          </div>
        </div>
      )}
      {/* Video Call Modal */}
      {showVideoCallModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          {/* Relative container wrapper */}
          <div className="w-[700px] h-[450px] rounded-[35px] relative shadow-2xl bg-zinc-950 border border-zinc-800">
            {/* Close Button (z-50) */}
            <button
              onClick={() => setShowVideoCallModal(false)}
              className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-md hover:bg-black/60 transition"
            >
              ✕
            </button>

            {/* Small Self Camera Card (Shifted to z-50 to ensure it stays on top) */}
            <div className="absolute top-5 right-20 w-[160px] h-[100px] rounded-[20px] overflow-hidden border-2 border-zinc-700 bg-zinc-800 shadow-2xl z-50 flex items-center justify-center">
              {selectedGroup?.image ? (
                <img
                  /* Using a different placeholder avatar so it's visually distinct from the background feed */
                  src={selectedGroup.image}
                  alt="Self Camera Feed"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-xs text-zinc-500 font-medium">
                  Camera Off
                </span>
              )}
            </div>

            {/* Main Full Screen Card (Cleaned container tags) */}
            <div className="w-full h-full bg-zinc-900 flex items-center justify-center absolute inset-0 overflow-hidden rounded-[35px] z-10">
              {selectedGroup?.avatar ? (
                <img
                  src={selectedGroup.avatar}
                  alt="Main Video Feed"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-zinc-500">
                  <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center text-xl font-semibold text-zinc-400 border border-zinc-700 animate-pulse">
                    {selectedGroup?.name?.charAt(0) || "P"}
                  </div>
                  <p className="text-sm tracking-wide font-medium text-zinc-400">
                    Connecting video feed...
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Call Button (z-50) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50">
              <button
                onClick={() => setShowVideoCallModal(false)}
                className="w-24 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl hover:bg-red-700 hover:scale-105 transition-all duration-200"
              >
                <FaPhoneAlt className="rotate-[135deg]" size={22} />
              </button>
            </div>
          </div>
        </div>
      )}

      {showProfilePanel && (
        <div className="absolute top-0 right-0 w-[340px] bottom-0 dark:bg-[#0b141a] border-l border-gray-300 dark:border-gray-700 flex flex-col z-[1]">
          {/* TOP HEADER */}
          <div className="h-[76px] px-5 border-b border-gray-300 dark:border-gray-700 flex items-center justify-between shrink-0">
            <p className="text-sm text-gray-600 dark:text-white">
              Contact info
            </p>
            <button
              className="cursor-pointer"
              onClick={() => setShowProfilePanel(false)}
            >
              <IoClose size={22} />
            </button>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div className="flex-1 overflow-y-auto">
            {/* Profile */}
            <div className="flex flex-col items-center py-8 border-b border-gray-300 dark:border-gray-700">
              <img
                src={selectedGroup.image}
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />
              <h2 className="mt-2 text-[16px] font-semibold">
                {selectedGroup.name}
              </h2>

              <p className="text-sm text-gray-500 mt-1 dark:text-white">
                +91 6265 081 928
              </p>

              {/* Actions */}
              <div className="flex items-center gap-14 mt-4">
                <div className="flex flex-col items-center text-gray-700 cursor-pointer dark:text-white">
                  <FaVideo size={18} onClick={handleVideoCall} />
                  <p className="text-xs mt-2">Video</p>
                </div>
                <div className="flex flex-col items-center text-gray-700 cursor-pointer dark:text-white">
                  <FaPhoneAlt size={18} onClick={handleAudioCall} />
                  <p className="text-xs mt-2">Voice</p>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="px-5 py-5 border-b border-gray-300 dark:border-gray-700">
              <p className="text-xs text-gray-500 mb-3">About</p>
              <p className="text-sm">Hi there, I am using chat app</p>
            </div>

            {/* Media */}
            <div className="px-5 py-5 border-b border-gray-300 dark:border-gray-700">
              <div
                onClick={() => {
                  setShowProfilePanel(false);
                  setShowMediaPanel(true);
                }}
                className="flex items-center justify-between mb-4 cursor-pointer"
              >
                <p className="text-sm font-medium">Media, links and docs</p>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">201</span>

                  <span>›</span>
                </div>
              </div>

              <div className="flex gap-3">
                {mediaPreview.map((media) => (
                  <img
                    key={media.id}
                    src={media.url}
                    alt=""
                    className="w-20 h-16 rounded-lg object-cover"
                  />
                ))}
              </div>
            </div>

            {/* Settings */}
            <div className="px-5">
              <div
                onClick={() => {
                  setShowProfilePanel(false);
                  setShowStarredPanel(true);
                }}
                className="h-[60px] flex items-center justify-between border-b border-gray-300 dark:border-gray-700 cursor-pointer"
              >
                <p className="text-sm">⭐ Starred Messages</p>

                <span>›</span>
              </div>

              <div className="h-[60px] flex items-center justify-between border-b border-gray-300 dark:border-gray-700">
                <p className="text-sm">🔕 Mute Notifications</p>

                <div className="w-10 h-5 bg-[#5d95ff] rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-[2px] right-[2px]"></div>
                </div>
              </div>
            </div>

            {/* Group */}
            <div className="px-5 py-5 border-b border-gray-300 dark:border-gray-700">
              <p className="text-xs text-gray-500 mb-4 dark:text-white">
                1 group in common
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-sm font-semibold">Camel's Gang</h3>

                  <p className="text-xs text-gray-500 mt-1">
                    Owl, Parrot, Rabbit , You
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BUTTONS */}
          <div className="p-5 border-t border-gray-200 dark:border-gray-700 bg-white shrink-0 dark:bg-[#0b141a]">
            <div className="flex items-center gap-3 ">
              {/* Block */}
              <button className="flex-1 h-[48px] rounded-xl border border-[#5d95ff] bg-[#f5f9ff] text-[#5d95ff] text-sm font-medium flex items-center justify-center gap-2 dark:bg-[#0b141a] transition">
                Block
              </button>

              {/* Delete */}
              <button className="flex-1 h-[48px] rounded-xl border border-[#ff5d5d] bg-[#fff5f5] text-[#ff5d5d] text-sm font-medium flex items-center justify-center gap-2 dark:bg-[#0b141a] transition">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {showStarredPanel && (
        <div className="absolute top-0 right-0 w-[340px] bottom-0 dark:bg-[#0b141a] z-[120] border-l border-gray-300 dark:border-gray-700 flex flex-col">
          {/* Header */}
          <div className="h-[76px] px-5 border-b border-gray-300 dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <IoClose
                size={20}
                className="cursor-pointer"
                onClick={() => {
                  setShowStarredPanel(false);
                  setShowProfilePanel(true);
                }}
              />
              <h2 className="font-medium">Starred Messages</h2>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <p className="text-xs text-gray-500">27th Oct 22</p>
            <div className="bg-white rounded-2xl p-3 w-fit shadow dark:text-white dark:bg-[#0b141a]">
              Hi 👋, How are ya ?
            </div>
            <div className="bg-blue-500 text-white rounded-2xl p-3 ml-auto w-fit">
              Hi 👋 Panda, not bad, u ?
            </div>
            <div className="bg-blue-500 text-white rounded-2xl p-3 ml-auto w-fit">
              Can you send it as file ?
            </div>

            <div className="bg-white rounded-xl p-3 flex items-center gap-3 shadow w-fit">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                🖼️
              </div>
              <span className="text-sm">Abstract.png</span>

              <button
                onClick={() => setShowStarredPanel(false)}
                className="text-lg cursor-pointer "
              >
                ⬇️
              </button>
            </div>
          </div>
        </div>
      )}

      {showMediaPanel && (
        <div className="absolute top-0 right-0 w-[340px] dark:bg-[#0b141a] bottom-0 bg-[#f8f8f8] border-l border-gray-300 dark:border-gray-700 flex flex-col z-[100]">
          <div className="h-[76px] px-5 border-b border-gray-300 dark:border-gray-700 flex items-center justify-between">
            <h2 className="font-semibold">Media</h2>

            <button
              onClick={() => {
                setShowMediaPanel(false);
                setShowProfilePanel(true);
              }}
            >
              <IoClose size={22} />
            </button>
          </div>
          <div className="flex border-b border-gray-300 dark:border-gray-700 dark:bg-[#0b141a] dark:text-white bg-white">
            <button
              onClick={() => setActiveTab("media")}
              className={`dark:text-white cursor-pointer flex-1 py-4 ${
                activeTab === "media"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600"
              }`}
            >
              Media
            </button>

            <button
              onClick={() => setActiveTab("links")}
              className={`dark:text-white cursor-pointer flex-1 py-4 ${
                activeTab === "links"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600"
              }`}
            >
              Links
            </button>

            <button
              onClick={() => setActiveTab("docs")}
              className={`dark:text-white cursor-pointer flex-1 py-4 ${
                activeTab === "docs"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600"
              }`}
            >
              Docs
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {activeTab === "media" && (
              <div className="grid grid-cols-3 gap-3">
                {mediaImages.map((item) => (
                  <img
                    key={item.id}
                    src={item.url}
                    alt=""
                    className="w-full h-24 rounded-lg object-cover"
                  />
                ))}
              </div>
            )}
            {activeTab === "links" && (
              <div className="p-4 space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex gap-3"
                  >
                    <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                      🔗
                    </div>

                    <div className="flex-1">
                      <p className="text-xs text-gray-500 truncate">
                        https://codingmonk.in/blogs
                      </p>

                      <p className="text-blue-500 text-sm font-medium mt-1">
                        codingmonk.in
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "docs" && (
              <div className="p-4 space-y-4">
                {[
                  "Booked Ticket.pdf",
                  "Invoice 22 Oct.pdf",
                  "Sales Report.xlsx",
                ].map((doc, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm"
                  >
                    <div className="h-28 bg-gray-200 rounded-lg mb-3"></div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>{doc.endsWith(".pdf") ? "📄" : "📊"}</span>

                        <span className="text-sm">{doc}</span>
                      </div>

                      <button className="text-lg">⬇️</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
