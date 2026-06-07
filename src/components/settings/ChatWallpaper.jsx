import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import Sidebar from "../sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

function ChatWallpaper() {
  const navigate = useNavigate();

  const [selectedWallpaper, setSelectedWallpaper] =
    useState("#5B548C");

  const wallpapers = [
    "#D9D9D9",
    "#0D2729",
    "#2F6848",

    "#338A5A",
    "#275C7D",
    "#C18282",

    "#A89C9C",
    "#24000A",
    "#486400",

    "#B04F81",
    "#5AA287",
    "#CC8151",

    "#B4A8D4",
    "#002715",
    "#C89A9A",

    "#333333",
    "#A11F8A",
    "#5B548C",

    "#5DB88F",
    "#986128",
    "#342D81",
  ];

  return (
    <div className="app-page min-h-screen flex h-screen bg-[#f4f5f8]">

      {/* Sidebar */}
      <Sidebar />

      {/* Left Panel */}
      <div className="w-[320px] bg-[#f8f9fc] border-r dark:border-gray-700 border-gray-200 dark:bg-[#0b141a] flex flex-col">

        {/* Header */}
        <div className="h-[60px] px-5 flex items-center gap-4">
          <IoArrowBack
            size={20}
            className="cursor-pointer text-gray-700 dark:text-white"
            onClick={() => navigate(-1)}
          />

          <h1 className="text-[25px] font-semibold text-[#111827] dark:text-white">
            Set Chat Wallpaper
          </h1>
        </div>

        {/* Enable Doodle */}
        <div className="px-5 mt-5 flex items-center justify-between">
          <span className="text-[13px] text-gray-700 dark:text-white">
            Enable Talk Doodle
          </span>

          <input
            type="checkbox"
            defaultChecked
            className="accent-blue-500"
          />
        </div>

        {/* Color Palette */}
        <div className="px-5 mt-6 flex-1 overflow-y-auto">
          <div className="grid grid-cols-3 gap-1">

            <div
              onClick={() =>
                setSelectedWallpaper("#D9D9D9")
              }
              className="h-[58px] rounded cursor-pointer border flex items-center justify-center text-[11px]"
            >
              Default
            </div>

            {wallpapers.map((color, index) => (
              <div
                key={index}
                onClick={() =>
                  setSelectedWallpaper(color)
                }
                className="h-[58px] rounded cursor-pointer"
                style={{
                  backgroundColor: color,
                }}
              />
            ))}

          </div>
        </div>

      </div>

      {/* Preview Area */}
      <div className="flex-1 flex flex-col">

        <div className="h-[48px] bg-white border-b dark:border-gray-700 dark:bg-[#0b141a] border-gray-200 flex items-center justify-center">
          <h2 className="text-[15px] font-semibold">
            Wallpaper Preview
          </h2>
        </div>

        <div
          className="flex-1 transition-all duration-300"
          style={{
            backgroundColor: selectedWallpaper,
          }}
        />

      </div>

    </div>
  );
}

export default ChatWallpaper;