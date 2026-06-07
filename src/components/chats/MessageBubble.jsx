function MessageBubble({ text, sender }) {
  return (
    <div
      className={`app-page min-h-screen max-w-xs px-4 py-3 rounded-2xl text-sm ${
        sender === "me"
          ? "bg-blue-500 text-white ml-auto"
          : "bg-white text-gray-800"
      }`}
    >
      {text}
    </div>
  );
}

export default MessageBubble;
