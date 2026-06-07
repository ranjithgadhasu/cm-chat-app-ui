import { useState } from "react";
import { ChevronLeft, Plus, X } from "lucide-react";
import Sidebar from "../sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import GroupImage from "../../assets/images/Group 3.png";

const blockedUsers = [
  {
    id: 1,
    name: "Dinesh",
    status: "Enjoy life to the fullest",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 2,
    name: "Dog Hat",
    status: "You can call me at random...",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 3,
    name: "Cute Turtle",
    status: "Almost there",
    avatar: "https://i.pravatar.cc/100?img=13",
  },
  {
    id: 4,
    name: "Cool spirit",
    status: "Fiddling with ideas",
    avatar: "https://i.pravatar.cc/100?img=14",
  },
  {
    id: 5,
    name: "strange cat",
    status: "Omw to discover myself",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
];

function BlockedContacts() {
  const navigate = useNavigate();
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = blockedUsers.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="app-page min-h-screen flex h-screen bg-[#F4F5F8] dark:bg-[#0b141a]">
      {/* Sidebar */}
      <Sidebar />

      {/* Left Panel */}
      <div className="w-[320px] min-w-[320px] bg-[#F4F5F8] border-r dark:bg-[#0b141a] dark:border-gray-700 border-[#E3E6ED]">
        {/* Header */}
        <div className="flex items-center gap-4 px-5 pt-5">
          <button
            onClick={() => navigate("/privacy")}
            className="text-gray-600"
          >
            <ChevronLeft size={20} className="dark:text-white" />
          </button>

          <h2 className="text-[24px] font-semibold text-[#1F2937] dark:text-white">
            Blocked Contacts
          </h2>
        </div>

        {/* Add Contact */}
        <div className="px-4 mt-6">
          <div className="flex items-center justify-between pb-3 dark:border-gray-700 border-b border-[#D9DDE5]">
            <span
              className="text-[14px] text-[#5D8EFF] font-medium cursor-pointer dark:text-white"
              onClick={() => setShowBlockModal(true)}
            >
              Block New Contact
            </span>

            <Plus
              size={20}
              className="text-[#5D8EFF] cursor-pointer dark:text-white"
              onClick={() => setShowBlockModal(true)}
            />
          </div>
        </div>

        {/* Contact List */}
        <div className="px-4 mt-7 space-y-4 ">
          {blockedUsers.map((user) => (
            <div
              key={user.id}
              className="bg-[#F7F7F8] rounded-xl px-3 py-3 flex items-center justify-between shadow-sm dark:bg-[#1a1f2c]"
            >
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover dark:text-white"
                />

                <div>
                  <h4 className="text-[15px] font-semibold text-[#222] dark:text-white">
                    {user.name}
                  </h4>

                  <p className="text-[12px] text-gray-500 truncate max-w-[140px] dark:text-white">
                    {user.status}
                  </p>
                </div>
              </div>

              <button>
                <X
                  size={18}
                  className="text-gray-500 hover:text-red-500 dark:text-white"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <img src={GroupImage} alt="empty-state" className="w-[220px]" />

        <p className="mt-8 text-[14px] text-[#222] dark:text-white">
          Select a conversation or start a{" "}
          <Link to="/chat">
            <span className="text-blue-500 ml-1 cursor-pointer">new one</span>
          </Link>
        </p>
      </div>
      {showBlockModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="w-[420px] bg-white rounded-3xl shadow-xl p-6">
            {/* Header */}
            <div className="flex items-center gap-5 pb-4 border-b">
              <button
                onClick={() => setShowBlockModal(false)}
                className="text-gray-500"
              >
                ✕
              </button>

              <h2 className="text-xl font-semibold">Block New Contact</h2>
            </div>

            {/* Search */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-11 px-4 rounded-xl bg-[#EEF4FF] outline-none text-sm"
              />
            </div>

            {/* Contact List */}
            <div className="mt-6 max-h-[350px] overflow-y-auto">
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="flex items-center gap-4 py-3 cursor-pointer hover:bg-gray-50 rounded-lg px-2"
                >
                  <img
                    src={contact.avatar}
                    alt=""
                    className="w-11 h-11 rounded-full"
                  />

                  <div>
                    <h4 className="font-semibold text-[15px]">
                      {contact.name}
                    </h4>

                    <p className="text-xs text-gray-500">{contact.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlockedContacts;
