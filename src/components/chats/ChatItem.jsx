function ChatItem({ chat }) {
  return (
    <div className="app-page min-h-screen bg-white rounded-2xl p-3 flex items-center justify-between cursor-pointer hover:shadow-md transition">

      <div className="flex items-center gap-3">

        <div className="relative">
          
          <img
            src={chat.image}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="w-3 h-3 bg-green-400 rounded-full border-2 border-white absolute bottom-0 right-0"></div>

        </div>

        <div>

          <h2 className="font-semibold text-sm text-gray-900">
            {chat.name}
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            {chat.message}
          </p>

        </div>
      </div>

      <div className="flex flex-col items-end gap-2">

        <span className="text-xs text-gray-400">
          {chat.time}
        </span>

        {chat.count > 0 && (
          <div className="w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center">
            {chat.count}
          </div>
        )}

      </div>
    </div>
  );
}

export default ChatItem;