import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import EmployerNavbar from "@/components/employer/EmployerNavbar";
import { Building, Mail, Globe, MapPin, Users, Heart } from "lucide-react";

const EmployerProfile = () => {
  return (
    <>
      <EmployerNavbar />
      <div className="container mx-auto px-4 py-24 space-y-8 animate-fadeIn">
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4">
            <Building className="h-8 w-8 text-wellmatch-primary" />
            <div>
              <CardTitle>Company Profile</CardTitle>
              <p className="text-sm text-muted-foreground">Manage your company information</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Company Name</label>
                <Input defaultValue="TechCorp Solutions" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Industry</label>
                <Input defaultValue="Information Technology" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Company Size</label>
                <Input defaultValue="500-1000 employees" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Founded Year</label>
                <Input defaultValue="2010" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Company Description</label>
              <Textarea className="min-h-[100px]" defaultValue="TechCorp Solutions is a leading provider of innovative software solutions..." />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Company Culture</label>
              <Textarea 
                className="min-h-[100px]" 
                placeholder="Describe your company culture, values, and work environment..."
                defaultValue="We foster an inclusive, innovative environment where creativity thrives. Our culture emphasizes work-life balance, continuous learning, and collaborative problem-solving. We celebrate diversity and encourage open communication at all levels."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Ideal Candidate Profile</label>
              <Textarea 
                className="min-h-[100px]" 
                placeholder="Describe the type of candidates you're looking for..."
                defaultValue="We seek passionate individuals who are self-motivated and thrive in a fast-paced environment. Our ideal candidates demonstrate strong problem-solving abilities, embrace teamwork, and share our commitment to innovation. We value diversity of thought and experience, looking for people who can bring fresh perspectives to our team."
              />
            </div>

            <Button className="w-full md:w-auto">Save Changes</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default EmployerProfile;