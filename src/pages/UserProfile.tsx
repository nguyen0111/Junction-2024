import { User, Heart, Briefcase, Brain, Target, Smile } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { toast } from "sonner";
import ValueMatch from "@/components/ValueMatch";
import Navbar from "@/components/Navbar";

// Components split for better organization
const PersonalInfo = ({ isEmployed, setIsEmployed }: { isEmployed: boolean; setIsEmployed: (value: boolean) => void }) => {
  const handleEmploymentChange = (checked: boolean) => {
    setIsEmployed(checked);
    toast.success(`Status updated to ${checked ? 'Employed' : 'Unemployed'}`);
  };

  return (
    <div className="relative bg-gradient-to-r from-wellmatch-primary/10 to-wellmatch-accent/10 rounded-xl p-8 mb-8">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <Avatar className="h-32 w-32 ring-4 ring-wellmatch-primary/20">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-grow text-center md:text-left">
          <h1 className="text-4xl font-bold text-wellmatch-dark mb-2 bg-clip-text text-transparent bg-gradient-to-r from-wellmatch-dark to-wellmatch-accent">
            John Doe
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-wellmatch-accent font-medium">Software Engineer</p>
              <Badge variant="outline" className={`${isEmployed ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"} animate-fadeIn`}>
                {isEmployed ? "✨ Employed" : "🔍 Looking for opportunities"}
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Update Status</span>
              <Switch checked={isEmployed} onCheckedChange={handleEmploymentChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PersonalDetails = () => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center space-x-2 bg-gradient-to-r from-wellmatch-primary/5 to-transparent">
      <Smile className="h-5 w-5 text-wellmatch-primary animate-fadeIn" />
      <CardTitle>About Me</CardTitle>
    </CardHeader>
    <CardContent className="grid md:grid-cols-2 gap-4 p-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Email</p>
        <p className="font-medium">john.doe@example.com</p>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Location</p>
        <p className="font-medium">San Francisco, CA</p>
      </div>
    </CardContent>
  </Card>
);

const CulturalPreferences = () => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center space-x-2 bg-gradient-to-r from-wellmatch-primary/5 to-transparent">
      <Heart className="h-5 w-5 text-wellmatch-primary animate-fadeIn" />
      <CardTitle>My Vibe</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6 p-6">
      <div>
        <h3 className="font-medium mb-4 text-lg">Work Environment</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-wellmatch-secondary/10 p-4 rounded-lg">
            <ValueMatch percentage={85} />
            <p className="text-sm mt-2 font-medium">Remote-first</p>
          </div>
          <div className="bg-wellmatch-secondary/10 p-4 rounded-lg">
            <ValueMatch percentage={92} />
            <p className="text-sm mt-2 font-medium">Collaborative</p>
          </div>
          <div className="bg-wellmatch-secondary/10 p-4 rounded-lg">
            <ValueMatch percentage={88} />
            <p className="text-sm mt-2 font-medium">Innovative</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const WellbeingGoals = () => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center space-x-2 bg-gradient-to-r from-wellmatch-primary/5 to-transparent">
      <Heart className="h-5 w-5 text-wellmatch-primary animate-fadeIn" />
      <CardTitle>Life Goals</CardTitle>
    </CardHeader>
    <CardContent className="p-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-wellmatch-secondary/20 to-wellmatch-primary/10 p-6 rounded-xl">
          <h3 className="font-medium mb-2">Work-Life Balance</h3>
          <ValueMatch percentage={95} />
        </div>
        <div className="bg-gradient-to-br from-wellmatch-secondary/20 to-wellmatch-primary/10 p-6 rounded-xl">
          <h3 className="font-medium mb-2">Mental Health</h3>
          <ValueMatch percentage={80} />
        </div>
        <div className="bg-gradient-to-br from-wellmatch-secondary/20 to-wellmatch-primary/10 p-6 rounded-xl">
          <h3 className="font-medium mb-2">Growth</h3>
          <ValueMatch percentage={88} />
        </div>
      </div>
    </CardContent>
  </Card>
);

const JobExperiences = () => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center space-x-2 bg-gradient-to-r from-wellmatch-primary/5 to-transparent">
      <Briefcase className="h-5 w-5 text-wellmatch-primary animate-fadeIn" />
      <CardTitle>Experience</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6 p-6">
      <div className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-wellmatch-primary before:to-wellmatch-accent">
        <h3 className="font-medium text-lg">Senior Software Engineer</h3>
        <p className="text-sm text-muted-foreground">TechCorp Inc. • 2020-2023</p>
        <p className="mt-2">Led development of core platform features and mentored junior developers.</p>
      </div>
      <div className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-wellmatch-primary before:to-wellmatch-accent">
        <h3 className="font-medium text-lg">Software Engineer</h3>
        <p className="text-sm text-muted-foreground">StartupXYZ • 2018-2020</p>
        <p className="mt-2">Full-stack development for a growing SaaS platform.</p>
      </div>
    </CardContent>
  </Card>
);

const PsychologicalAssessments = () => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center space-x-2 bg-gradient-to-r from-wellmatch-primary/5 to-transparent">
      <Brain className="h-5 w-5 text-wellmatch-primary animate-fadeIn" />
      <CardTitle>My Personality</CardTitle>
    </CardHeader>
    <CardContent className="grid md:grid-cols-2 gap-6 p-6">
      <div className="bg-gradient-to-br from-wellmatch-secondary/20 to-wellmatch-primary/10 p-6 rounded-xl">
        <h3 className="font-medium mb-2">Personality Type</h3>
        <p className="text-3xl font-bold text-wellmatch-accent">INFJ-T</p>
        <p className="text-sm text-muted-foreground mt-1">The Advocate</p>
      </div>
      <div className="bg-gradient-to-br from-wellmatch-secondary/20 to-wellmatch-primary/10 p-6 rounded-xl">
        <h3 className="font-medium mb-2">Work Style</h3>
        <p className="text-3xl font-bold text-wellmatch-accent">Strategic</p>
        <p className="text-sm text-muted-foreground mt-1">Analytical & Detail-oriented</p>
      </div>
    </CardContent>
  </Card>
);

const ValueIndicators = () => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center space-x-2 bg-gradient-to-r from-wellmatch-primary/5 to-transparent">
      <Target className="h-5 w-5 text-wellmatch-primary animate-fadeIn" />
      <CardTitle>My Values</CardTitle>
    </CardHeader>
    <CardContent className="p-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-wellmatch-secondary/20 to-wellmatch-primary/10 p-6 rounded-xl">
          <h3 className="font-medium mb-2">Innovation</h3>
          <ValueMatch percentage={92} />
        </div>
        <div className="bg-gradient-to-br from-wellmatch-secondary/20 to-wellmatch-primary/10 p-6 rounded-xl">
          <h3 className="font-medium mb-2">Collaboration</h3>
          <ValueMatch percentage={88} />
        </div>
        <div className="bg-gradient-to-br from-wellmatch-secondary/20 to-wellmatch-primary/10 p-6 rounded-xl">
          <h3 className="font-medium mb-2">Work-Life Balance</h3>
          <ValueMatch percentage={95} />
        </div>
      </div>
    </CardContent>
  </Card>
);

const UserProfile = () => {
  const [isEmployed, setIsEmployed] = useState(true);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-24 space-y-8 animate-fadeIn">
        <PersonalInfo isEmployed={isEmployed} setIsEmployed={setIsEmployed} />
        <div className="grid gap-8">
          <PersonalDetails />
          <CulturalPreferences />
          <WellbeingGoals />
          <JobExperiences />
          <PsychologicalAssessments />
          <ValueIndicators />
        </div>
      </div>
    </>
  );
};

export default UserProfile;