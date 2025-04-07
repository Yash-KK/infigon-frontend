import {
  careerMotivatorsPurpose,
  careerMotivatorsUnderstanding,
  description,
  motivators,
} from "@/data/Career/top10";
import CardWrapper from "../ui/CardWrapper";
import Label from "../ui/Label";

const Top10CareerMotivators = () => {
  return (
    <div className="p-8 flex-1">
      <div className="text-[#0047AB] text-xl font-bold mb-6">
        Top 10 Career Motivators
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          {motivators.slice(0, 5).map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center border ${item.border} shadow rounded-xl px-4 py-2`}
            >
              <span
                className={`flex items-center justify-center text-white rounded-full w-8 h-8 mr-4 ${item.bg}`}
              >
                {idx + 1}
              </span>
              <div className="flex-1 flex justify-center">
                <span className="font-bold text-black text-center">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {motivators.slice(5).map((item, idx) => (
            <div
              key={idx + 5}
              className={`flex items-center border ${item.border} shadow rounded-xl px-4 py-2`}
            >
              <span
                className={`flex items-center justify-center text-white rounded-full w-8 h-8 mr-4 ${item.bg}`}
              >
                {idx + 6}
              </span>
              <div className="flex-1 flex justify-center">
                <span className="font-bold text-black text-center">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-10">
        <div className="pt-10">
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
    </div>
  );
};

export default Top10CareerMotivators;
