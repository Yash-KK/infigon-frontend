import {
  EIApplications,
  EIApplications2,
  EIUnderstanding,
  congratulations,
  description,
  emotionalCircleData,
} from "@/data/Emotional/dainelGoleman";
import CardWrapper from "../ui/CardWrapper";
import Label from "../ui/Label";
import EmotionalCircle from "./Circle";

const DanielGolemanTest = () => {
  return (
    <div className="p-8 flex-1">
      <Label
        text="5 Emotional Elements"
        className="text-[#0047AB] text-xl font-bold mb-6"
      />
      <div className="flex justify-between gap-4 px-10">
        {emotionalCircleData.map((emotion) => (
          <EmotionalCircle
            key={emotion.number}
            number={emotion.number}
            label={emotion.label}
            color={emotion.color}
          />
        ))}
      </div>

      <div className="pt-10">
        <div className="pt-10">
          <Label
            text="Applications of the Emotional Intelligence Test in career development include"
            className="font-bold text-[#0047AB] text-xl mb-4"
          />{" "}
          <p className="text-[#5B6871] pt-1 tracking-wide">
            {congratulations}
          </p>
          <div className="grid grid-cols-1 pt-5 md:grid-cols-2 gap-4">
            {EIApplications.map((item, idx) => (
              <CardWrapper className="bg-[#CACACA33]" key={idx}>
                <div className="p-4 w-full text-sm">
                  <div className="font-semibold text-base mb-1">{item}</div>
                  <p className="text-gray-600">{description}</p>
                </div>
              </CardWrapper>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {EIApplications2.map((item, idx) => (
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
            text="Understanding emotional intelligence for career planning offers several benefits, including"
            className="font-bold text-[#0047AB] text-xl mb-4"
          />
          <div className="grid grid-cols-1 pt-5 md:grid-cols-2 gap-4">
            {EIUnderstanding.map((item, idx) => (
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

export default DanielGolemanTest;
