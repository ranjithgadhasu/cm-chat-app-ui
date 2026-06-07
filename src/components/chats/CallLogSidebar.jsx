import { FaSearch, FaPhoneAlt, FaVideo } from "react-icons/fa";

function CallLogSidebar({   chats,
  setSelectedChat,
  searchTerm,
  setSearchTerm, }) {




  const filteredChats = chats.filter((chat) =>
  chat.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="app-page min-h-screen w-[320px] bg-[#f7f8fc] border-gray-300 border-r px-5 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-gray-900">Call Log</h1>
      </div>

      {/* Search */}
      <div className="bg-[#eef2fb] rounded-xl px-4 py-3 flex items-center gap-3 mb-6">
        <FaSearch className="text-gray-400" />

      <input
  type="text"
  placeholder="Search"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="bg-transparent outline-none text-sm w-full"
/>
      </div>

      {/* New Conversation */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-blue-500 text-sm cursor-pointer">
          Start new conversation
        </p>

        <FaPhoneAlt className="text-blue-500 cursor-pointer" />
      </div>

      <div className="border-b border-gray-300 mb-5"></div>

      {/* Call Users */}
      <div className="space-y-4">
        { filteredChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setSelectedChat(chat)}
            className="bg-white rounded-2xl p-3 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <img
                src={chat.image}
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h2 className="font-semibold text-sm">{chat.name}</h2>

                <p className="text-xs text-gray-400 mt-1">Yesterday, 16:53</p>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4 text-green-500">
              <FaPhoneAlt className="cursor-pointer" />

              <FaVideo className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CallLogSidebar;
