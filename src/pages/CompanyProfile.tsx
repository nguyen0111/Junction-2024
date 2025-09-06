import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Users, Heart, Info } from "lucide-react";
import VirtualTourPreview from "@/components/VirtualTourPreview";
import QASessionCalendar from "@/components/QASessionCalendar";
import FeedbackSection from "@/components/FeedbackSection";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";

const CompanyProfile = () => {
  const { id } = useParams();
  // Mock data for Q&A sessions
  const upcomingSessions = [
    {
      date: new Date(),
      topic: "Company Culture Q&A",
      host: "HR Director",
    },
    {
      date: new Date(Date.now() + 86400000), // Tomorrow
      topic: "Team Lead Meet & Greet",
      host: "Engineering Lead",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c"
          alt="Company Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">TechWell Solutions</h1>
            <p className="text-lg opacity-90">Creating healthy workplaces for tomorrow</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="culture" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 lg:w-[500px]">
          <TabsTrigger value="culture">Culture</TabsTrigger>
          <TabsTrigger value="wellbeing">Well-being</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="culture" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Company Culture
              </CardTitle>
              <CardDescription>Our values and work environment</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Core Values</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Innovation & Creativity</li>
                    <li>Work-Life Balance</li>
                    <li>Continuous Learning</li>
                    <li>Inclusive Environment</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Work Environment</h3>
                  <p className="text-gray-600">
                    Our offices are designed to promote collaboration while respecting individual work styles.
                    We offer flexible spaces for both focused work and team activities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wellbeing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Well-being Initiatives
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Mental Health Support', 'Fitness Programs', 'Work-Life Balance'].map((initiative) => (
                  <div key={initiative} className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">{initiative}</h4>
                    <p className="text-sm text-gray-600">
                      Comprehensive programs and resources available to all employees.
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Employee Reviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-4 last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-2">
                      "Great work environment with focus on employee well-being and growth opportunities."
                    </p>
                    <p className="text-sm text-gray-500">Software Engineer • 2 years at company</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Interactive Features
              </CardTitle>
              <CardDescription>
                Experience our workplace and connect with our team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <VirtualTourPreview 
                  companyName="TechWell Solutions"
                  previewImageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c"
                />
                <QASessionCalendar upcomingSessions={upcomingSessions} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Leave Feedback
              </CardTitle>
              <CardDescription>
                Share your experience with this company
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FeedbackSection companyId={id || ""} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      </div>
    </>
  );
};

export default CompanyProfile;
