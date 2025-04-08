import Button from "./ui/Button";
import Label from "./ui/Label";

const CareerOptions = () => {
  return (
    <div className="hidden md:flex flex-col md:flex-row items-center border-1 border-gray-300 p-2 md:p-1">
      <div className="flex justify-between items-center w-4/7 p-4 ">
        <div className="text-[#999CA1] text-xl text-right mr-15 flex-1">
          Your <span className="font-bold text-[#0047AB]">TOP 3</span> Career
          Options
        </div>
        <div className="flex w-2/5 space-x-5">
          <Button
            text="Enginner"
            textClassName="blur-[2px]"
            className="flex items-center border border-gray-300 p-1 px-3 rounded-full text-[#696969]"
            leftChild={
              <span className="flex items-center justify-center font-bold bg-gray-300 text-white rounded-full w-8 h-8 mr-2">
                1
              </span>
            }
          />
          <Button
            text="Doctor"
            textClassName="blur-[2px]"
            className="flex items-center border border-gray-300 p-1 px-3 rounded-full text-[#696969]"
            leftChild={
              <span className="flex items-center justify-center font-bold bg-gray-300 text-white rounded-full w-8 h-8 mr-2">
                2
              </span>
            }
          />
          <Button
            text="Teacher"
            textClassName="blur-[2px]"
            className="flex items-center border border-gray-300 p-1 px-3 rounded-full text-[#696969]"
            leftChild={
              <span className="flex items-center justify-center font-bold bg-gray-300 text-white rounded-full w-8 h-8 mr-2">
                3
              </span>
            }
          />
        </div>
      </div>
      <div className="h-12 w-0.5 rounded bg-gray-300 mx-2"></div>
      <div className="flex items-center p-4 flex-1">
        <Label
          text="Choose them right here! "
          className="font-bold text-xl text-black mr-5"
        />

        <Button
          text="Your Career Options"
          className="flex items-center bg-blue-900 p-2 px-3 rounded text-[#696969]"
          textClassName="text-white font-bold"
        />
      </div>
    </div>
  );
};
export default CareerOptions;
