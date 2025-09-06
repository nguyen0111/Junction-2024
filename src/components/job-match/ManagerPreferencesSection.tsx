import { Checkbox } from "@/components/ui/checkbox";

interface ManagerPreferencesSectionProps {
  selectedStyles: string[];
  onStyleChange: (style: string, checked: boolean) => void;
}

const ManagerPreferencesSection = ({
  selectedStyles,
  onStyleChange,
}: ManagerPreferencesSectionProps) => {
  const managementStyles = [
    "Goal-Oriented",
    "Supportive",
    "Hands-off",
    "Structured",
    "Collaborative",
    "Results-Driven",
    "Mentoring-Focused",
    "Strategic"
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-wellmatch-dark">Management Style Preferences</h2>
      <div className="grid grid-cols-2 gap-4">
        {managementStyles.map((style) => (
          <div key={style} className="flex items-center space-x-2">
            <Checkbox
              id={`manager-${style}`}
              checked={selectedStyles.includes(style)}
              onCheckedChange={(checked) => onStyleChange(style, checked as boolean)}
            />
            <label htmlFor={`manager-${style}`} className="text-sm cursor-pointer">
              {style}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagerPreferencesSection;