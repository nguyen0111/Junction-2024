import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import JobCard from "./JobCard";
import Navbar from "./Navbar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SalarySection from "./job-match/SalarySection";
import ManagerPreferencesSection from "./job-match/ManagerPreferencesSection";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

const JobMatchDashboard = () => {
  const [salary, setSalary] = useState([50000]);
  const [selectedQualification, setSelectedQualification] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
  const [selectedEnvironment, setSelectedEnvironment] = useState<string[]>([]);
  const [selectedManagerStyles, setSelectedManagerStyles] = useState<string[]>([]);

  const qualifications = [
    "Medical Doctor",
    "Electronic Engineer",
    "Software Engineer",
    "Data Scientist",
    "Business Analyst",
    "Marketing Specialist",
    "Graphic Designer",
  ];

  const personalityTraits = [
    "Team Player",
    "Independent Worker",
    "Creative Thinker",
    "Analytical Mind",
    "Leadership Skills",
    "Communication Skills",
    "Problem Solver",
    "Detail-Oriented",
  ];

  const hobbies = [
    "Classical Music",
    "Rock Music",
    "Jazz",
    "Soccer",
    "Basketball",
    "Tennis",
    "Reading",
    "Photography",
    "Traveling",
    "Cooking",
  ];

  const workEnvironments = [
    "Green Space",
    "Open Floor Plan",
    "Private Offices",
    "Natural Lighting",
    "Quiet Zones",
    "Collaboration Areas",
    "Outdoor Workspace",
    "Modern Tech Setup",
  ];

  const handleManagerStyleChange = (style: string, checked: boolean) => {
    setSelectedManagerStyles(prev =>
      checked ? [...prev, style] : prev.filter(s => s !== style)
    );
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-wellmatch-dark mb-8">Job Preference Settings</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Qualification Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-wellmatch-dark">Qualification</h2>
            <Select
              value={selectedQualification}
              onValueChange={setSelectedQualification}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your qualification" />
              </SelectTrigger>
              <SelectContent>
                {qualifications.map((qual) => (
                  <SelectItem key={qual} value={qual}>
                    {qual}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Salary Section */}
          <SalarySection salary={salary} onSalaryChange={setSalary} />

          {/* Manager Preferences Section */}
          <ManagerPreferencesSection 
            selectedStyles={selectedManagerStyles}
            onStyleChange={handleManagerStyleChange}
          />

          {/* Skills Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-wellmatch-dark">Skills & Personality</h2>
            <div className="grid grid-cols-2 gap-4">
              {personalityTraits.map((trait) => (
                <div key={trait} className="flex items-center space-x-2">
                  <Checkbox
                    id={trait}
                    checked={selectedSkills.includes(trait)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedSkills([...selectedSkills, trait]);
                      } else {
                        setSelectedSkills(selectedSkills.filter((t) => t !== trait));
                      }
                    }}
                  />
                  <label htmlFor={trait} className="text-sm cursor-pointer">
                    {trait}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-wellmatch-dark">Personal Hobbies</h2>
            <div className="grid grid-cols-2 gap-4">
              {hobbies.map((hobby) => (
                <div key={hobby} className="flex items-center space-x-2">
                  <Checkbox
                    id={hobby}
                    checked={selectedHobbies.includes(hobby)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedHobbies([...selectedHobbies, hobby]);
                      } else {
                        setSelectedHobbies(selectedHobbies.filter((h) => h !== hobby));
                      }
                    }}
                  />
                  <label htmlFor={hobby} className="text-sm cursor-pointer">
                    {hobby}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Working Environment Section */}
          <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
            <h2 className="text-xl font-semibold mb-4 text-wellmatch-dark">Working Environment</h2>
            <div className="grid grid-cols-3 gap-4">
              {workEnvironments.map((env) => (
                <div key={env} className="flex items-center space-x-2">
                  <Checkbox
                    id={env}
                    checked={selectedEnvironment.includes(env)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedEnvironment([...selectedEnvironment, env]);
                      } else {
                        setSelectedEnvironment(selectedEnvironment.filter((e) => e !== env));
                      }
                    }}
                  />
                  <label htmlFor={env} className="text-sm cursor-pointer">
                    {env}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button 
            onClick={() => toast({
              title: "Preferences Saved",
              description: "Your job preferences have been updated successfully."
            })}
            className="bg-wellmatch-primary hover:bg-wellmatch-accent text-white"
          >
            Save Preferences
          </Button>
        </div>

        {/* Original job matches section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-wellmatch-dark mb-6">Matching Jobs</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Example job card */}
            <div className="relative">
              <JobCard
                title="Senior Software Engineer"
                company="Mindful Tech Co"
                location="Remote"
                matchPercentage={92}
                values={["Work-Life Balance", "Innovation", "Wellness"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobMatchDashboard;
