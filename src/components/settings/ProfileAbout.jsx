import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Sidebar from "../sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import GroupImage from "../../assets/images/Group 3.png";






const ProfileAbout = () => {
 
    
  const [selectedOption, setSelectedOption] = useState("Everyone");

  const options = ["Everyone", "My Contacts", "Nobody"];
  const navigate = useNavigate();

  return (
   <>
    <div className="app-page min-h-screen flex h-screen bg-[#F4F5F8]">
         <Sidebar />
      {/* Profile About Panel */}
     <div className="w-[320px] min-w-[250px] border-r border-[#E2E5EC] dark:border-gray-700 bg-[#F4F5F8] dark:bg-[#0b141a] flex flex-col h-full overflow-y-auto">
        {/* Header */}
        <div className="flex items-center gap-4 px-6 pt-5 shrink-0">
          <button
            onClick={() => navigate(-1)}
            className="text-[#555] hover:text-black transition-colors"
          >
            <ChevronLeft size={20} className="dark:text-white"/>
          </button>

          <h2 className="text-[25px] font-semibold text-[#1A1A1A] dark:text-white">
            Profile About
          </h2>
        </div>

        {/* Description */}
        <div className="px-4 mt-6">
          <p className="text-[16px] leading-[18px] text-[#7A97FF] dark:text-white">
           Who can see my about
          </p>
        </div>

        {/* Options */}
        <div className="mt-10">
          {options.map((option, index) => (
            <div key={option}>
              <div
                onClick={() => setSelectedOption(option)}
                className="flex items-center px-5 py-5 cursor-pointer"
              >
                {/* Custom Radio */}
                <div
                  className={`w-[14px] h-[14px] rounded-full border flex items-center justify-center ${
                    selectedOption === option
                      ? "border-[#5D8EFF]"
                      : "border-[#6B6B6B]"
                  }`}
                >
                  {selectedOption === option && (
                    <div className="w-[7px] h-[7px] rounded-full bg-[#5D8EFF]" />
                  )}
                </div>

                <span className="ml-5 text-[16px] text-[#4A4A4A] dark:text-white">
                  {option}
                </span>
              </div>

              {index !== options.length - 1 && (
                <div className="ml-[38px] mr-8 border-b dark:border-gray-700 border-[#D8DCE5]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center dark:bg-[#0b141a]">
        <img
          src={GroupImage}
          alt="empty-state"
          className="w-[210px] object-contain"
        />

        <p className="mt-10 text-[14px] text-[#222] dark:text-white">
          Select a conversation or start a{" "}
        <Link to="/chat">
              <span className="text-blue-500 ml-1 cursor-pointer ">new one</span>
            </Link>
        </p>
      </div>
    </div>
   </>
  );
};

export default ProfileAbout;