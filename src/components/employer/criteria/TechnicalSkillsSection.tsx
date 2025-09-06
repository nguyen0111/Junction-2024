import { Checkbox } from "@/components/ui/checkbox"

interface TechnicalSkillsSectionProps {
  skills: string[];
}

const TechnicalSkillsSection = ({ skills }: TechnicalSkillsSectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Required Technical Skills</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="tech1" />
          <label htmlFor="tech1">JavaScript</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="tech2" />
          <label htmlFor="tech2">React</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="tech3" />
          <label htmlFor="tech3">Node.js</label>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkillsSection;