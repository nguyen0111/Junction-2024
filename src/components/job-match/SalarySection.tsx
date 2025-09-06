import { Slider } from "@/components/ui/slider";

interface SalarySectionProps {
  salary: number[];
  onSalaryChange: (value: number[]) => void;
}

const SalarySection = ({ salary, onSalaryChange }: SalarySectionProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-wellmatch-dark">Salary Expectation</h2>
      <div className="space-y-4">
        <Slider
          value={salary}
          onValueChange={onSalaryChange}
          max={200000}
          step={1000}
          className="w-full"
        />
        <p className="text-center text-wellmatch-dark">
          ${salary[0].toLocaleString()} per year
        </p>
      </div>
    </div>
  );
};

export default SalarySection;