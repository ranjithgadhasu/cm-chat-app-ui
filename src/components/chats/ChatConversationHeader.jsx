import { useState } from "react";
import { FaPhoneAlt, FaVideo, FaSearch, FaPhone } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function ChatConversationHeader({
  selectedChat,
  handleAudioCall,
  handleVideoCall,
}) {
  const [showProfilePanel, setShowProfilePanel] = useState(false);
  const [showMediaPanel, setShowMediaPanel] = useState(false);
  const [activeTab, setActiveTab] = useState("media");
  const [showStarredPanel, setShowStarredPanel] = useState(false);

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

  return (
    <div className="">
      {/* HEADER */}
      <div className="h-20 bg-white border-b border-gray-300 px-6 flex items-center justify-between shrink-0">
        {/* Left */}
        <div
          onClick={() => setShowProfilePanel(true)}
          className="flex items-center gap-4 cursor-pointer"
        >
          <img
            src={selectedChat.image}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h2 className="font-semibold text-gray-900">{selectedChat.name}</h2>

            <p className="text-sm text-gray-400">{selectedChat.lastSeen}</p>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6 text-gray-500">
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

      {/* RIGHT PROFILE PANEL */}
      {showProfilePanel && (
        <div className="w-[340px] fixed  top-0 right-0 h-full bg-[#f8f8f8] border-l border-gray-200 flex flex-col shadow-2xl">
          {/* TOP HEADER */}
          <div className="h-[76px] px-5 border-b border-gray-200 flex items-center justify-between shrink-0">
            <p className="text-sm text-gray-600">Contact info</p>

            <button onClick={() => setShowProfilePanel(false)}>
              <IoClose size={22} />
            </button>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div className="flex-1 overflow-y-auto">
            {/* Profile */}
            <div className="flex flex-col items-center py-8 border-b border-gray-200">
              <img
                src={selectedChat.image}
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />

              <h2 className="mt-2 text-[16px] font-semibold">
                {selectedChat.name}
              </h2>

              <p className="text-sm text-gray-500 mt-1">+91 6265 081 928</p>

              {/* Actions */}
              <div className="flex items-center gap-14 mt-4">
                <div className="flex flex-col items-center text-gray-700">
                  <FaVideo size={18} />
                  <p className="text-xs mt-2">Video</p>
                </div>

                <div className="flex flex-col items-center text-gray-700">
                  <FaPhone size={18} />
                  <p className="text-xs mt-2">Voice</p>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="px-5 py-5 border-b border-gray-200">
              <p className="text-xs text-gray-500 mb-3">About</p>

              <p className="text-sm">Hi there, I am using chat app</p>
            </div>

            {/* Media */}
            <div className="px-5 py-5 border-b border-gray-200">
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
                className="h-[60px] flex items-center justify-between border-b border-gray-200 cursor-pointer"
              >
                <p className="text-sm">⭐ Starred Messages</p>

                <span>›</span>
              </div>
              {showStarredPanel && (
                <div className="fixed top-0 right-0 w-[340px] h-screen bg-[#f8f8f8] z-[70] border-l border-gray-200 flex flex-col">
                  {/* Header */}
                  <div className="h-[76px] px-5 border-b border-gray-200 flex items-center justify-between">
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

                    <div className="bg-white rounded-2xl p-3 w-fit shadow">
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
                        onClick={() => {
                          setShowStarredPanel(false);
                          setShowProfilePanel(true);
                        }}
                        className="text-lg cursor-pointer "
                      >
                        ⬇️
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="h-[60px] flex items-center justify-between border-b border-gray-200">
                <p className="text-sm">🔕 Mute Notifications</p>

                <div className="w-10 h-5 bg-[#5d95ff] rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-[2px] right-[2px]"></div>
                </div>
              </div>
            </div>

            {/* Group */}
            <div className="px-5 py-5 border-b border-gray-200">
              <p className="text-xs text-gray-500 mb-4">1 group in common</p>

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
          <div className="p-5 border-t border-gray-200 bg-white shrink-0">
            <div className="flex items-center gap-3">
              {/* Block */}
              <button className="flex-1 h-[48px] rounded-xl border border-[#5d95ff] bg-[#f5f9ff] text-[#5d95ff] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#edf4ff] transition">
                <span className="text-base">🚫</span>
                Block
              </button>

              {/* Delete */}
              <button className="flex-1 h-[48px] rounded-xl border border-[#ff5d5d] bg-[#fff5f5] text-[#ff5d5d] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#ffeeee] transition">
                <span className="text-base">🗑</span>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {showMediaPanel && (
        <div className="fixed top-0 right-0 w-[340px] h-screen bg-[#f8f8f8] border-l border-gray-200 flex flex-col z-[80] shadow-2xl">
          <div className="h-[76px] px-5 border-b border-gray-200 flex items-center justify-between">
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

          <div className="flex border-b border-gray-200 bg-white">
            <button
              onClick={() => setActiveTab("media")}
              className={`flex-1 py-4 ${
                activeTab === "media"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600"
              }`}
            >
              Media
            </button>

            <button
              onClick={() => setActiveTab("links")}
              className={`flex-1 py-4 ${
                activeTab === "links"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600"
              }`}
            >
              Links
            </button>

            <button
              onClick={() => setActiveTab("docs")}
              className={`flex-1 py-4 ${
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

export default ChatConversationHeader;
