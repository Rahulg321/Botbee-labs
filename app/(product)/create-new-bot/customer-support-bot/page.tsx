"use client";

import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Send } from "lucide-react";
import { Message } from "@/types/chat";
import { initialMessages } from "@/data/initial-messages";
import { MessageSuggestions } from "@/components/message-suggestions";

interface ChatState {
  messages: Message[];
}

export default function Chat() {
  const [state, setState] = useState<ChatState>({
    messages: initialMessages,
  });
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: nanoid(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    const assistantMessage: Message = {
      id: nanoid(),
      content: `I understand you said: "${input}". How can I help you further?`,
      role: "assistant",
      timestamp: new Date(),
    };

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage, assistantMessage],
    }));

    setInput("");
  };

  const handleSuggestionSelect = (suggestion: string) => {
    setInput(suggestion);
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [state.messages]);

  return (
    <div className="flex h-screen bg-background">
      <Card className="flex-1 flex flex-col max-w-4xl mx-auto">
        <CardContent className="flex-1 overflow-auto p-4 space-y-4">
          {state.messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.role === "assistant" ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <Avatar className="h-8 w-8">
                {message.role === "assistant" ? (
                  <>
                    <AvatarImage src="/placeholder.svg" alt="AI Assistant" />
                    <AvatarFallback>AI</AvatarFallback>
                  </>
                ) : (
                  <>
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </>
                )}
              </Avatar>
              <div
                className={`rounded-lg px-4 py-2 max-w-[80%] ${
                  message.role === "assistant"
                    ? "bg-muted"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </CardContent>
        <div className="p-4 border-t">
          <MessageSuggestions onSelect={handleSuggestionSelect} />
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write your message"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1"
            />
            <Button variant="ghost" size="icon">
              <Mic className="h-4 w-4" />
            </Button>
            <Button onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
