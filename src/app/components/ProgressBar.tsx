interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

export function ProgressBar({ current, total, label = 'Fabric Left' }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-300 font-['Montserrat']">{label}</span>
        <span className="text-sm font-semibold text-[#D4AF37] font-['Montserrat']">
          Only {current} meters left!
        </span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
        <div
          className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4B0] transition-all duration-300 relative"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-[#D4AF37]/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
