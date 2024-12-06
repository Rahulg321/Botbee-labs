"use client";

import { useState } from "react";
import { Copy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function UploadBot() {
  const [selectedMethod, setSelectedMethod] = useState<string>("bubble");

  const embedCode = `<script>window.danteEmbed = "https://dante-ai.com/embed/?kb_id=ab455133-2792-4800-a390-a049dfedd167&token=74196840-8f7e-4921-b10e-8cf4ce06180d&modeltype=gpt-3.5-turbo&mode=false&bubble=true&bubbleopen=false"</script><script src="https://dante-ai.com/bubble-embed.js"></script>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Upload Bot</h1>
      <Card className="bg-slate-50">
        <CardHeader>
          <CardTitle className="text-lg font-medium">
            Choose Sharing Method
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select value={selectedMethod} onValueChange={setSelectedMethod}>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select a sharing method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bubble">Chatbot Bubble</SelectItem>
              <SelectItem value="iframe">Chatbot iFrame (Embed)</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative">
            <Textarea
              value={embedCode}
              readOnly
              className="min-h-[100px] font-mono text-sm bg-white pr-12"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-2 right-2 hover:bg-slate-100"
              onClick={copyToClipboard}
            >
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy embed code</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
