import { Checkbox } from "@/components/ui/checkbox"

interface MajorsSectionProps {
  majors: string[];
}

const MajorsSection = ({ majors }: MajorsSectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Required Majors</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="major1" />
          <label htmlFor="major1">Computer Science</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="major2" />
          <label htmlFor="major2">Software Engineering</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="major3" />
          <label htmlFor="major3">Information Technology</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="major4" />
          <label htmlFor="major4">Data Science</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="major5" />
          <label htmlFor="major5">Computer Engineering</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="major6" />
          <label htmlFor="major6">Other Engineering</label>
        </div>
      </div>
    </div>
  );
};

export default MajorsSection;