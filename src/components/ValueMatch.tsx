interface ValueMatchProps {
  percentage: number;
}

const ValueMatch = ({ percentage }: ValueMatchProps) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-20 h-2 bg-wellmatch-secondary rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-wellmatch-primary rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm text-wellmatch-dark font-medium">{percentage}% match</span>
    </div>
  );
};

export default ValueMatch;