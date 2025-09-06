import { Slider } from "@/components/ui/slider";

interface SalarySectionProps {
  salary: number[];
  onSalaryChange: (value: number[]) => void;
}

const SalarySection = ({ salary, onSalaryChange }: SalarySectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Salary Range</h3>
      <div className="space-y-6">
        <Slider
          value={salary}
          onValueChange={onSalaryChange}
          max={200000}
          step={1000}
          className="w-full"
        />
        <div className="text-sm text-muted-foreground">
          Expected salary: ${salary[0].toLocaleString()} per year
        </div>
      </div>
    </div>
  );
};

export default SalarySection;