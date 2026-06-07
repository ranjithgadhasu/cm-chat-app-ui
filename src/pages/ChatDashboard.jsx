import { useMemo, useState, useRef } from "react";
import {
  Search,
  Menu,
  Send,
  Paperclip,
  Star,
  Link as LinkIcon,
  FileText,
  ArrowLeft,
} from "lucide-react";
import { Bell } from "lucide-react";
import { CircleDashed } from "lucide-react";
import { FaPhoneAlt, FaVideo, FaSearch } from "react-icons/fa";
import GroupImage from "../assets/images/Group 3.png";
import { Link } from "react-router-dom";
import ArchiveBox from "../assets/icons/ArchiveBox.png";
import Sidebar from "../components/sidebar/Sidebar";

///*
//  ChatDashboard.jsx
//  Single-file WhatsApp/Telegram style dashboard.
//  Features:
//  - Empty state on load
//  - Dynamic chat selection
//  - Dynamic messages
//  - Send message
//  - Contact info panel
//  - Media / Links / Docs tabs
//  - Starred messages panel
//*/

const chatData = [
  {
    id: 1,
    name: "Pink Panda",
    avatar: "https://i.pravatar.cc/150?img=12",
    callImage: "https://i.pravatar.cc/150?img=15",

    phone: "+91 6265 081 928",
    about: "Hi there, I am using chat app",
    online: true,
    messages: [
      {
        id: 1,
        type: "text",
        sender: "other",
        text: "Hi 👋, How are ya ?",
        time: "0:12",
        starred: true,
      },
      {
        id: 2,
        type: "image",
        sender: "other",
        image: "https://picsum.photos/400/250",
        time: "10:35",
      },
      {
        id: 3,
        type: "file",
        sender: "other",
        fileName: "Abstract.png",
        time: "11:25",
      },
      {
        id: 4,
        type: "text",
        sender: "me",
        text: "Thnx!",
        time: "11:28",
        starred: true,
      },
    ],
    media: Array.from(
      { length: 9 },
      (_, i) => `https://picsum.photos/200?${i}`,
    ),
    links: ["https://codingmonk.in/blogs", "https://codingmonk.in/blogs"],
    docs: ["Booked Ticket.pdf", "Invoice.pdf", "Sales Report.xlsx"],
  },
  {
    id: 2,
    name: "Dog Hat",
    avatar: "https://i.pravatar.cc/150?img=13",
    callImage: "https://i.pravatar.cc/150?img=16",

    phone: "+91 999999999",
    about: "It's so quite outside 😊",

    online: true,
    messages: [
      { id: 1, type: "text", sender: "other", text: "Hello", time: "9:00" },
    ],
    media: [],
    links: [],
    docs: [],
  },
  {
    id: 3,
    name: "Leo Messi",
    avatar: "https://i.pravatar.cc/150?img=3",
    callImage: "https://i.pravatar.cc/150?img=17",

    phone: "+91 6265 081 928",
    about: "Hi there, I am using chat app",
    unread: 2,
    online: true,
    messages: [
      {
        id: 1,
        type: "text",
        sender: "other",
        text: "Hi 👋, How are ya ?",
        time: "0:12",
        starred: true,
      },
      {
        id: 2,
        type: "image",
        sender: "other",
        image: "https://picsum.photos/400/250",
        time: "10:35",
      },
      {
        id: 3,
        type: "file",
        sender: "other",
        fileName: "Abstract.png",
        time: "11:25",
      },
      {
        id: 4,
        type: "text",
        sender: "me",
        text: "Thnx!",
        time: "11:28",
        starred: true,
      },
    ],
    media: Array.from(
      { length: 9 },
      (_, i) => `https://picsum.photos/200?${i}`,
    ),
    links: ["https://codingmonk.in/blogs", "https://codingmonk.in/blogs"],
    docs: ["Booked Ticket.pdf", "Invoice.pdf", "Sales Report.xlsx"],
  },
  {
    id: 5,
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=2",
    callImage: "https://i.pravatar.cc/150?img=18",
    phone: "+91 6265 081 342",
    about: "Hi there, I am using chat app",
    online: true,
    messages: [
      {
        id: 1,
        type: "text",
        sender: "other",
        text: "Hi 👋, How are ya ?",
        time: "0:12",
        starred: true,
      },
      {
        id: 2,
        type: "image",
        sender: "other",
        image: "https://picsum.photos/400/250",
        time: "10:35",
      },
      {
        id: 3,
        type: "file",
        sender: "other",
        fileName: "Abstract.png",
        time: "11:25",
      },
      {
        id: 4,
        type: "text",
        sender: "me",
        text: "Thnx!",
        time: "11:28",
        starred: true,
      },
    ],
    media: Array.from(
      { length: 9 },
      (_, i) => `https://picsum.photos/200?${i}`,
    ),
    links: ["https://codingmonk.in/blogs", "https://codingmonk.in/blogs"],
    docs: ["Booked Ticket.pdf", "Invoice.pdf", "Sales Report.xlsx"],
  },
  {
    id: 6,
    name: "Jemson",
    avatar: "https://i.pravatar.cc/150?img=1",
    callImage: "https://i.pravatar.cc/150?img=19",
    phone: "+91 6265 081 928",
    about: "Hi there, I am using chat app",
    unread: 3,
    online: false,
    lastSeen: "last seen 5 min ago",
    messages: [
      {
        id: 1,
        type: "text",
        sender: "other",
        text: "Hi 👋, How are ya ?",
        time: "0:12",
        starred: true,
      },
      {
        id: 2,
        type: "image",
        sender: "other",
        image: "https://picsum.photos/400/250",
        time: "10:35",
      },
      {
        id: 3,
        type: "file",
        sender: "other",
        fileName: "Abstract.png",
        time: "11:25",
      },
      {
        id: 4,
        type: "text",
        sender: "me",
        text: "Thnx!",
        time: "11:28",
        starred: true,
      },
    ],
    media: Array.from(
      { length: 9 },
      (_, i) => `https://picsum.photos/200?${i}`,
    ),
    links: ["https://codingmonk.in/blogs", "https://codingmonk.in/blogs"],
    docs: ["Booked Ticket.pdf", "Invoice.pdf", "Sales Report.xlsx"],
  },
  {
    id: 8,
    name: "Buttman",
    avatar: "https://i.pravatar.cc/150?img=9",
    callImage: "https://i.pravatar.cc/150?img=20",
    phone: "+91 6265 081 928",
    about: "Hi there, I am using chat app",
    unread: 4,
    online: false,
    lastSeen: "last seen 30 min ago",
    messages: [
      {
        id: 1,
        type: "text",
        sender: "other",
        text: "Hi 👋, How are ya ?",
        time: "0:12",
        starred: true,
      },
      {
        id: 2,
        type: "image",
        sender: "other",
        image: "https://picsum.photos/400/250",
        time: "10:35",
      },
      {
        id: 3,
        type: "file",
        sender: "other",
        fileName: "Abstract.png",
        time: "11:25",
      },
      {
        id: 4,
        type: "text",
        sender: "me",
        text: "Thnx!",
        time: "11:28",
        starred: true,
      },
    ],
    media: Array.from(
      { length: 9 },
      (_, i) => `https://picsum.photos/200?${i}`,
    ),
    links: ["https://codingmonk.in/blogs", "https://codingmonk.in/blogs"],
    docs: ["Booked Ticket.pdf", "Invoice.pdf", "Sales Report.xlsx"],
  },
];

export default function ChatDashboard() {
  const [chats, setChats] = useState(chatData);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [message, setMessage] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [panel, setPanel] = useState("info");

  const [showCallModal, setShowCallModal] = useState(false);
  const [callStatus, setCallStatus] = useState("connecting");
  const [showVideoCallModal, setShowVideoCallModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  //const navigate = useNavigate();

  const selectedChat = useMemo(
    () => chats.find((c) => c.id === selectedChatId),
    [chats, selectedChatId],
  );

  const sendMessage = () => {
    if (!message.trim() || !selectedChat) return;
    setChats((prev) =>
      prev.map((c) =>
        c.id === selectedChat.id
          ? {
              ...c,
              messages: [
                ...c.messages,
                {
                  id: Date.now(),
                  type: "text",
                  sender: "me",
                  text: message,
                  time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                },
              ],
            }
          : c,
      ),
    );
    setMessage("");
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

  const filteredChats = useMemo(() => {
    return chats.filter((chat) =>
      chat.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [chats, searchTerm]);

  return (
    <div className="app-page min-h-screen h-screen flex bg-slate-100 ">
      <Sidebar />
      <div className="w-[300px] border app-border app-card dark:bg-[#0b141a] p-4 overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Chats</h1>

          <Link to="/updates">
            <CircleDashed className="text-2xl text-gray-500 dark:text-white cursor-pointer" />
          </Link>
        </div>
        <div className="relative mt-4">
          <Search className="absolute left-5 top-4 h-4 w-4 dark:text-white" />
          <input
            className="w-full h-12 rounded-2xl border-2 border-[#5b8cff] bg-transparent dark:bg-[#2a3942] text-black dark:text-white pl-11 pr-4 text-sm outline-none placeholder:text-[#7d92c2] dark:placeholder:text-gray-400"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Menu className="absolute right-3 top-3 h-4 w-4" />
        </div>
        <div className="flex items-center gap-6 mt-3">
          {/* Archived */}

          <Link
            to="/archive"
            className="flex items-center gap-2 text-blue-500 text-sm"
          >
            <img src={ArchiveBox} alt="" className="w-5 h-5 dark:invert" />

            <span className="text-[17px]">Archived</span>
          </Link>

          {/* Unread */}

          <Link className="text-blue-500 text-[17px] " to="/unread">
            Unread
          </Link>
        </div>
        <div className="border-b border-gray-300 dark:border-gray-700 mt-4 w-[250px]"></div>
        {/* Chat Title */}

        <h3 className="text-gray-900 dark:text-gray-400 text-[17px] mt-4 mb-4">Pinned</h3>

        <div className="mt-6 space-y-3">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => {
                setSelectedChatId(chat.id);
                setShowProfile(false);
              }}
              className={`p-3 rounded-2xl cursor-pointer ${
                selectedChatId === chat.id
                  ? "bg-blue-500 text-white"
                  : "bg-white dark:bg-[#202c33] text-gray-300dark:bg-[#202c33] dark:text-white"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center min-w-0">
                  {/* Avatar + Online Status */}
                  <div className="relative flex-shrink-0">
                    <img
                      src={chat.avatar}
                      alt={chat.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <span
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                        chat.online ? "bg-green-500" : "bg-gray-400"
                      }`}
                    />
                  </div>

                  {/* Name + Message */}
                  <div className="min-w-0">
                    <h4 className="font-semibold truncate">{chat.name}</h4>

                    <p className="text-xs text-gray-900 dark:text-gray-400 truncate max-w-[140px]">
                      {chat.about}
                    </p>
                  </div>
                </div>

                {/* Unread Count */}
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="text-[10px] text-gray-400">9:36</span>

                  {chat.unread > 0 && (
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium ${
                        selectedChatId === chat.id
                          ? "bg-white dark:bg-[#202c33] text-blue-500"
                          : "bg-white dark:bg-[#202c33] dark:bg-[#202c33] dark:text-white"
                      }`}
                    >
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex">
        {!selectedChat ? (
          <div className="flex-1 flex items-center justify-center dark:bg-[#0b141a]">
            <div className="text-center">
              <img src={GroupImage} alt="empty-state" className="w-[220px]" />
              <p className="mt-4">
                Select a conversation or start a{" "}
                <span className="text-[#5D8EFF] cursor-pointer">new one</span>
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 flex flex-col">
              <div className="h-16 bg-white  dark:bg-[#0b141a] border border-gray-300 dark:border-gray-700 flex items-center justify-between px-4">
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => setShowProfile((v) => !v)}
                >
                  <img
                    src={selectedChat.avatar}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{selectedChat.name}</div>
                    <div
                      className={`text-xs ${
                        selectedChat.online ? "text-green-500" : "text-gray-900 dark:text-gray-400"
                      }`}
                    >
                      {selectedChat.online ? "Online" : selectedChat.lastSeen}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FaVideo
                    size={18}
                    className="cursor-pointer hover:text-blue-500"
                    onClick={handleVideoCall}
                  />
                  <FaPhoneAlt
                    size={18}
                    className="cursor-pointer hover:text-blue-500"
                    onClick={handleAudioCall}
                  />
                  <FaSearch
                    size={18}
                    className="cursor-pointer hover:text-blue-500"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-auto p-6 space-y-4 bg-[#f5f6f8] dark:bg-[#0b141a]">
                {selectedChat.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={msg.sender === "me" ? "text-right" : ""}
                  >
                    {msg.type === "text" && (
                      <div
                        className={`inline-block px-4 py-2 rounded-2xl ${msg.sender === "me" ? "bg-blue-500 text-white" : "bg-white dark:bg-[#202c33]"}`}
                      >
                        {msg.text}
                      </div>
                    )}
                    {msg.type === "image" && (
                      <img src={msg.image} className="w-60 rounded-xl" />
                    )}
                    {msg.type === "file" && (
                      <div className="inline-block bg-white dark:bg-[#202c33] dark:bg-[#202c33] dark:text-white p-4 rounded-xl">
                        {msg.fileName}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-3 bg-white dark:bg-[#0b141a] border border-gray-300 dark:border-gray-700 flex gap-3">
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Write a message..."
                  className="flex-1 outline-none"
                />
                <button
                  onClick={sendMessage}
                  className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>

            {showProfile && (
              <div className="w-[360px] border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0b141a] dark:text-white overflow-auto">
                <div className="p-4 border border-gray-300 dark:border-gray-700 flex items-center gap-3 cursor-pointer">
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      if (panel === "info") {
                        setShowProfile(false);
                      } else {
                        setPanel("info");
                      }
                    }}
                  >
                    <ArrowLeft size={19} />
                  </button>
                  <span>Contact Info</span>
                </div>

                {panel === "info" && (
                  <div className="flex flex-col h-full">
                    {/* Profile */}
                    <div className="flex flex-col items-center pt-6">
                      <img
                        src={selectedChat.avatar}
                        alt=""
                        className="w-20 h-20 rounded-full object-cover"
                      />

                      <h3 className="mt-4 font-semibold text-[16px]">
                        {selectedChat.name}
                      </h3>

                      <p className="text-sm text-gray-900 dark:text-gray-400">
                        {selectedChat.phone}
                      </p>
                    </div>

                    {/* Audio / Voice */}
                    <div className="flex justify-center gap-14 mt-6 pb-6 border-b border-gray-300 dark:border-gray-700">
                      <div
                        className="flex flex-col items-center cursor-pointer"
                        onClick={handleVideoCall}
                      >
                        <FaVideo className="cursor-pointer dark:text-white hover:text-blue-500" />
                        <span className="text-xs mt-2">video</span>
                      </div>

                      <div
                        className="flex flex-col items-center cursor-pointer"
                        onClick={handleAudioCall}
                      >
                        <FaPhoneAlt className="cursor-pointer dark:text-white hover:text-blue-5" />
                        <span className="text-xs mt-2">Voice</span>
                      </div>
                    </div>

                    {/* About */}
                    <div className="px-4 py-5 border-b border-gray-300 dark:border-gray-700">
                      <h4 className="text-sm text-gray-900 dark:text-gray-400 mb-2">About</h4>

                      <p className="font-medium text-sm">
                        {selectedChat.about}
                      </p>
                    </div>

                    {/* Media */}
                    <div className="px-4 py-5 border-b border-gray-300 dark:border-gray-700">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setPanel("media")}
                      >
                        <span className="text-sm">Media, links and docs</span>

                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-900 dark:text-gray-400">201</span>
                          <span>›</span>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4">
                        {selectedChat.media.slice(0, 3).map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt=""
                            className="w-[70px] h-[55px] rounded object-cover"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Starred */}
                    <div
                      className="px-4 py-4 border-b border-gray-300 dark:border-gray-700 flex justify-between cursor-pointer"
                      onClick={() => setPanel("starred")}
                    >
                      <div className="flex items-center gap-3">
                        <Star size={16} />
                        <span className="text-sm">Starred Messages</span>
                      </div>

                      <span>›</span>
                    </div>

                    {/* Mute */}
                    <div className="px-4 py-4 border-b border-gray-300 dark:border-gray-700 flex justify-between">
                      <div className="flex items-center gap-3">
                        <Bell size={16} />
                        <span className="text-sm">Mute Notifications</span>
                      </div>

                      <div className="w-10 h-5 bg-[#5d95ff] rounded-full relative">
                        <div className="w-4 h-4 bg-white dark:bg-[#202c33] rounded-full absolute top-[2px] right-[2px]"></div>
                      </div>
                    </div>

                    {/* Common Group */}
                    <div className="px-4 py-4 border-b border-gray-300 dark:border-gray-700">
                      <p className="text-xs text-gray-900 dark:text-gray-400 mb-3">
                        1 group in common
                      </p>

                      <div className="flex items-center gap-3">
                        <img
                          src="https://i.pravatar.cc/100?img=60"
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />

                        <div>
                          <h4 className="font-medium text-sm">Camel's Gang</h4>

                          <p className="text-xs text-gray-900 dark:text-gray-400">
                            Owl, Parrot, Rabbit, You
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Buttons */}
                    <div className="mt-10 p-2 flex gap-3">
                      <button
                        className="flex-1 border border-blue-500 text-blue-500
        rounded-lg py-2 text-sm"
                      >
                        Block
                      </button>

                      <button
                        className="flex-1 border border-red-500 text-red-500
        rounded-lg py-2 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}

                {panel === "media" && (
                  <div>
                    <div className="flex border-b border-gray-300 dark:border-gray-700">
                      <button
                        className="flex-1 p-3"
                        onClick={() => setPanel("media")}
                      >
                        Media
                      </button>
                      <button
                        className="flex-1 p-3"
                        onClick={() => setPanel("links")}
                      >
                        Links
                      </button>
                      <button
                        className="flex-1 p-3"
                        onClick={() => setPanel("docs")}
                      >
                        Docs
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-2 p-3">
                      {selectedChat.media.map((m, i) => (
                        <img
                          key={i}
                          src={m}
                          className="h-20 w-full object-cover rounded"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {panel === "links" && (
                  <div>
                    <div className="flex border-b border-gray-300 dark:border-gray-700">
                      <button
                        className="flex-1 p-3"
                        onClick={() => setPanel("media")}
                      >
                        Media
                      </button>
                      <button
                        className="flex-1 p-3"
                        onClick={() => setPanel("links")}
                      >
                        Links
                      </button>
                      <button
                        className="flex-1 p-3"
                        onClick={() => setPanel("docs")}
                      >
                        Docs
                      </button>
                    </div>
                    <div className="p-3 space-y-3">
                      {selectedChat.links.map((l, i) => (
                        <div key={i} className="p-3 border rounded flex gap-2">
                          <LinkIcon size={18} />
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {panel === "docs" && (
                  <div>
                    <div className="flex border-b border-gray-300 dark:border-gray-700">
                      <button
                        className="flex-1 p-3"
                        onClick={() => setPanel("media")}
                      >
                        Media
                      </button>
                      <button
                        className="flex-1 p-3"
                        onClick={() => setPanel("links")}
                      >
                        Links
                      </button>
                      <button
                        className="flex-1 p-3"
                        onClick={() => setPanel("docs")}
                      >
                        Docs
                      </button>
                    </div>
                    <div className="p-3 space-y-3">
                      {selectedChat.docs.map((d, i) => (
                        <div
                          key={i}
                          className="p-3 border rounded flex justify-between"
                        >
                          <span>{d}</span>
                          <FileText size={18} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {panel === "starred" && (
                  <div className="p-3">
                    {selectedChat.messages
                      .filter((m) => m.starred)
                      .map((m) => (
                        <div
                          key={m.id}
                          className="mb-3 p-3 bg-slate-100 rounded bg-white dark:bg-[#2a3942] dark:text-white"
                        >
                          {m.text}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
      {/* AUDIO CALL MODAL */}
      {showCallModal && (
        <div className="fixed top-6 right-6 z-50 ">
          <div className="w-[520px] h-[395px] bg-[#f7f7f7] dark:bg-[#0b141a] rounded-[30px] p-10 text-center relative shadow-2xl">
            {/* Close */}
            <button
              onClick={() => setShowCallModal(false)}
              className="absolute top-5 right-5 text-gray-900 dark:text-gray-400 text-xl"
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
                    src={selectedChat?.avatar}
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
                    src={selectedChat?.callImage}
                    alt=""
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </div>
              </div>
              {/* Name */}
              <h3 className="mt-6 text-[20px] dark:text-white font-semibold text-gray-800">
                {selectedChat?.name}
              </h3>

              {/* Status */}
              <p className="text-sm text-gray-900 dark:text-gray-400 mt-1">
                {callStatus === "connecting" ? "Connecting..." : ""}
              </p>
            </div>
            {/* Status */}
            {callStatus === "connecting" ? (
              <h5 className="text-1xl font-semibold text-gray-900 dark:text-gray-400 mb-8">
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
          <div className="w-[700px] h-[450px] rounded-[35px] overflow-hidden relative shadow-2xl bg-zinc-950 border border-zinc-800">
            {/* Close Button */}
            <button
              onClick={() => setShowVideoCallModal(false)}
              className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-md hover:bg-black/60 transition"
            >
              ✕
            </button>

            {/* Main Full Screen Card */}
            <div className="w-full h-full bg-zinc-900 flex items-center justify-center relative overflow-hidden rounded-[35px]">
              {selectedChat?.callImage ? (
                <img
                  src={selectedChat.callImage}
                  alt="Main Video Feed"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-zinc-500">
                  <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center text-xl font-semibold text-zinc-400 border border-zinc-700 animate-pulse">
                    {selectedChat?.name?.charAt(0) || "P"}
                  </div>
                  <p className="text-sm tracking-wide font-medium text-zinc-400">
                    Connecting video feed...
                  </p>
                </div>
              )}
            </div>

            {/* Small Self Camera Card */}
            <div className="absolute top-5 right-20 w-[160px] h-[100px] rounded-[20px] overflow-hidden border-2 border-zinc-700 bg-zinc-800 shadow-2xl z-40 flex items-center justify-center">
              {selectedChat?.avatar ? (
                <img
                  src={selectedChat.avatar}
                  alt="Self Camera Feed"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-xs text-zinc-500 font-medium">
                  Camera Off
                </span>
              )}
            </div>

            {/* Bottom Call Button */}
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
    </div>
  );
}
