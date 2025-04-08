import {
  careerMotivatorsPurpose,
  careerMotivatorsUnderstanding,
  description,
  motivators,
} from "@/data/Career/top10";
import CardWrapper from "../ui/CardWrapper";
import Label from "../ui/Label";
import Point from "./Point";

const Top10CareerMotivators = () => {
  return (
    <div className="p-8 flex-1">
      <div className="text-[#0047AB] text-xl font-bold mb-6">
        Top 10 Career Motivators
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          {motivators.slice(0, 5).map((item, idx) => (
           <Point key={idx} item={item} idx={idx} />
          ))}
        </div>

        <div className="space-y-4">
          {motivators.slice(5).map((item, idx) => (
             <Point key={idx + 5} item={item} idx={idx + 5} />
          ))}
        </div>
      </div>
        <div className="pt-10 p-2">
          <Label
            text="Purpose and Applications of Career Motivators in career development include"
            className="font-bold text-[#0047AB] text-xl mb-4"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerMotivatorsPurpose.map((item, idx) => (
              <CardWrapper className="bg-[#CACACA33]" key={idx}>
                <div className="p-4 w-full text-sm">
                  <div className="font-semibold text-base mb-1">{item}</div>
                  <p className="text-gray-600">{description}</p>
                </div>
              </CardWrapper>
            ))}
          </div>
        </div>

        <div className="pt-10">
          <Label
            text="Benefits of  understanding interest using career motivators for career planning include"
            className="font-bold text-[#0047AB] text-xl mb-4"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerMotivatorsUnderstanding.map((item, idx) => (
              <CardWrapper className="bg-[#CACACA33]" key={idx}>
                <div className="p-4 w-full text-sm">
                  <div className="font-semibold text-base mb-1">{item}</div>
                  <p className="text-gray-600">{description}</p>
                </div>
              </CardWrapper>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Top10CareerMotivators;
