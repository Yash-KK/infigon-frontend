import { HoverCardProps } from "@/types/types";
import Image from "next/image";

const HoverCard = ({ color, title, description, icon }: HoverCardProps) => {
  return (
    <div className="relative w-44 h-52 group cursor-pointer transition-all duration-300">
      <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
        <Image src={icon} alt={title} width={100} height={100} />
      </div>

      <div
        className={`absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl p-4 text-white flex flex-col items-center justify-center text-center`}
        style={{ backgroundColor: color }}
      >
        <Image src={icon} alt={title} width={30} height={30} />
        <div className="mt-2 font-bold text-lg">{title.toUpperCase()}</div>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};

export default HoverCard;
