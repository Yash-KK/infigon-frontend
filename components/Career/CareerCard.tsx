import { careerColorMap } from "@/data/Career/result";
import { emotionalColorMap } from "@/data/Emotional/result";
interface CareerData {
  title: string;
  score: string;
  rank: number;
  description: string;
  pros: string[];
  cons: string[];
  color: string;
}
const CareerCard = ({ data, index }: { data: CareerData; index: number }) => {
  const color = emotionalColorMap[data.color] ?? careerColorMap[data.color];

  return (
    <div className="m-3 px-2">
      <div>
        <div className={`flex items-center justify-between`}>
          <span
            className={`flex items-center justify-center border font-bold rounded-full w-8 h-8 mr-2 ${color.border}`}
          >
            {index + 1}
          </span>
          <div className={`font-semibold ${color.text}`}>{data.title}</div>
          <div>
            <div
              className={`flex items-center justify-between px-2 py-1 rounded-full ${color.bg}`}
            >
              <div className="text-white font-semibold">{data.score}</div>
              <div className="px-1" />
              <span
                className={`flex items-center justify-center font-bold rounded-full border w-8 h-8 border border-white ${color.capsuleBg}`}
              ></span>
            </div>
          </div>
        </div>

        <div className={`p-4 m-1 mt-2 rounded-md ${color.border} border`}>
          <p className="mb-2">{data.description}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <div className="font-semibold">Pros:</div>
            {data.pros.map((pro: string, idx: number) => (
              <li key={`pro-${idx}`}>{pro}</li>
            ))}
            <div className="font-semibold">Cons:</div>
            {data.cons.map((con: string, idx: number) => (
              <li key={`con-${idx}`}>{con}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
