const EmotionalCircle = ({
  number,
  label,
  color,
}: {
  number: number;
  label: string;
  color: string;
}) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="flex flex-col items-center justify-center w-44 h-44 rounded-full shadow-lg"
        style={{
          background: `radial-gradient(circle, white, ${color})`,
        }}
      >
        <span
          className="flex items-center justify-center font-bold text-white rounded-full w-8 h-8 mb-2"
          style={{ backgroundColor: color }}
        >
          {number}
        </span>
        <div className="text-black font-semibold text-center">{label}</div>
      </div>
    </div>
  );
};

export default EmotionalCircle;
