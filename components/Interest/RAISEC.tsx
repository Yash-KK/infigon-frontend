import CardWrapper from "../ui/CardWrapper";
import Label from "../ui/Label";
import PieChartImage from "../../public/Interest/piechart1.png";

import {
  RAISECApplications,
  RAISECUnderstanding,
  RAISECUnderstanding2,
  description,
} from "@/data/Interest/RAISEC";
import Image from "next/image";
const RAISECModel = () => {
  return (
    <div className="p-8 flex-1">
      <div className="text-[#0047AB] text-xl font-bold mb-6">
        Themes of RIASEC
      </div>
      <div className="flex justify-center">
        <Image src={PieChartImage} alt="Pie Chart" height={700} width={700} />
      </div>

      <div className="pt-10">
        <div className="pt-10">
          <Label
            text="Purpose and Applications of RIASEC in Career Development"
            className="font-bold text-[#0047AB] text-xl mb-4"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RAISECApplications.map((item, idx) => (
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
            text="Benefits of Understanding Interest Using RIASEC for Career Planning"
            className="font-bold text-[#0047AB] text-xl mb-4"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RAISECUnderstanding.map((item, idx) => (
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
      <div className="grid grid-cols-1 pt-5 md:grid-cols-2 gap-4">
        {RAISECUnderstanding2.map((item, idx) => (
          <CardWrapper className="bg-[#CACACA33]" key={idx}>
            <div className="p-4 w-full text-sm">
              <div className="font-semibold text-base mb-1">{item}</div>
              <p className="text-gray-600">{description}</p>
            </div>
          </CardWrapper>
        ))}
      </div>
    </div>
  );
};

export default RAISECModel;
