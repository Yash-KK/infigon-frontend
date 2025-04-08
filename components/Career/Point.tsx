import { PointProps } from "@/types/types";

const Point = ({ idx, item }: PointProps) => {
  return (
    <div
      key={idx}
      className={`flex items-center border ${item.border} shadow rounded-full px-4 py-2`}
    >
      <span
        className={`flex items-center justify-center text-white rounded-full w-8 h-8 mr-4 ${item.bg}`}
      >
        {idx + 1}
      </span>
      <div className="flex-1 flex justify-center">
        <span className="font-bold text-black text-center">{item.text}</span>
      </div>
    </div>
  );
};

export default Point;
