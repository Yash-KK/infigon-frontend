"use client";
import { useState } from "react";
import Image from "next/image";

import ToolsImage from "../../public/Interest/tools.png";
import Button from "../ui/Button";
import {
  description,
  interactionStyles,
  personality,
  personalityData,
  preferences,
  preferrefWorkEnvironment,
  skillsAndStrengths,
  tabs,
} from "@/data/Interest/result";
import Divider from "../ui/Divider";
import DisplayTabs from "../ui/DiplayTab";
import Label from "../ui/Label";
const InterestResult = () => {
  const [activeTab, setActiveTab] = useState("Personality");

  return (
    <div className="p-8 flex-1 bg-white">
      <div className="flex items-center">
        <p className="text-2xl font-semibold pr-5">
          Your <span className="text-[#309759] font-bold">Result</span>
        </p>
        <Divider />

        <Button
          className="border-b-2 border-[#309759] mx-5"
          textClassName="font-bold text-black pb-1"
          text="PRIMARY INTEREST"
        />

        <Button
          className="mr-5"
          textClassName="font-bold  pb-1"
          text="SECONDARY INTEREST"
        />
        <Button
          className="mr-5"
          textClassName="font-bold  pb-1"
          text="TERTIARY INTEREST"
        />
      </div>
      <DisplayTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="mt-8">
        {activeTab === "Personality" && (
          <>
            <div className="flex items-center">
              <Image src={ToolsImage} alt="tools" height={50} width={50} />
              <h3 className="text-2xl font-bold text-[#FF6969] mx-2 mb-2">
                Realistic (R)
              </h3>
            </div>

            <div className="p-4">
              {personality.map((item, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 border border-red-500 shadow rounded-4xl p-3 m-1 bg-white"
                >
                  <p className="text-red-500 whitespace-nowrap">{item.title}</p>
                </div>
              ))}
            </div>
            <div className="px-4 text-[#5B6871]">{personalityData}</div>
          </>
        )}
        {activeTab === "Preferences" && (
          <>
            <Label
              text="Preferences"
              className="text-lg font-semibold text-blue-600 mb-4"
            />
            <div className="space-y-4">
              {preferences.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 border border-gray-300 shadow rounded-lg p-3 bg-white"
                >
                  <span className="text-lg text-gray-700">•</span>
                  <p className="text-gray-800">{item.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}
        {activeTab === "Skills and Strengths" && (
          <>
            <Label
              text=" Skills and Strengths"
              className="text-lg font-semibold text-blue-600 mb-4"
            />
            <div className="space-y-4">
              {skillsAndStrengths.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 border border-gray-300 shadow rounded-lg p-3 bg-white"
                >
                  <span className="text-lg text-gray-700">•</span>
                  <p className="text-gray-800">{item.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}
        {activeTab === "Preferred Work Environment" && (
          <>
            <Label
              text="Preferred Work Environment"
              className="text-lg font-semibold text-blue-600 mb-4"
            />
            <div className="space-y-4">
              {preferrefWorkEnvironment.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 border border-gray-300 shadow rounded-lg p-3 bg-white"
                >
                  <span className="text-lg text-black mt-[2px]">➤</span>
                  <p className="text-gray-800">{item.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "Interaction Styles" && (
          <>
            <Label
              text="Interaction Styles"
              className="text-lg font-semibold text-blue-600 mb-4"
            />

            <div className="space-y-4">
              {interactionStyles.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 border border-gray-300 shadow rounded-lg p-3 bg-white"
                >
                  <span className="text-lg text-gray-700">•</span>
                  <p className="text-gray-800">{item.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "Conclusion" && (
          <>
            <Label
              text="Conclusion"
              className="text-lg font-semibold text-blue-600 mb-4"
            />
            <div className="space-y-4 bg-red-400 rounded-xl  p-5 text-white font-medium">
              {description}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InterestResult;
