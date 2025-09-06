import { Checkbox } from "@/components/ui/checkbox"

interface WorkEnvironmentSectionProps {
  environments: string[];
}

const WorkEnvironmentSection = ({ environments }: WorkEnvironmentSectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Working Environment (anonymous)</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="env1" />
          <label htmlFor="env1">Flexible Hours</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="env2" />
          <label htmlFor="env2">Remote Work</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="env3" />
          <label htmlFor="env3">Hybrid</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="env4" />
          <label htmlFor="env4">Casual Dress Code</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="env5" />
          <label htmlFor="env5">Modern Office</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="env6" />
          <label htmlFor="env6">Break Room</label>
        </div>
      </div>
    </div>
  );
};

export default WorkEnvironmentSection;