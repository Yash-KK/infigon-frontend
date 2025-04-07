import { careerColorMap } from "@/data/Career/result";

const CareerPoints = ({ data, index }: { data: any; index: number }) => {
  const color = careerColorMap[data.color];
  const [scoreNum, totalNum] = data.score.split("/").map(Number);
  const percentage = (scoreNum / totalNum) * 100;

  return (
    <div className="m-3 px-5">
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
                className={`flex items-center justify-center font-bold rounded-full border w-8 h-8 border-white ${color.capsuleBg}`}
              ></span>
            </div>
          </div>
        </div>

        <div className="w-full h-2 mt-2 bg-white rounded-full overflow-hidden border border-gray-300">
          <div
            className={`h-full rounded-full ${color.bg}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CareerPoints;
