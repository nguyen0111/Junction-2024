import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Building } from "lucide-react";

interface NewsCardProps {
  news: {
    id: number;
    title: string;
    content: string;
    date: string;
    category: string;
    source: string;
    imageUrl?: string;
  };
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="space-y-4">
        {news.imageUrl && (
          <img 
            src={news.imageUrl} 
            alt={news.title}
            className="w-full h-48 object-cover rounded-md"
          />
        )}
        <div>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-sm">
              {news.category}
            </Badge>
            <div className="flex items-center text-sm text-gray-500">
              <CalendarDays className="h-4 w-4 mr-1" />
              {new Date(news.date).toLocaleDateString()}
            </div>
          </div>
          <h3 className="text-lg font-medium mb-2">{news.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{news.content}</p>
          <div className="flex items-center text-sm text-gray-500">
            <Building className="h-4 w-4 mr-1" />
            <span>Source: {news.source}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};