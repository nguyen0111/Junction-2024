import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserRound, Building2 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-wellmatch-light flex items-center justify-center">
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-wellmatch-dark mb-4">
            Find a job that matches your values
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            WellMatch helps you discover companies that prioritize mental well-being and align with your personal values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => navigate("/profile")}
              className="min-w-[200px] h-14 text-lg gap-2 bg-wellmatch-primary hover:bg-wellmatch-primary/90"
            >
              <UserRound className="w-5 h-5" />
              I'm an Employee
            </Button>
            <Button
              onClick={() => navigate("/employer")}
              className="min-w-[200px] h-14 text-lg gap-2 bg-wellmatch-accent hover:bg-wellmatch-accent/90"
            >
              <Building2 className="w-5 h-5" />
              I'm an Employer
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;