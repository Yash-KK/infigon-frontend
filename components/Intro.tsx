import Button from "./ui/Button";
import CardWrapper from "./ui/CardWrapper";
import Label from "./ui/Label";

const Intro = () => {
  return (
    <div className="p-7 flex flex-col md:flex-row items-center">
      <div className="md:w-3/5">
        <Label
          text=" Your Career Analysis Report"
          className="text-[28px] font-[700] text-black pb-1"
        />
        <Label
          text="Your Report ensures a complete understanding of your strengths, areas for growth, and ideal career fit."
          className="font-[400] text-[#5B6871]"
        />
      </div>

      <div>
        <CardWrapper className="flex items-center shadow-sm border border-slate-200">
          <div className="p-3">
            <Label
              text="Want to speak to an expert Career Counsellor?"
              className="text-black font-bold"
            />
            <Label
              text="Explore a list of 1000+ Expert Career Counsellors near you!"
              className="text-[#5B6871]"
            />
          </div>
          <Button
            className="bg-[#EBEBEB] p-2 mr-2 rounded text-black font-bold"
            text="See All"
          />
        </CardWrapper>
      </div>
    </div>
  );
};
export default Intro;
