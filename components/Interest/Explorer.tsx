import Label from "../ui/Label";

const InterstExplorer = () => {
  return (
    <div className="p-8 flex-1">
      <div className="text-4xl font-bold">
        Understanding <span className="text-[#309759]">Interest Explorer</span>
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
    </div>
  );
};
export default InterstExplorer;
