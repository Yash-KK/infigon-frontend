import {
  learningApplications,
  description,
  learningPurpose,
  hoverCardData,
} from "@/data/Learning/styles";
import CardWrapper from "../ui/CardWrapper";
import Label from "../ui/Label";
import HoverCard from "./HoverCard";
const LearningStyles = () => {
  return (
    <div className="p-8 flex-1">
      <div className="text-3xl font-bold">
        Understanding <span className="text-[#DE5AFF]">Learning Styles</span>
      </div>
      <div>
        <Label text="Introduction" className="font-bold text-black pt-5" />
        <p className="text-[#5B6871] pt-1 tracking-wide">
          The <strong>VARK Learning Style</strong> test identifies and
          individual’s prefereed learning style based on visual, auditory,
          reading and Kinesthetic The VARK Learning Style test identifies and
          individual’s prefereed learning style based on visual, auditory,
          reading and Kinesthetic The VARK Learning Style test identifies and
          individual’s prefereed learning style based on visual, auditory,
          reading and Kinesthetic.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {hoverCardData.map((item) => (
          <HoverCard
            key={item.title}
            color={item.color}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="pt-10">
        <div className="pt-10">
          <Label
            text="The purposes and applications of learning styles in career development include"
            className="font-bold text-[#0047AB] text-xl mb-4"
          />
          <div className="grid grid-cols-1 pt-5 md:grid-cols-2 gap-4">
            {learningApplications.map((item, idx) => (
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
            text="The purposes and applications of learning styles in career development include"
            className="font-bold text-[#0047AB] text-xl mb-4"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningPurpose.map((item, idx) => (
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

export default LearningStyles;
