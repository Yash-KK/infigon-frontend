"use client";
import { useState } from "react";

import Button from "../ui/Button";

import { tabs, description } from "@/data/Career/result";
import CareerCard from "../Career/CareerCard";
import { emotionalData } from "@/data/Emotional/result";
import { emotionalPointsCircleData } from "@/data/Emotional/dainelGoleman";
import EmotionalPointsCircle from "./PointsCircle";

const EmotionalResult = () => {
  const [activeTab, setActiveTab] = useState("Your Scores");

  return (
    <div className="p-8 flex-1 bg-white">
      <div className="mt-6 flex flex-wrap gap-6 border-b text-gray-500 text-sm font-medium">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`pb-2 cursor-pointer border-b-2 ${
              activeTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-transparent hover:text-blue-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="mt-8">
        {activeTab === "Your Scores" && (
          <>
            <div className="flex items-center">
              <p className="text-2xl font-semibold pr-5 text-[#0047AB]">
                Your <span className="font-bold">Scores</span>
              </p>

              <div className="h-12 w-0.5 rounded bg-gray-300 mr-5"></div>
              <div className="flex">
                <Button
                  text="Strength"
                  className="flex items-center font-bold p-1 px-3 rounded-full text-[#696969]"
                  leftChild={
                    <span className="flex items-center justify-center font-bold bg-green-500 rounded-full w-8 h-8 mr-2"></span>
                  }
                />
                <Button
                  text="Needs Attention"
                  className="flex items-center font-bold p-1 px-3 rounded-full text-[#696969]"
                  leftChild={
                    <span className="flex items-center justify-center font-bold bg-red-500 rounded-full w-8 h-8 mr-2"></span>
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emotionalData.map((item, idx) => (
                <CareerCard key={idx} data={item} index={idx} />
              ))}
            </div>
          </>
        )}

        {activeTab === "Conclusion" && (
          <>
            <div className="flex items-center">
              <p className="text-2xl font-semibold pr-5 text-[#0047AB]">
                Summarised Result{" "}
              </p>

              <div className="h-12 w-0.5 rounded bg-gray-300 mr-5"></div>
              <div className="flex">
                <Button
                  text="Strength"
                  className="flex items-center font-bold p-1 px-3 rounded-full text-[#696969]"
                  leftChild={
                    <span className="flex items-center justify-center font-bold bg-green-500 rounded-full w-8 h-8 mr-2"></span>
                  }
                />
                <Button
                  text="Needs Attention"
                  className="flex items-center font-bold p-1 px-3 rounded-full text-[#696969]"
                  leftChild={
                    <span className="flex items-center justify-center font-bold bg-red-500 rounded-full w-8 h-8 mr-2"></span>
                  }
                />
              </div>
            </div>
            <div className="flex justify-center gap-8 overflow-x-auto px-6 mt-10">
              {emotionalPointsCircleData.map((item) => (
                <EmotionalPointsCircle
                  key={item.label}
                  number={item.number}
                  label={item.label}
                  score={item.score}
                  total={item.total}
                  color={item.color}
                />
              ))}
            </div>

            <h3 className="text-lg font-semibold text-[#0047AB] mb-4">
              Conclusion
            </h3>
            <div className="space-y-4 bg-blue-500 rounded-xl p-5 text-white font-medium">
              {description}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EmotionalResult;
