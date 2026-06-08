//import { useState } from "react";
//import Budgie from "../../assets/images/Budgie.png";
import Group3 from "../../assets/images/Group 3.png";
import { Link } from "react-router-dom";

//import {
//  FaCommentDots,
//  FaUserFriends,
//  FaPhoneAlt,
//  FaCog,
//} from "react-icons/fa";

import { IoArrowBack } from "react-icons/io5";
import Sidebar from "../sidebar/Sidebar";

function ProfileCard() {
  //const [isMuted, setIsMuted] = useState(true);
  return (
    <div className="h-screen bg-[#f4f5f9] flex overflow-hidden">
      {/* Sidebar */}
    
      <Sidebar/>
      {/* Profile Section */}
      <div className="app-page min-h-screen w-[320px] dark:border-gray-700 bg-[#f7f8fc] border-gray-300 border-r px-6 py-6 overflow-auto dark:bg-[#0b141a]">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <IoArrowBack className="text-2xl text-gray-600 cursor-pointer dark:text-white" />

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <img
            src="https://i.pravatar.cc/150"
            alt="profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        {/* Name */}
        <div className="mb-5">
          <label className="text-sm text-blue-500 block mb-1">Name</label>

          <input
            type="text"
            defaultValue="Shreyansh shah"
            className="w-full border border-blue-400 rounded-md px-4 py-3 outline-none bg-transparent"
          />

          <p className="text-xs text-gray-500 mt-2 dark:text-white">
            This name is visible to your contacts
          </p>
        </div>

        {/* About */}
        <div className="mb-8">
          <label className="text-sm text-gray-400 block mb-1 dark:text-white">About</label>

          <textarea
            rows="4"
            defaultValue="Hey there, I am learning from coding monk"
            className="w-full border border-gray-300 rounded-md px-4 py-2  outline-none resize-none bg-transparent"
          ></textarea>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button className="border border-blue-400 text-blue-500 px-10 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
            Save
          </button>
        </div>
      </div>

      {/* Right Empty Chat Area */}
      <div className="flex-1 flex flex-col items-center justify-center dark:bg-[#0b141a]">
        <div className="flex flex-col items-center">
          <img src={Group3} alt="empty" className="w-[220px] mb-6" />

          <p className="text-gray-800 font-medium dark:text-white">
            Select a conversation or start a{" "}
            <Link to="/chat">
              <span className="text-blue-500 cursor-pointer">new one</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
