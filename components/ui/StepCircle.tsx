import { StepCircleProps } from "@/types/types";

const StepCircle = ({ num, color }: StepCircleProps) => {
  return (
    <span
      className={` ${color} flex items-center justify-center font-bold bg-gray-300 text-white rounded-full w-8 h-8 mr-2`}
    >
      {num}
    </span>
  );
};

export default StepCircle;
