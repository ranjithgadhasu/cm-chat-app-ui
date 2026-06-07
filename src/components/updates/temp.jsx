import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  MoreVertical,
  Paperclip,
  ChevronLeft,
  Send,
} from "lucide-react";
import Sidebar from "../sidebar/Sidebar";
import "./index.css";
import { FaPhoneAlt, FaVideo, FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";

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

const initialChats = [
  {
    id: 1,
    name: "Pink Panda",
    image: "https://i.pravatar.cc/150?img=1",
    avatar: "https://i.pravatar.cc/150?img=3",
    messages: [
      {
        type: "text",
        sender: "other",
        text: "Hi 👋, How are ya ?",
        time: "0:12",
      },
      {
        type: "divider",
        label: "Today",
      },
      {
        type: "text",
        sender: "me",
        text: "Hi 👋 Panda, not bad, u ?",
        time: "8:15",
      },
      {
        type: "text",
        sender: "me",
        text: "Can you send me an abstract image?",
        time: "8:17",
      },
      {
        type: "image",
        sender: "other",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        time: "10:35",
        reaction: "👍 1",
      },
      {
        type: "file",
        sender: "other",
        fileName: "Abstract.png",
        time: "11:25",
      },
      {
        type: "text",
        sender: "me",
        text: "Can you send it as file ?",
        time: "11:12",
      },
      {
        type: "text",
        sender: "me",
        text: "Thnx!",
        time: "11:28",
      },
    ],
  },
  {
    id: 2,
    name: "Blue Whale",
    image: "https://i.pravatar.cc/150?img=2",
    avatar: "https://i.pravatar.cc/150?img=13",
    messages: [
      {
        type: "text",
        sender: "other",
        text: "Hi 👋, How are ya ?",
        time: "0:12",
      },
      {
        type: "divider",
        label: "Today",
      },
      {
        type: "text",
        sender: "me",
        text: "Hi 👋 Panda, not bad, u ?",
        time: "8:15",
      },
      {
        type: "text",
        sender: "me",
        text: "Can you send me an abstract image?",
        time: "8:17",
      },
      {
        type: "image",
        sender: "other",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        time: "10:35",
        reaction: "👍 1",
      },
      {
        type: "file",
        sender: "other",
        fileName: "Abstract.png",
        time: "11:25",
      },
      {
        type: "text",
        sender: "me",
        text: "Can you send it as file ?",
        time: "11:12",
      },
      {
        type: "text",
        sender: "me",
        text: "Thnx!",
        time: "11:28",
      },
    ],
  },
  {
    id: 3,
    name: "Dog Hat",
    image: "https://i.pravatar.cc/150?img=3",
    avatar: "https://i.pravatar.cc/150?img=11",
    messages: [
      {
        type: "text",
        sender: "other",
        text: "Hi 👋, How are ya ?",
        time: "0:12",
      },
      {
        type: "divider",
        label: "Today",
      },
      {
        type: "text",
        sender: "me",
        text: "Hi 👋 Panda, not bad, u ?",
        time: "8:15",
      },
      {
        type: "text",
        sender: "me",
        text: "Can you send me an abstract image?",
        time: "8:17",
      },
      {
        type: "image",
        sender: "other",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        time: "10:35",
        reaction: "👍 1",
      },
      {
        type: "file",
        sender: "other",
        fileName: "Abstract.png",
        time: "11:25",
      },
      {
        type: "text",
        sender: "me",
        text: "Can you send it as file ?",
        time: "11:12",
      },
      {
        type: "text",
        sender: "me",
        text: "Thnx!",
        time: "11:28",
      },
    ],
  },
];
export default function UnreadPage() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const [chatList, setChatList] = useState(initialChats);
  const [selectedChat, setSelectedChat] = useState(initialChats[0]);
  const [showCallModal, setShowCallModal] = useState(false);
  const [callStatus, setCallStatus] = useState("connecting");
  const [showVideoCallModal, setShowVideoCallModal] = useState(false);

  const [showProfilePanel, setShowProfilePanel] = useState(false);
  const [showMediaPanel, setShowMediaPanel] = useState(false);
  const [activeTab, setActiveTab] = useState("media");
  const [showStarredPanel, setShowStarredPanel] = useState(false);

  const filteredChats = chatList.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      type: "text",
      sender: "me",
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updatedChats = chatList.map((chat) => {
      if (chat.id === selectedChat.id) {
        return {
          ...chat,
          messages: [...chat.messages, newMessage],
        };
      }
      return chat;
    });

    setChatList(updatedChats);

    const updatedSelected = updatedChats.find(
      (chat) => chat.id === selectedChat.id,
    );

    setSelectedChat(updatedSelected);
    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

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

  const handleAudioCall = () => {
    setShowCallModal(true);

    setCallStatus("connecting");

    setTimeout(() => {
      setCallStatus("connected");
    }, 3000);
  };

  const handleVideoCall = () => {
    setShowVideoCallModal(true);
  };

  return (
    <div className="app-page min-h-screen w-full h-screen flex bg-[#f4f4f4] overflow-hidden">
      <Sidebar />

      {/* Left Panel */}
      <div className="w-[320px] bg-white dark:bg-[#0b141a] border-b border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ChevronLeft
              size={22}
              className="cursor-pointer"
              onClick={() => navigate("/chat")}
            />

            <h1 className="text-3xl font-semibold text-black dark:text-white">
              Unread
            </h1>
          </div>

          <MoreVertical size={20} />
        </div>

        {/* Search */}
        <div className="px-4 pb-4">
          <div className="flex items-center bg-gray-100 dark:bg-[#2a3942] rounded-xl px-3 h-11">
            <Search size={16} />

            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent outline-none px-2 text-black dark:text-white placeholder:text-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto px-3">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleSelectChat(chat)}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer mb-2 transition-all
                ${
                  selectedChat.id === chat.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-50 dark:bg-[#111b21] hover:bg-gray-100 dark:hover:bg-[#2a3942]"
                }`}
            >
              <img
                src={chat.image}
                alt={chat.name}
                className="w-12 h-12 rounded-full"
              />

              <div
                className={`flex-1 overflow-hidden ${
                  selectedChat.id === chat.id ? "text-white" : ""
                }`}
              >
                <h3
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer mb-2 transition-all
${
  selectedChat.id === chat.id
    ? "bg-blue-500 text-white"
    : "bg-gray-50 dark:bg-[#111b21] hover:bg-gray-100 dark:hover:bg-[#2a3942]"
}`}
                >
                  {chat.name}
                </h3>
                <p
                  className={`text-xs truncate ${
                    selectedChat.id === chat.id
                      ? "text-white/80"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {chat.messages[chat.messages.length - 1]?.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Chat Section */}
      <div className="flex-1 flex flex-col bg-[#f7f8fc] dark:bg-[#0b141a]">
        {/* Header */}
        <div className="h-[70px] bg-white dark:bg-[#0b141a] border-b border-gray-200 dark:border-gray-700 px-6 flex items-center">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShowProfilePanel(true)}
          >
            <img
              src={selectedChat.image}
              alt=""
              className="w-11 h-11 rounded-full"
            />

            <div className="ml-3">
              <h3 className="font-semibold text-black dark:text-white">
                {selectedChat.name}
              </h3>
              <p className="text-xs text-green-500">Online</p>
            </div>
          </div>
          {/* Right Icons */}
          <div className="ml-auto flex items-center gap-6 text-gray-500 cursor-pointer">
            <FaVideo
              onClick={handleVideoCall}
              className="cursor-pointer hover:text-blue-500"
            />

            <FaPhoneAlt
              onClick={handleAudioCall}
              className="cursor-pointer hover:text-blue-500"
            />

            <FaSearch className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-[#f7f8fc] dark:bg-[#0b141a]">
          {selectedChat.messages.map((msg, index) => {
            if (msg.type === "divider") {
              return (
                <div key={index} className="flex justify-center my-6">
                  <span className="text-xs text-gray-500 bg-white px-4 py-1 rounded-full shadow-sm">
                    {msg.label}
                  </span>
                </div>
              );
            }

            return (
              <div
                key={index}
                className={`mb-5 flex ${
                  msg.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div>
                  {/* TEXT MESSAGE */}
                  {msg.type === "text" && (
                    <div
                      className={`px-4 py-3 rounded-2xl max-w-[320px]
      ${
        msg.sender === "me"
          ? "bg-[#5b8df7] text-white"
          : "bg-white dark:bg-[#2a3942] text-black dark:text-white shadow-sm"
      }`}
                    >
                      <p className="text-sm">{msg.text}</p>

                      <div
                        className={`text-[10px] mt-1 text-right ${
                          msg.sender === "me"
                            ? "text-white/70"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {msg.time}
                      </div>
                    </div>
                  )}

                  {/* IMAGE MESSAGE */}
                  {msg.type === "image" && (
                    <>
                      <img
                        src={msg.image}
                        alt=""
                        className="w-[220px] rounded-2xl shadow"
                      />

                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs text-orange-500">
                          {msg.reaction}
                        </span>

                        <span className="text-xs text-gray-500">
                          {msg.time}
                        </span>
                      </div>
                    </>
                  )}

                  {/* FILE MESSAGE */}
                  {msg.type === "file" && (
                    <div className="bg-white dark:bg-[#202c33] text-black dark:text-white rounded-xl shadow-sm p-4 w-[220px]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">📄</div>

                          <div>
                            <p className="text-sm font-medium text-black dark:text-white">
                              {msg.fileName}
                            </p>
                          </div>
                        </div>

                        <button>⬇</button>
                      </div>

                      <div className="text-[10px] text-right mt-2 text-gray-500">
                        {msg.time}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* Bottom Input */}
        <div className="bg-white dark:bg-[#0b141a] border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center gap-3">
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
              placeholder="Write a message..."
              className="flex-1 min-w-0 h-12 border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2a3942] text-black dark:text-white rounded-xl px-4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
            />

            <button
              onClick={handleSendMessage}
              className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
            >
              <Send size={18} className="cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
      {/* AUDIO CALL MODAL */}
      {showCallModal && (
        <div className="fixed top-6 right-6 z-50 ">
          <div className="w-[520px] h-[395px] bg-[#f7f7f7] rounded-[30px] p-10 text-center relative shadow-2xl">
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
                    src={selectedChat.image}
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
                    src={selectedChat?.avatar}
                    alt=""
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </div>
              </div>
              {/* Name */}
              <h3 className="mt-6 text-[20px] font-semibold text-gray-800">
                {selectedChat?.name}
              </h3>

              {/* Status */}
              <p className="text-sm text-gray-500 dark:text-white mt-1">
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
              {selectedChat?.image ? (
                <img
                  /* Using a different placeholder avatar so it's visually distinct from the background feed */
                  src={selectedChat.image}
                  alt="Self Camera Feed"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-xs text-zinc-500 font-medium text-black dark:text-white">
                  Camera Off
                </span>
              )}
            </div>

            {/* Main Full Screen Card (Cleaned container tags) */}
            <div className="w-full h-full bg-zinc-900 flex items-center justify-center absolute inset-0 overflow-hidden rounded-[35px] z-10">
              {selectedChat?.avatar ? (
                <img
                  src={selectedChat.avatar}
                  alt="Main Video Feed"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-zinc-500">
                  <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center text-xl font-semibold text-zinc-400 border border-zinc-700 animate-pulse">
                    {selectedChat?.name?.charAt(0) || "P"}
                  </div>
                  <p className="text-sm tracking-wide font-medium text-black dark:text-white text-zinc-400">
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
      {/* RIGHT PROFILE PANEL */}
      {showProfilePanel && (
        <div className="w-[340px] h-full bg-[#f8f8f8] dark:bg-[#0b141a] border-l border-gray-200 dark:border-gray-700 flex flex-col shrink-0">
          {/* TOP HEADER */}
          <div className="h-[76px] px-5 border border-gray-200 dark:border-gray-700 flex items-center justify-between shrink-0">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Contact info
            </p>

            <button onClick={() => setShowProfilePanel(false)}>
              <IoClose size={22} />
            </button>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div className="flex-1 overflow-y-auto">
            {/* Profile */}
            <div className="flex flex-col items-center py-8 border-b border-gray-200 dark:border-gray-700 ">
              <img
                src={selectedChat.image}
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />

              <h2 className="mt-2 text-[16px] font-semibold text-black dark:text-white">
                {selectedChat.name}
              </h2>

              <p className="text-sm dark:text-white text-gray-500 mt-1">
                +91 6265 081 928
              </p>

              {/* Actions */}
              <div className="flex items-center gap-14 mt-4">
                <div className="flex flex-col items-center text-gray-700 dark:text-white cursor-pointer">
                  <FaVideo size={18} onClick={handleVideoCall} />
                  <p className="text-xs mt-2">Video</p>
                </div>

                <div className="flex flex-col items-center text-gray-700 dark:text-white cursor-pointer">
                  <FaPhone size={18} onClick={handleAudioCall} />
                  <p className="text-xs mt-2">Voicee</p>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="px-5 py-5 border-b border-gray-200 dark:border-gray-700  ark:border-[#374045]">
              <p className="text-xs text-gray-500 dark:text-white mb-3">
                About
              </p>

              <p className="text-sm text-black dark:text-white">
                Hi there, I am using chat app
              </p>
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
                <p className="text-sm font-medium text-black dark:text-white">
                  Media, links and docs
                </p>

                <div className="flex items-center gap-2">
                  <span className="text-sm dark:text-white text-gray-500 dark:text-gray-400">
                    201
                  </span>

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
                onClick={() => setShowStarredPanel(true)}
                className="h-[60px] flex items-center justify-between border-b border-gray-300 cursor-pointer dark:border-gray-700 "
              >
                <p className="text-sm dark:text-white">⭐ Starred Messages</p>

                <span>›</span>
              </div>
              {showStarredPanel && (
                <div className="fixed top-0 right-0 w-[340px] bottom-0 h-screen bg-[#f8f8f8] dark:bg-[#0b141a] dark:text-white z-[70] border-l border-gray-200 flex flex-col">
                  {/* Header */}
                  <div className="h-[76px] px-5 border border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-3 cursor-pointer">
                      <IoClose
                        size={20}
                        className="text-gray-700 dark:text-white"
                        onClick={() => {
                          setShowStarredPanel(false);
                          setShowProfilePanel(true);
                        }}
                      />
                      <h2 className="font-medium text-black dark:text-white">
                        Starred Messages
                      </h2>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    <p className="text-xs text-gray-500">27th Oct 22</p>
                    <div className="bg-white dark:bg-[#2a3942] text-black dark:text-white rounded-xl p-3 flex items-center gap-3 shadow w-fit">
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

                      <span className="text-sm dark:text-white">
                        Abstract.png
                      </span>

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

              <div className="h-[60px] flex items-center justify-between border-b border-gray-300 dark:border-gray-700 ">
                <p className="text-sm text-black dark:text-white">
                  🔕 Mute Notifications
                </p>

                <div className="w-10 h-5 bg-[#5d95ff] rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-[2px] right-[2px]"></div>
                </div>
              </div>
            </div>

            {/* Group */}
            <div className="px-5 py-5 border-b border-gray-300 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-white mb-4">
                1 group in common
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-sm font-semibold text-black dark:text-white">
                    Camel's Gang
                  </h3>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Owl, Parrot, Rabbit , You
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BUTTONS */}
          <div className="p-5 border-t border-gray-200 dark:border-gray-700 bg-white dark:border-gray-700 dark:bg-[#202c33] shrink-0">
            <div className="flex items-center gap-3">
              {/* Block */}
              <button className="flex-1 h-[48px] rounded-xl border border-[#5d95ff] bg-[#f5f9ff] dark:bg-[#2a3942] text-[#5d95ff] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#edf4ff] dark:hover:bg-[#344854] transition">
                Block
              </button>

              {/* Delete */}
              <button className="flex-1 h-[48px] rounded-xl border border-[#ff5d5d] bg-[#fff5f5] dark:bg-[#2a3942] text-[#ff5d5d] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#ffeeee] dark:hover:bg-[#344854] transition">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {showMediaPanel && (
        <div className="w-[340px] h-full bg-[#f8f8f8] dark:bg-[#0b141a] border-l border-gray-200 dark:border-gray-700 flex flex-col shrink-0">
          <div className="h-[76px] px-5 border border-gray-200 dark:bg-[#0b141a] dark:border-gray-700 flex items-center justify-between">
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
          <div className="flex border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b141a]">
            <button
              onClick={() => setActiveTab("media")}
              className={`flex-1 py-4 ${
                activeTab === "media"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Media
            </button>

            <button
              onClick={() => setActiveTab("links")}
              className={`flex-1 py-4 ${
                activeTab === "links"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Links
            </button>

            <button
              onClick={() => setActiveTab("docs")}
              className={`flex-1 py-4 ${
                activeTab === "docs"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600 dark:text-gray-300"
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
                    className="bg-white dark:bg-[#2a3942] rounded-xl p-3 border border-gray-100 dark:border-gray-700 shadow-sm flex gap-3"
                  >
                    <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                      🔗
                    </div>

                    <div className="flex-1">
                      <p className="text-xs text-gray-500 truncate">
                        https://codingmonk.in/blogs
                      </p>

                      <p className="text-blue-500 text-sm font-medium text-black dark:text-white mt-1">
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
                    className="bg-white dark:bg-[#2a3942] dark:text-white rounded-xl p-3 border border-gray-100 dark:border-gray-700 shadow-sm"
                  >
                    <div className="h-28 bg-gray-200 rounded-lg mb-3"></div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>{doc.endsWith(".pdf") ? "📄" : "📊"}</span>

                        <span className="text-sm dark:text-white">{doc}</span>
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
