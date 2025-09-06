import { Checkbox } from "@/components/ui/checkbox"

interface SoftSkillsSectionProps {
  skills: string[];
}

const SoftSkillsSection = ({ skills }: SoftSkillsSectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Required Soft Skills</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="soft1" />
          <label htmlFor="soft1">Teamwork</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="soft2" />
          <label htmlFor="soft2">Communication</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="soft3" />
          <label htmlFor="soft3">Problem Solving</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="soft4" />
          <label htmlFor="soft4">Leadership</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="soft5" />
          <label htmlFor="soft5">Time Management</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="soft6" />
          <label htmlFor="soft6">Adaptability</label>
        </div>
      </div>
    </div>
  );
};

export default SoftSkillsSection;