import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Lock, MessageSquare, Shield } from "lucide-react";

interface ThreadProps {
  thread: {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    replies: number;
    isModerated: boolean;
    privacy: string;
  };
}

export const ForumThread: React.FC<ThreadProps> = ({ thread }) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-medium">{thread.title}</h3>
            {thread.isModerated && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Shield className="h-4 w-4 text-wellmatch-accent" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Moderated Content</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {thread.privacy === "private" && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Lock className="h-4 w-4 text-wellmatch-dark" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Private Discussion</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-3">{thread.content}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>{thread.author}</span>
            <span>•</span>
            <span>{new Date(thread.date).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <MessageSquare className="h-4 w-4 mr-1" />
            {thread.replies}
          </Button>
        </div>
      </div>
    </Card>
  );
};