interface CardProps {
  children: React.ReactNode;
  className?: string
}
const CardWrapper = ({ children, className }: CardProps) => {
  return (
    <div className={`rounded-lg ${className}`}>
      {children}
    </div>
  );
};


export default CardWrapper