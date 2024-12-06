import { Message } from "../types/chat";

export const initialMessages: Message[] = [
  {
    id: "1",
    content: "Hello Assistant",
    role: "user",
    timestamp: new Date("2024-01-05T10:00:00"),
  },
  {
    id: "2",
    content: "Hi! How can I help you today? 👋",
    role: "assistant",
    timestamp: new Date("2024-01-05T10:00:05"),
  },
  {
    id: "3",
    content: "Give me some information on expert systems",
    role: "user",
    timestamp: new Date("2024-01-05T10:00:10"),
  },
  {
    id: "4",
    content:
      "Expert systems are computer programs that emulate decision-making of human experts. They use a knowledge base of facts and rules to solve complex problems.",
    role: "assistant",
    timestamp: new Date("2024-01-05T10:00:15"),
  },
];
