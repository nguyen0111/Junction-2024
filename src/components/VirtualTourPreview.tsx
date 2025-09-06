import React from "react";
import { Camera, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useToast } from "@/components/ui/use-toast";

interface VirtualTourPreviewProps {
  companyName: string;
  previewImageUrl?: string;
}

const VirtualTourPreview = ({ companyName, previewImageUrl }: VirtualTourPreviewProps) => {
  const { toast } = useToast();

  const handleStartTour = () => {
    toast({
      title: "Virtual Tour",
      description: "Launching virtual tour experience...",
    });
  };

  return (
    <div className="rounded-lg border bg-card">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Camera className="h-5 w-5" />
          <h3 className="font-semibold">Virtual Office Tour</h3>
        </div>
        
        <HoverCard>
          <HoverCardTrigger asChild>
            <div 
              className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors relative overflow-hidden"
              onClick={handleStartTour}
            >
              {previewImageUrl ? (
                <img 
                  src={previewImageUrl} 
                  alt={`${companyName} office preview`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Play className="h-12 w-12 text-gray-400" />
              )}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Play className="h-16 w-16 text-white" />
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">Experience {companyName}'s Workspace</h4>
              <p className="text-sm text-muted-foreground">
                Take a virtual tour of our office space and see where you could be working. 
                Explore meeting rooms, break areas, and collaborative spaces.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>

        <Button onClick={handleStartTour} className="w-full">
          Start VR Tour
        </Button>
      </div>
    </div>
  );
};

export default VirtualTourPreview;