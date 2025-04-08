import { useEffect, useRef } from "react";

const EmotionalPointsCircle = ({
  number,
  label,
  score,
  total,
  color = "#FF7A00",
}: {
  number: number;
  label: string;
  score: number;
  total: number;
  color?: string;
}) => {
  const percentage = (score / total) * 100;
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const radius = circleRef.current?.r.baseVal.value || 0;
    const circumference = 2 * Math.PI * radius;
    if (circleRef.current) {
      circleRef.current.style.strokeDasharray = `${circumference}`;
      circleRef.current.style.strokeDashoffset = `${
        circumference - (percentage / 100) * circumference
      }`;
    }
  }, [percentage]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40">
        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="70"
            stroke="#eee"
            strokeWidth="10"
            fill="none"
          />
          <circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r="70"
            stroke={color}
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            className="transition-all duration-700"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold"
            style={{ backgroundColor: color }}
          >
            {number}
          </div>
          <div className="mt-2 font-semibold text-black text-center">
            {label}
          </div>
        </div>
      </div>

      <div className="mt-3 px-3 py-1 rounded-full flex items-center border border-[#FF7A00] bg-white text-[#FF7A00] font-semibold text-sm">
        {score}/{total}
        <div className="w-4 h-4 rounded-full bg-[#00DA6D] ml-2" />
      </div>
    </div>
  );
};

export default EmotionalPointsCircle;
