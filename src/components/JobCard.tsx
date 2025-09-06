import { Briefcase, Building } from "lucide-react";
import ValueMatch from "./ValueMatch";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  matchPercentage: number;
  values: string[];
}

const JobCard = ({ title, company, location, matchPercentage, values }: JobCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fadeIn">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-wellmatch-dark">{title}</h3>
          <div className="flex items-center space-x-2 mt-2 text-gray-600">
            <Building size={16} />
            <span>{company}</span>
          </div>
          <div className="flex items-center space-x-2 mt-1 text-gray-600">
            <Briefcase size={16} />
            <span>{location}</span>
          </div>
        </div>
        <ValueMatch percentage={matchPercentage} />
      </div>
      
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {values.map((value, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-wellmatch-secondary/20 text-wellmatch-dark rounded-full text-sm"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;