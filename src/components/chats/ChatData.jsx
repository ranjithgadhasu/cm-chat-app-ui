export const chats = [
  {
    id: 1,
    name: "Pink Panda",
    lastSeen: "Online",
    time: "9:36",
    count: 2,

    image: "https://i.pravatar.cc/100?img=1",

    messages: [
      {
        id: 1,
        sender: "other",
        type: "text",
        text: "Hi 👋, How are ya ?",
        time: "9:12",
      },

      {
        id: 2,
        sender: "me",
        type: "text",
        text: "Hi 👋 Panda, not bad, u ?",
        time: "9:15",
      },

      {
        id: 3,
        sender: "me",
        type: "text",
        text: "Can you send me an abstract image?",
        time: "8:17",
      },

      {
        id: 4,
        sender: "other",
        type: "image",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475",
        time: "10:35",
      },

      {
        id: 5,
        sender: "me",
        type: "text",
        text: "Can you send it as file ?",
        time: "11:12",
      },

      {
        id: 6,
        sender: "other",
        type: "file",
        fileName: "Abstract.png",
        time: "11:25",
      },

      {
        id: 7,
        sender: "me",
        type: "text",
        text: "Thnx!",
        time: "11:28",
      },
    ],
  },

  {
    id: 2,
    name: "Dog Hat",
    lastSeen: "Yesterday",
    time: "9:36",
    count: 5,
    image: "https://i.pravatar.cc/100?img=2",

    messages: [
      {
        id: 1,
        sender: "other",
        type: "text",
        text: "Hello bro 🙂",
        time: "10:00",
      },
    ],
  },

  {
    id: 3,
    name: "Cute Turtle",
    lastSeen: "Online",
    time: "9:36",
    count: 3,

    image: "https://i.pravatar.cc/100?img=3",

    messages: [],
  },

  {
    id: 4,
    name: "Cool spirit",
    lastSeen: "Yesterday",
    time: "9:36",

    image: "https://i.pravatar.cc/100?img=4",

    messages: [],
  },

  {
    id: 5,
    name: "strange cat",
    lastSeen: "Offline",
    time: "9:36",

    image: "https://i.pravatar.cc/100?img=5",

    messages: [],
  },
];