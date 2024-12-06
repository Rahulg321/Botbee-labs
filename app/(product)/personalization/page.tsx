"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";

const personalities = [
  {
    value: "formal",
    label: "Formal and Professional",
    example:
      "Good morning and welcome to Botbee Labs Ltd. I am Bee, your dedicated assistant. How may I assist you today?",
  },
  {
    value: "friendly",
    label: "Fun and Approachable",
    example:
      "Hey there! 👋 I'm Bee from Botbee Labs, and I'm here to help make your day easier! What can I do for you?",
  },
  {
    value: "humorous",
    label: "Humorous and Fun",
    example:
      "Hey! I'm Bee, your AI sidekick from Botbee Labs! Ready to make some digital magic happen? What's buzzing? 🐝",
  },
  {
    value: "casual",
    label: "Casual and Relaxed",
    example:
      "Hi! I'm Bee from Botbee Labs. Let me know what you need help with!",
  },
  {
    value: "technical",
    label: "Technical and Precise",
    example:
      "Greetings. This is Bee, AI assistant v1.0 from Botbee Labs Ltd. Please specify your technical requirements.",
  },
];

export default function PersonalizationForm() {
  const [personality, setPersonality] = useState("formal");
  const [accuracyValue, setAccuracyValue] = useState([50]);

  const handlePersonalityChange = (value: string) => {
    setPersonality(value);
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-2xl font-semibold mb-6">Personalization</h1>

      <Card className="bg-slate-50">
        <CardContent className="p-6 space-y-8">
          <div className="space-y-4">
            <div>
              <h2 className="text-sm font-medium mb-2">Set Personality</h2>
              <Select
                value={personality}
                onValueChange={handlePersonalityChange}
              >
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Select personality" />
                </SelectTrigger>
                <SelectContent>
                  {personalities.map((p) => (
                    <SelectItem key={p.value} value={p.value}>
                      {p.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <h2 className="text-sm font-medium mb-2">Chatting Style</h2>
              <Textarea
                value={
                  personalities.find((p) => p.value === personality)?.example
                }
                className="min-h-[100px] bg-white"
                readOnly
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Accuracy</span>
                <span className="text-sm font-medium">Creativity</span>
              </div>
              <Slider
                value={accuracyValue}
                onValueChange={setAccuracyValue}
                max={100}
                step={1}
                className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between mt-6">
        <Button
          variant="outline"
          className="bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Upgrade
        </Button>
        <Button className="bg-indigo-600 hover:bg-indigo-700">Finish</Button>
      </div>
    </div>
  );
}
