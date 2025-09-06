import React from "react";
import { MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";

interface QASession {
  date: Date;
  topic: string;
  host: string;
}

interface QASessionCalendarProps {
  upcomingSessions: QASession[];
}

const QASessionCalendar = ({ upcomingSessions = [] }: QASessionCalendarProps) => {
  const { toast } = useToast();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleJoinQA = () => {
    toast({
      title: "Q&A Session",
      description: "You'll be notified when the next Q&A session begins.",
    });
  };

  // Find sessions for the selected date
  const selectedDateSessions = upcomingSessions.filter(
    (session) => date && session.date.toDateString() === date.toDateString()
  );

  return (
    <div className="rounded-lg border bg-card">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="h-5 w-5" />
          <h3 className="font-semibold">Live Q&A Sessions</h3>
        </div>

        <div className="mb-4">
          <CalendarComponent
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>

        <div className="space-y-3 mb-4">
          {selectedDateSessions.map((session, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{session.topic}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Host: {session.host}
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to join this Q&A session</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>

        <Button onClick={handleJoinQA} className="w-full">
          Join Next Session
        </Button>
      </div>
    </div>
  );
};

export default QASessionCalendar;