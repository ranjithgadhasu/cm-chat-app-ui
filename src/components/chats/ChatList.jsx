import ChatItem from "./ChatItem";

function ChatList({ chats, setSelectedChat }) {
  return (
    <div className="app-page min-h-screen flex flex-col gap-4">

      {chats.map((chat) => (

        <div
          key={chat.id}
          onClick={() => setSelectedChat(chat)}
        >

          <ChatItem chat={chat} />

        </div>
      ))}

    </div>
  );
}

export default ChatList;