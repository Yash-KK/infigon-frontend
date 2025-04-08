import CardWrapper from "./ui/CardWrapper";
import Label from "./ui/Label";

export default function Intro() {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="p-7 w-full md:w-3/5">
        <Label
          text=" Your Career Analysis Report"
          className="text-[28px] font-[700] text-black pb-1"
        />
        <Label
          text="Your Report ensures a complete understanding of your strengths, areas for growth, and ideal career fit."
          className="font-[400] text-[#5B6871] tracking-[.1rem]"
        />
      </div>

      <div>
        <CardWrapper className="flex items-center m-3 shadow-sm border border-slate-200">
          <div className="p-4">
            <Label
              text="Want to speak to an expert Career Counsellor?"
              className="text-black font-bold"
            />
            <Label
              text="Explore a list of 1000+ Expert Career Counsellors near you!"
              className="text-[#5B6871]"
            />
          </div>
          <div>
            <button
              className="bg-[#EBEBEB] p-2 mr-2 rounded text-black font-bold"
              type="button"
            >
              See All
            </button>
          </div>
        </CardWrapper>
      </div>
    </div>
  );
}
