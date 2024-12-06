"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SlidersHorizontal } from "lucide-react";
import ExportChatDialog from "@/components/dialog/export-chat-dialog";

interface User {
  id: string;
  name: string;
  email: string;
  conversations: number;
}

const users: User[] = [
  { id: "1", name: "User 1", email: "xyz@gmail.com", conversations: 39 },
  { id: "2", name: "Raunak Das", email: "abc@gmail.com", conversations: 156 },
  { id: "3", name: "Zoro", email: "abc@gmail.com", conversations: 65 },
  { id: "4", name: "User 18", email: "abc@gmail.com", conversations: 6 },
  { id: "5", name: "User 19", email: "abc@gmail.com", conversations: 98 },
];

export default function ChatRecord() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"name" | "date">("name");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const handleExport = (
    format: string,
    dateRange: { from: Date; to: Date }
  ) => {
    // Implement export logic here
    console.log(`Exporting in ${format} format for date range:`, dateRange);
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Chat Record</h1>
          <p className="text-muted-foreground">
            Browse, filter, and export chat conversations effortlessly.
          </p>
        </div>
        <ExportChatDialog onExport={handleExport} />
      </div>

      <div className="bg-slate-50 rounded-lg p-6 space-y-6">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md bg-white"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white">
                <SlidersHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => setSortBy("name")}>
                Sort by Name
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("date")}>
                Sort by Date (New to Old)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("date")}>
                Sort by Date (Old to New)
              </DropdownMenuItem>
              <DropdownMenuItem>Sort by Size</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="bg-white rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">User Name</TableHead>
                <TableHead>Actions</TableHead>
                <TableHead className="text-right">Conversations</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {getInitials(user.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Chat summary
                      </Button>
                      <Button variant="outline" size="sm">
                        Sentiment Analysis
                      </Button>
                      <Button variant="outline" size="sm">
                        Action Items
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {user.conversations}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-center gap-1">
          <Button
            variant="outline"
            size="icon"
            className={currentPage === 1 ? "bg-indigo-50" : ""}
            onClick={() => setCurrentPage(1)}
          >
            1
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(2)}
          >
            2
          </Button>
          <Button variant="outline" size="icon" disabled>
            ...
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(5)}
          >
            5
          </Button>
        </div>
      </div>
    </div>
  );
}
