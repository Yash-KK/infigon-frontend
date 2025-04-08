import { introduction1, introduction2 } from "@/data/Career/motivators";
import Label from "../ui/Label";

const CareerMotivators = () => {
  return (
    <div className="p-8 flex-1">
      <div className="text-4xl font-bold">
        Understanding <span className="text-[#FF9706]">Career Motivators</span>
      </div>
      <div>
        <Label text="Introduction" className="font-bold text-black pt-5" />
        <p className="text-[#5B6871] pt-1 tracking-wide">{introduction1}</p>
      </div>

      <div className="text-[#5B6871] pt-4 tracking-wide">
        <Label
          text="To understand your personality Myers-Brig Type Indicator (MBTI) test
            was used."
          className="text-black font-bold"
        />
        {introduction2}
      </div>
    </div>
  );
};
export default CareerMotivators;
