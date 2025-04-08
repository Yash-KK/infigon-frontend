"use client";
import { useState } from "react";

import Button from "../ui/Button";

import { tabs, description, careerData } from "@/data/Career/result";

import CareerCard from "./CareerCard";
import CareerPoints from "./CareerPoints";
import DisplayTabs from "../ui/DiplayTab";
import StepCircle from "../ui/StepCircle";
import Label from "../ui/Label";
import Divider from "../ui/Divider";
const CareerResult = () => {
  const [activeTab, setActiveTab] = useState("Your Scores");

  return (
    <div className="p-8 flex-1 bg-white">
      <DisplayTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="mt-8">
        {activeTab === "Your Scores" && (
          <>
            <div className="flex items-center">
              <p className="text-2xl font-semibold pr-5 text-[#0047AB]">
                Your <span className="font-bold">Scores</span>
              </p>

              <Divider />
              <div className="flex">
                <Button
                  text="Low Relevance"
                  className="flex items-center font-bold p-1 px-3 rounded-full text-[#696969]"
                  leftChild={<StepCircle color="bg-red-500 " />}
                />
                <Button
                  text="Moderate Relevance"
                  className="flex items-center font-bold p-1 px-3 rounded-full text-[#696969]"
                  leftChild={<StepCircle color="bg-yellow-500 " />}
                />
                <Button
                  text="High Relevance"
                  className="flex items-center font-bold p-1 px-3 rounded-full text-[#696969]"
                  leftChild={<StepCircle color="bg-green-500 " />}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {careerData.map((item, idx) => (
                <CareerCard key={idx} data={item} index={idx} />
              ))}
            </div>
          </>
        )}

        {activeTab === "Conclusion" && (
          <>
            <div className="flex items-center">
              <p className="text-2xl font-semibold pr-4 text-[#0047AB]">
                Summarised Result{" "}
              </p>

              <Divider />
              <div className="flex">
                <Button
                  text="Low Relevance"
                  className="flex items-center font-bold p-1 px-3 rounded-full text-[#696969]"
                  leftChild={<StepCircle color="bg-red-500 " />}
                />
                <Button
                  text="Moderate Relevance"
                  className="flex items-center font-bold p-1 px-3 rounded-full text-[#696969]"
                  leftChild={<StepCircle color="bg-yellow-500 " />}
                />
                <Button
                  text="High Relevance"
                  className="flex items-center font-bold p-1 px-3 rounded-full text-[#696969]"
                  leftChild={<StepCircle color="bg-green-500 " />}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {careerData.map((item, idx) => (
                <CareerPoints key={idx} data={item} index={idx} />
              ))}
            </div>
            <Label
              text="Conclusion"
              className="text-lg font-semibold text-[#0047AB] mb-4"
            />
            <div className="space-y-4 bg-yellow-600 rounded-xl p-5 text-white font-medium">
              {description}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CareerResult;
