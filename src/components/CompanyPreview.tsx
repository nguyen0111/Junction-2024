import { Building, Users } from "lucide-react";

interface CompanyPreviewProps {
  name: string;
  industry: string;
  employeeCount: string;
  wellnessInitiatives: string[];
  imageUrl: string;
}

const CompanyPreview = ({ name, industry, employeeCount, wellnessInitiatives, imageUrl }: CompanyPreviewProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fadeIn">
      <div className="h-32 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-wellmatch-dark">{name}</h3>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center space-x-2 text-gray-600">
            <Building size={16} />
            <span>{industry}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Users size={16} />
            <span>{employeeCount} employees</span>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-semibold text-wellmatch-dark mb-2">Wellness Initiatives</h4>
          <div className="flex flex-wrap gap-2">
            {wellnessInitiatives.map((initiative, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-wellmatch-primary/10 text-wellmatch-primary rounded-full text-sm"
              >
                {initiative}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPreview;