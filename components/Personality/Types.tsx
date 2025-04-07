import Image from "next/image";
import CardWrapper from "../ui/CardWrapper";
import { personalities } from "@/data/Personality/types";
import { description } from "@/data/Personality/explorer";

const PersonalityTypes = () => {
  return (
    <div className="p-8 flex-1">
      <div className="text-[#0047AB] text-xl font-bold mb-6">
        Personality Types
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {personalities.map((type, idx) => (
          <CardWrapper key={idx}>
            <div
              className={`h-40 flex items-center justify-center ${type.bg} rounded-2xl`}
            >
              <Image
                src={type.img}
                alt={type.title}
                width={80}
                height={80}
                className="mb-0"
              />
            </div>

            <div className="px-4 py-7 text-sm w-full">
              <div className="flex items-center justify-between mb-1">
                <div className="font-semibold text-base">{type.title}</div>
                <span
                  className={`text-xs font-bold ${type.bg} ${type.textBg} px-2 py-1 rounded-full`}
                >
                  {type.code}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </CardWrapper>
        ))}
      </div>
    </div>
  );
};

export default PersonalityTypes;
