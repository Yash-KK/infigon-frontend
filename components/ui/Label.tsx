interface LabelProps {
  text: string;
  className?: string;
}

const Label = ({ text, className }: LabelProps) => {
  return (
    <div
      className={`${className} text-[#5B6871]`}
    >
      <span>{text}</span>
    </div>
  );
};

export default Label;
