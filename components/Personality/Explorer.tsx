import { description, dichotomies, mbtiApplications } from "@/data/Personality/explorer";
import CardWrapper from "../ui/CardWrapper";
import Label from "../ui/Label";

const PersonalityExplorer = () => {


  return (
    <div className="p-8 flex-1">
      <div className="text-4xl font-bold">
        Understanding{" "}
        <span className="text-[#0047AB]">Personality Explorer</span>
      </div>

      <div>
        <Label text="Introduction" className="font-bold text-black pt-5" />
        <p className="text-[#5B6871] pt-1 tracking-wide">
          Congratulations on taking the first step for personalized Career
          Planning & Assessment! We understand the significance of making
          informed decisions as you navigate your academic journey and future
          career. We are committed to empowering individuals with the tools and
          insights needed to confidently navigate the world of careers and
          education.
        </p>
      </div>

      <div>
        <p className="text-[#5B6871] pt-4 tracking-wide">
          <span className="text-black font-bold">
            To understand your personality Myers-Brig Type Indicator (MBTI) test
            was used.
          </span>{" "}
          It is a personality explorer psychometric assessment tool that helps
          individuals understand their preferences, strengths, and areas for
          growth. Developed by Isabel Briggs Myers and Katharine Cook Briggs,
          the MBTI categorizes individuals into 16 personality types based on
          four dichotomies. The goal is to gain deeper self-awareness, enhance
          personal development, and improve interpersonal relationships.
        </p>
      </div>

      <div className="pt-10">
        <Label
          text="The FOUR DICHOTOMIES"
          className="font-bold text-[#0047AB] text-xl"
        />
        <div className="mt-6 flex flex-col px-10">
          {dichotomies.map((pair, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-x-2"
            >
              <CardWrapper className="flex items-center m-3 shadow-sm border border-slate-200 ">
                <div className="p-4 w-full max-w-[300px]">
                  <div className="font-semibold">{pair.left.label}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {pair.left.description}
                  </div>
                </div>
              </CardWrapper>
              <div className="relative w-28 min-w-28">
                <div className="h-1 bg-gray-300 rounded-full" />
                <div className="absolute left-0 w-4 h-4 bg-green-500 rounded-full -translate-y-1/2 top-1/2 transition-all duration-500" />
                <div className="absolute right-0 w-4 h-4 bg-red-500 rounded-full -translate-y-1/2 top-1/2 transition-all duration-500" />
              </div>

              <CardWrapper className="flex items-center m-3 shadow-sm border border-slate-200 ">
                <div className="p-4 w-full max-w-[300px]">
                  <div className="font-semibold">{pair.right.label}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {pair.right.description}
                  </div>
                </div>
              </CardWrapper>
            </div>
          ))}
        </div>

        <div className="pt-10">
          <Label
            text="Purpose, Applications, and Benefits of MBTI in Career Development"
            className="font-bold text-[#0047AB] text-xl mb-4"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mbtiApplications.map((item, idx) => (
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

export default PersonalityExplorer;
