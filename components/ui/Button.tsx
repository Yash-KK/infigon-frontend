import DownloadIcon from "@/icons/Download";

interface ButtonProps {
  text: string;
  className?: string;
  textClassName?: string;
  leftChild?: React.ReactNode
  rightChild?: React.ReactNode
}

const Button = ({ text, className, textClassName, leftChild, rightChild }: ButtonProps) => {
  return (
    <div className={`flex ${className} text-[#5B6871]`}>
        {leftChild}
      <span className={`${textClassName}`}>{text}</span>
      {rightChild}
    </div>
  );
};

export default Button;
