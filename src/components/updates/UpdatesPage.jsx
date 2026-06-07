import { useState } from "react";
import {
  CircleDashed,
  Plus,
  ChevronLeft,
  ChevronRight,
  X,
  Send,
  Trash2,
} from "lucide-react";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";

const updatesData = {
  notSeen: [
    {
      id: 1,
      name: "Pink Panda (Me)",
      time: "20hr",
      image: "https://i.pravatar.cc/150?img=32",
      story:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop",
      active: true,
    },
    {
      id: 2,
      name: "Dog Hat",
      time: "3 min",
      image: "https://i.pravatar.cc/150?img=15",
      story:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  seen: [
    {
      id: 3,
      name: "Cute Turtle",
      time: "50 min",
      image: "https://i.pravatar.cc/150?img=25",
      story:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Cool spirit",
      time: "23 hr",
      image: "https://i.pravatar.cc/150?img=12",
      story:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop",
    },
  ],
};

export default function UpdatesPage() {
  const [selectedUpdate, setSelectedUpdate] = useState(null);

  return (
    <div className="app-page min-h-screen w-full h-screen bg-[#f5f5f5] flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Updates Panel */}
      <div className="w-[320px] bg-[#efefef] border-r  dark:bg-[#0b141a] border-gray-300 px-5 py-4 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Link to="/chat">
              {" "}
              <ChevronLeft size={22} />
            </Link>
            <h1 className="text-[34px] font-semibold dark:text-white">
              Updates
            </h1>
          </div>

          <button
            onClick={() => document.getElementById("storyUpload").click()}
          >
            <Plus size={24} className="cursor-pointer" />
          </button>
        </div>

        {/* Not Seen */}
        <div>
          <p className="text-[13px] text-gray-500 mb-4 dark:text-white">
            Not seen
          </p>

          <div className="flex flex-col gap-3">
            {updatesData.notSeen.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedUpdate(item)}
                className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition
                ${
                  selectedUpdate?.id === item.id
                    ? "bg-[#5d95ff] text-white"
                    : "bg-[#f5f5f5] dark:text-black"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-[#538844]"></div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">{item.name}</h3>

                    {item.active && <p className="text-xs opacity-90">Edit</p>}
                  </div>
                </div>

                <span className="text-xs opacity-80">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Seen */}
        <div className="mt-10">
          <p className="text-[13px] text-gray-500 mb-4 dark:text-white">Seen</p>

          <div className="flex flex-col gap-3">
            {updatesData.seen.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedUpdate(item)}
                className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition
                ${
                  selectedUpdate?.id === item.id
                    ? "bg-[#5d95ff] text-white"
                    : "bg-[#f5f5f5] dark:text-black"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <div className="absolute inset-0 rounded-full border-[2px] border-[#5ca049]"></div>
                  </div>

                  <h3 className="text-sm font-semibold">{item.name}</h3>
                </div>

                <span
                  className={`text-xs ${
                    selectedUpdate?.id === item.id
                      ? "text-white"
                      : "text-gray-500"
                  }`}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="flex-1 bg-[#f7f7f7] flex flex-col  dark:bg-[#0b141a] ">
        {!selectedUpdate ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-4 text-gray-700">
              <CircleDashed size={26} className="text-gray-500  dark:text-white" />

              <p className="text-sm font-medium dark:text-white">
                Click on an update to view
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Top */}
            <div className="h-[70px] border-b border-gray-200 flex items-center justify-between px-12">
              <h2 className="font-semibold text-[15px]">
                {selectedUpdate.name}
              </h2>

              <div className="flex items-center gap-5">
                <button>
                  <Trash2 size={16} />
                </button>

                <button onClick={() => setSelectedUpdate(null)}>
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Story Area */}
            <div className="flex-1 flex items-center justify-center relative px-10  dark:bg-[#0b141a]">
              {/* Left Arrow */}
              <button className="absolute left-12 text-gray-500">
                <ChevronLeft size={32} className="dark:text-white" />
              </button>

              {/* Story Card */}
              <div className="w-[320px] h-[480px] rounded-[20px] overflow-hidden relative shadow-xl bg-black">
                {/* Progress */}
                <div className="absolute top-4 left-4 right-4 flex gap-2 z-20">
                  <div className="h-[3px] flex-1 rounded-full bg-[#5d95ff]"></div>
                  <div className="h-[3px] flex-1 rounded-full bg-[#5d95ff]"></div>
                  <div className="h-[3px] flex-1 rounded-full bg-white/70"></div>
                </div>

                {/* Story Image */}
                <img
                  src={selectedUpdate.story}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Arrow */}
              <button className="absolute right-12 text-gray-500 dark:text-white">
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Bottom */}
            <div className="h-[90px] border-t border-gray-200  dark:border-gray-700 px-8 flex items-center justify-between bg-[#eef3ff]  dark:bg-[#0b141a]">
              {/* Left Section */}
              <div className="flex items-center ml-90 gap-4">
                <input type="file" id="storyUpload" className="hidden" />

                {/* Add Button */}
                <button
                  onClick={() => document.getElementById("storyUpload").click()}
                  className="w-[72px] h-[72px] ml-4 rounded-[12px] border border-[#5d95ff] bg-white flex items-center justify-center text-[#5d95ff] shadow-sm"
                >
                  <Plus size={22} />
                </button>

                {/* Users */}
                <div className="flex items-center gap-10">
                  <div className="relative">
                    <img
                      src="https://i.pravatar.cc/100?img=32"
                      alt=""
                      className="w-[76px] h-[76px] rounded-[14px] object-cover"
                    />

                    <button className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#1f2937] text-white text-[11px] flex items-center justify-center shadow">
                      ✕
                    </button>
                  </div>

                  <div className="relative">
                    <img
                      src="https://i.pravatar.cc/100?img=15"
                      alt=""
                      className="w-[76px] h-[76px] rounded-[14px] object-cover"
                    />

                    <button className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#1f2937] text-white text-[11px] flex items-center justify-center shadow">
                      ✕
                    </button>
                  </div>

                  <div className="relative">
                    <img
                      src="https://i.pravatar.cc/100?img=25"
                      alt=""
                      className="w-[76px] h-[76px] rounded-[14px] object-cover"
                    />

                    <button className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#1f2937] text-white text-[11px] flex items-center justify-center shadow">
                      ✕
                    </button>
                  </div>
                </div>
              </div>

              {/* Send */}
              <button className="w-[46px] h-[46px] rounded-[12px] bg-[#5d95ff] text-white flex items-center justify-center shadow-md hover:bg-[#4b84f5] transition">
                <Send size={18} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
