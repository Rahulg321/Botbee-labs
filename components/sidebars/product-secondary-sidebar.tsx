"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

// This is sample data - replace with your actual data
const llmOptions = [
  { value: "gpt-3.5-turbo", label: "GPT 3.5 Turbo" },
  { value: "gpt-4", label: "GPT 4" },
  { value: "claude-2", label: "Claude 2" },
];

const botOptions = [
  { value: "bot-x", label: "Bot X" },
  { value: "customer-support", label: "Customer Support Bot" },
  { value: "telegram", label: "Telegram Bot" },
];

interface ChatSidebarProps {
  className?: string;
  onLLMChange?: (value: string) => void;
  onBotChange?: (value: string) => void;
}

export default function ProductSecondarySidebar({
  className,
  onLLMChange,
  onBotChange,
}: ChatSidebarProps) {
  const [selectedLLM, setSelectedLLM] = React.useState(llmOptions[0].value);
  const [selectedBot, setSelectedBot] = React.useState(botOptions[0].value);

  const handleLLMChange = (value: string) => {
    setSelectedLLM(value);
    onLLMChange?.(value);
  };

  const handleBotChange = (value: string) => {
    setSelectedBot(value);
    onBotChange?.(value);
  };

  return (
    <aside
      className={`flex flex-col h-screen sticky top-0 border-r border-gray-200 bg-white ${className}`}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            LLM Selection
          </h3>
          <Select value={selectedLLM} onValueChange={handleLLMChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select LLM" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {llmOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Chatbot Selection
          </h3>
          <Select value={selectedBot} onValueChange={handleBotChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Bot" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {botOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Yesterday</h3>
          <div className="space-y-2">
            <div className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded cursor-pointer">
              Hello Assistant
            </div>
            <div className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded cursor-pointer">
              Give me some information on expert...
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start">
            Clear Conversation
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Export Chat
          </Button>
        </div>
      </div>
    </aside>
  );
}
