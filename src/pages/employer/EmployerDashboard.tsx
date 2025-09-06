import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import EmployerNavbar from "@/components/employer/EmployerNavbar";
import { Briefcase, Users, FileText, CheckSquare, XSquare } from "lucide-react";

const EmployerDashboard = () => {
  // Mock data for demonstration
  const applicationsByPosition = [
    { position: "Senior Software Engineer", count: 85 },
    { position: "Product Manager", count: 65 },
    { position: "UX Designer", count: 45 },
    { position: "Data Scientist", count: 50 }
  ];

  const matchedCandidatesByPosition = [
    { position: "Senior Software Engineer", count: 32, matchPercentage: "92%" },
    { position: "Product Manager", count: 25, matchPercentage: "88%" },
    { position: "UX Designer", count: 18, matchPercentage: "90%" },
    { position: "Data Scientist", count: 14, matchPercentage: "85%" }
  ];

  return (
    <>
      <EmployerNavbar />
      <div className="container mx-auto px-4 py-24 space-y-8 animate-fadeIn">
        <h1 className="text-3xl font-bold text-wellmatch-dark">Employer Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                  <Users className="h-4 w-4 text-wellmatch-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">245</div>
                  <p className="text-xs text-muted-foreground">+20% from last month</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Applications by Position</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                {applicationsByPosition.map((item) => (
                  <div key={item.position} className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">{item.position}</span>
                    <span className="text-wellmatch-primary font-bold">{item.count}</span>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Positions</CardTitle>
              <Briefcase className="h-4 w-4 text-wellmatch-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Active job listings</p>
            </CardContent>
          </Card>

          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Matched Candidates</CardTitle>
                  <CheckSquare className="h-4 w-4 text-wellmatch-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89</div>
                  <p className="text-xs text-muted-foreground">Based on your criteria</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Matched Candidates by Position</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                {matchedCandidatesByPosition.map((item) => (
                  <div key={item.position} className="flex justify-between items-center py-2 border-b">
                    <div>
                      <div className="font-medium">{item.position}</div>
                      <div className="text-sm text-muted-foreground">Match: {item.matchPercentage}</div>
                    </div>
                    <span className="text-wellmatch-primary font-bold">{item.count}</span>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default EmployerDashboard;