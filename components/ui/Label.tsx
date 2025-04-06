interface LabelProps {
  text: string;
  className?: string;
}

const Label = ({ text, className }: LabelProps) => {
  return (
    <label
      className={`rounded-md px-3 py-2 text-sm font-medium text-[#5B6871] ${className}`}
    >
      {text}
    </label>
  );
};

export default Label;
