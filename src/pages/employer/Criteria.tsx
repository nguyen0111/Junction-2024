import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import EmployerNavbar from "@/components/employer/EmployerNavbar";
import { Slider } from "@/components/ui/slider";
import { Save, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import TechnicalSkillsSection from "@/components/employer/criteria/TechnicalSkillsSection";
import SoftSkillsSection from "@/components/employer/criteria/SoftSkillsSection";
import MajorsSection from "@/components/employer/criteria/MajorsSection";
import WorkEnvironmentSection from "@/components/employer/criteria/WorkEnvironmentSection";
import SalarySection from "@/components/employer/criteria/SalarySection";

interface CriteriaSheet {
  id: string;
  position: string;
  technicalSkills: string[];
  softSkills: string[];
  majors: string[];
  experience: number;
  education: string[];
  workEnvironments: string[];
  salary: number[];
}

const Criteria = () => {
  const [selectedPosition, setSelectedPosition] = useState<string>("");
  const [criteriaSheets, setCriteriaSheets] = useState<CriteriaSheet[]>([
    {
      id: "1",
      position: "Frontend Developer",
      technicalSkills: ["JavaScript", "React", "TypeScript"],
      softSkills: ["Teamwork", "Communication", "Problem Solving"],
      majors: ["Computer Science", "Software Engineering"],
      experience: 3,
      education: ["Bachelor's Degree"],
      workEnvironments: ["Remote Work", "Flexible Hours"],
      salary: [80000]
    },
    {
      id: "2",
      position: "Backend Developer",
      technicalSkills: ["Node.js", "Python", "SQL"],
      softSkills: ["Leadership", "Time Management", "Adaptability"],
      majors: ["Computer Science", "Information Technology"],
      experience: 4,
      education: ["Master's Degree"],
      workEnvironments: ["Hybrid", "Modern Office"],
      salary: [90000]
    }
  ]);

  const addNewPosition = () => {
    const newSheet: CriteriaSheet = {
      id: Date.now().toString(),
      position: "New Position",
      technicalSkills: [],
      softSkills: [],
      majors: [],
      experience: 0,
      education: [],
      workEnvironments: [],
      salary: [60000]
    };
    setCriteriaSheets([...criteriaSheets, newSheet]);
    setSelectedPosition(newSheet.id);
  };

  const deletePosition = (id: string) => {
    setCriteriaSheets(criteriaSheets.filter(sheet => sheet.id !== id));
    if (selectedPosition === id) {
      setSelectedPosition(criteriaSheets[0]?.id || "");
    }
  };

  const currentSheet = criteriaSheets.find(sheet => sheet.id === selectedPosition);

  return (
    <>
      <EmployerNavbar />
      <div className="container mx-auto px-4 py-24 space-y-8 animate-fadeIn">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Position Criteria</h2>
          <Button onClick={addNewPosition} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add New Position
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Position List */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Positions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {criteriaSheets.map((sheet) => (
                <div
                  key={sheet.id}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                    selectedPosition === sheet.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setSelectedPosition(sheet.id)}
                >
                  <span>{sheet.position}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      deletePosition(sheet.id);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Criteria Form */}
          {currentSheet && (
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>
                  <Input
                    value={currentSheet.position}
                    onChange={(e) => {
                      const updatedSheets = criteriaSheets.map(sheet =>
                        sheet.id === currentSheet.id
                          ? { ...sheet, position: e.target.value }
                          : sheet
                      );
                      setCriteriaSheets(updatedSheets);
                    }}
                    className="text-xl font-bold"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <SalarySection 
                  salary={currentSheet.salary}
                  onSalaryChange={(value) => {
                    const updatedSheets = criteriaSheets.map(sheet =>
                      sheet.id === currentSheet.id
                        ? { ...sheet, salary: value }
                        : sheet
                    );
                    setCriteriaSheets(updatedSheets);
                  }}
                />
                <TechnicalSkillsSection skills={currentSheet.technicalSkills} />
                <SoftSkillsSection skills={currentSheet.softSkills} />
                <MajorsSection majors={currentSheet.majors} />
                <WorkEnvironmentSection environments={currentSheet.workEnvironments} />

                <div className="space-y-4">
                  <h3 className="font-medium">Experience Level</h3>
                  <Slider defaultValue={[currentSheet.experience]} max={10} step={1} />
                  <div className="text-sm text-muted-foreground">
                    Minimum years of experience: {currentSheet.experience}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Education Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="edu1" />
                      <label htmlFor="edu1">Bachelor's Degree</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="edu2" />
                      <label htmlFor="edu2">Master's Degree or above</label>
                    </div>
                  </div>
                </div>

                <Button className="w-full md:w-auto">
                  <Save className="h-4 w-4 mr-2" />
                  Save Criteria
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default Criteria;