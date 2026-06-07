import { FaSearch, FaPhoneAlt } from "react-icons/fa";

function CallLogHeader() {
  return (
    <div className="app-page min-h-screen">
      {/* Top */}
      <div className="flex items-center justify-between mb-6">

        <h1 className="text-4xl font-bold text-gray-900">
          Call Log
        </h1>
      </div>

      {/* Search */}
      <div className="bg-[#eef2fb] rounded-xl px-4 py-3 flex items-center justify-between mb-6">

        <div className="flex items-center gap-3 text-gray-400">

          <FaSearch />

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm w-full"
          />

        </div>

      </div>

      {/* Start Conversation */}
      <div className="flex items-center justify-between mb-5">

        <p className="text-blue-500 text-sm cursor-pointer">
          Start new conversation
        </p>

        <FaPhoneAlt className="text-blue-500 cursor-pointer" />

      </div>

      <div className="border-b border-gray-300 mb-5"></div>

    </div>
  );
}

export default CallLogHeader;