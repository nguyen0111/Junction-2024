import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UserProfile from "./pages/UserProfile";
import JobMatchDashboard from "./components/JobMatchDashboard";
import CompanyProfile from "./pages/CompanyProfile";
import NewsFeed from "./pages/NewsFeed";
import EmployerDashboard from "./pages/employer/EmployerDashboard";
import EmployerProfile from "./pages/employer/EmployerProfile";
import ApplicationReceiver from "./pages/employer/ApplicationReceiver";
import Criteria from "./pages/employer/Criteria";
import Review from "./pages/Review";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/matches" element={<JobMatchDashboard />} />
          <Route path="/company/:id" element={<CompanyProfile />} />
          <Route path="/news" element={<NewsFeed />} />
          <Route path="/review/:id" element={<Review />} />
          
          {/* Employer Routes */}
          <Route path="/employer" element={<EmployerDashboard />} />
          <Route path="/employer/profile" element={<EmployerProfile />} />
          <Route path="/employer/applications" element={<ApplicationReceiver />} />
          <Route path="/employer/criteria" element={<Criteria />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;