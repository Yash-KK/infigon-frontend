interface CardProps {
  children: React.ReactNode;
}
const CardWrapper = ({ children }: CardProps) => {
  return (
    <div className="flex items-center m-6 bg-white shadow-sm border border-slate-200  rounded-lg">
      {children}
    </div>
  );
};


export default CardWrapper