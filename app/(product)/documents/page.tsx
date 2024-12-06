"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileIcon, Link2Icon, Trash2Icon } from "lucide-react";
import { AddContentDialog } from "@/components/dialog/add-content-dialog";

interface Document {
  id: string;
  name: string;
  size: string;
  characters: string;
  uploadDate: string;
  type: "zip" | "doc" | "pdf" | "txt" | "url";
}

export default function DocumentManager() {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      name: "Bot_Details.zip",
      size: "35.7 MB",
      characters: "76,112 characters",
      uploadDate: "17th Jul, 2024",
      type: "zip",
    },
    {
      id: "2",
      name: "Person.doc",
      size: "9.7 MB",
      characters: "9,112 characters",
      uploadDate: "17th Jul, 2024",
      type: "doc",
    },
    {
      id: "3",
      name: "Zara.pdf",
      size: "23.9 MB",
      characters: "7,812 characters",
      uploadDate: "17th Jul, 2024",
      type: "pdf",
    },
    {
      id: "4",
      name: "www.stylecheck.org",
      size: "3.7 MB",
      characters: "612 characters",
      uploadDate: "17th Jul, 2024",
      type: "url",
    },
    {
      id: "5",
      name: "Zara.txt",
      size: "238 KB",
      characters: "52 characters",
      uploadDate: "17th Jul, 2024",
      type: "txt",
    },
  ]);

  const [selectedDocs, setSelectedDocs] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectAll = () => {
    if (selectedDocs.length === documents.length) {
      setSelectedDocs([]);
    } else {
      setSelectedDocs(documents.map((doc) => doc.id));
    }
  };

  const handleSelect = (id: string) => {
    if (selectedDocs.includes(id)) {
      setSelectedDocs(selectedDocs.filter((docId) => docId !== id));
    } else {
      setSelectedDocs([...selectedDocs, id]);
    }
  };

  const handleDelete = (id: string) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
    setSelectedDocs(selectedDocs.filter((docId) => docId !== id));
  };

  const getFileIcon = (type: Document["type"]) => {
    switch (type) {
      case "url":
        return <Link2Icon className="h-5 w-5 text-blue-500" />;
      default:
        return <FileIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Documents</h1>

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center gap-4">
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
          <Button variant="outline" size="sm">
            Retrain
          </Button>
          <Button variant="outline" size="sm">
            Auto-refresh
          </Button>
        </div>
        <AddContentDialog onAddContent={() => {}} />
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedDocs.length === documents.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>File Name</TableHead>
              <TableHead className="text-right">Upload Date</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDocuments.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedDocs.includes(doc.id)}
                    onCheckedChange={() => handleSelect(doc.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getFileIcon(doc.type)}
                    <div>
                      <div className="font-medium">{doc.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {doc.size} - {doc.characters}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">{doc.uploadDate}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(doc.id)}
                  >
                    <Trash2Icon className="h-4 w-4 text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
