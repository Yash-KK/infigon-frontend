interface ButtonProps {
  text: string;
  className?: string;
  textClassName?: string;
  leftChild?: React.ReactNode
}

const Button = ({ text, className, textClassName, leftChild }: ButtonProps) => {
  return (
    <div className={`${className} text-[#5B6871]`}>
        {leftChild}
      <span className={`${textClassName}`}>{text}</span>
    </div>
  );
};

export default Button;
