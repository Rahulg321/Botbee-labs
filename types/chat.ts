export interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  selectedModel: string;
  selectedBot: string;
}
