import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmployerNavbar from "@/components/employer/EmployerNavbar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckSquare, XSquare, FileText, User } from "lucide-react";
import { useState } from "react";

const ApplicationReceiver = () => {
  const [selectedCV, setSelectedCV] = useState<{
    applicant: string;
    cv: string;
  } | null>(null);

  // Mock data for demonstration
  const mockCV = {
    applicant: "John Doe",
    cv: `
    JOHN DOE
    Senior Developer
    
    EXPERIENCE
    - 5 years of full-stack development
    - Led team of 6 developers
    - Implemented major features for enterprise clients
    
    EDUCATION
    - BS Computer Science
    - Multiple certifications in web development
    
    SKILLS
    - React, TypeScript, Node.js
    - Team leadership
    - Agile methodologies
    `
  };

  return (
    <>
      <EmployerNavbar />
      <div className="container mx-auto px-4 py-24 space-y-8 animate-fadeIn">
        <Card>
          <CardHeader>
            <CardTitle>Application Inbox</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Match Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">John Doe</TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell className="text-green-600">95%</TableCell>
                  <TableCell>Pending Review</TableCell>
                  <TableCell className="space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedCV(mockCV)}
                        >
                          <FileText className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Applicant CV - {selectedCV?.applicant}</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4 whitespace-pre-wrap font-mono text-sm bg-muted p-4 rounded-md">
                          {selectedCV?.cv}
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm" className="text-green-600">
                      <CheckSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600">
                      <XSquare className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ApplicationReceiver;