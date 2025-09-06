import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MessageSquare,
  Users,
  Filter,
  Lock,
  MessageCircle,
} from "lucide-react";
import { ForumThread } from "@/components/ForumThread";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";

const CommunityForum = () => {
  const [sortBy, setSortBy] = useState("recent");
  const { toast } = useToast();

  // Mock data for forum threads
  const threads = [
    {
      id: 1,
      title: "Managing Work-Life Balance",
      content: "How do you maintain a healthy work-life balance?",
      author: "Anonymous",
      date: "2024-02-20",
      replies: 5,
      isModerated: true,
      privacy: "public",
    },
    {
      id: 2,
      title: "Dealing with Workplace Stress",
      content: "Share your tips for managing workplace stress...",
      author: "Anonymous",
      date: "2024-02-19",
      replies: 3,
      isModerated: true,
      privacy: "private",
    },
  ];

  const handleNewThread = () => {
    toast({
      title: "Create New Thread",
      description: "This feature will be implemented soon.",
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-6 w-6 text-wellmatch-primary" />
          <h1 className="text-2xl font-semibold text-wellmatch-dark">
            Community Forum
          </h1>
        </div>
        <Button
          onClick={handleNewThread}
          className="bg-wellmatch-primary hover:bg-wellmatch-accent"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          New Thread
        </Button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="relevant">Most Relevant</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Users className="h-4 w-4" />
          <span>{threads.length} Discussions</span>
        </div>
      </div>

      <ScrollArea className="h-[600px] rounded-md border">
        <div className="space-y-4 p-4">
          {threads.map((thread) => (
            <ForumThread key={thread.id} thread={thread} />
          ))}
        </div>
      </ScrollArea>
      </div>
    </>
  );
};

export default CommunityForum;
