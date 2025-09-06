import React from "react";
import Navbar from "@/components/Navbar";
import { NewsCard } from "@/components/NewsCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Newspaper, Search } from "lucide-react";

const NewsFeed = () => {
  // Mock data for news items
  const newsItems = [
    {
      id: 1,
      title: "Remote Work Trends in 2024",
      content: "New studies show that hybrid work models are becoming the standard across industries...",
      date: "2024-02-20",
      category: "Work Trends",
      source: "WorkLife Magazine",
      imageUrl: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a",
    },
    {
      id: 2,
      title: "Tech Giant Opens New Wellness-Focused Campus",
      content: "Leading technology company unveils its new headquarters with dedicated spaces for mental health...",
      date: "2024-02-19",
      category: "Company Updates",
      source: "Tech Weekly",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <Newspaper className="h-6 w-6 text-wellmatch-primary" />
            <h1 className="text-2xl font-semibold text-wellmatch-dark">
              Industry News & Updates
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search news..."
              className="pl-10"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="trends">Work Trends</SelectItem>
              <SelectItem value="companies">Company Updates</SelectItem>
              <SelectItem value="wellness">Workplace Wellness</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-6">
          {newsItems.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsFeed;