import { Building, User, Inbox, FileText, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

const EmployerNavbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/employer" className="flex items-center space-x-2">
            <Building className="h-6 w-6 text-wellmatch-primary" />
            <span className="text-wellmatch-dark text-xl font-semibold">WellMatch Employer</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/employer" className="flex items-center space-x-1 text-wellmatch-dark hover:text-wellmatch-primary transition-colors">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            <Link to="/employer/profile" className="flex items-center space-x-1 text-wellmatch-dark hover:text-wellmatch-primary transition-colors">
              <Building size={20} />
              <span>Profile</span>
            </Link>
            <Link to="/employer/applications" className="flex items-center space-x-1 text-wellmatch-dark hover:text-wellmatch-primary transition-colors">
              <Inbox size={20} />
              <span>Applications</span>
            </Link>
            <Link to="/employer/criteria" className="flex items-center space-x-1 text-wellmatch-dark hover:text-wellmatch-primary transition-colors">
              <FileText size={20} />
              <span>Criteria</span>
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-wellmatch-dark">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EmployerNavbar;