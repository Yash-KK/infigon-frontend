"use client";
import { useState } from "react";
import Image from "next/image";

import ToolsImage from "../../public/Interest/tools.png";
import Button from "../ui/Button";
import {
  description,
  interactionStyles,
  personality,
  preferences,
  preferrefWorkEnvironment,
  skillsAndStrengths,
  tabs,
} from "@/data/Interest/result";
const InterestResult = () => {
  const [activeTab, setActiveTab] = useState("Personality");

  return (
    <div className="p-8 flex-1 bg-white">
      <div className="flex items-center">
        <p className="text-2xl font-semibold pr-5">
          Your <span className="text-[#309759] font-bold">Result</span>
        </p>
        <div className="h-12 w-0.5 rounded bg-gray-300 mr-5"></div>

        <Button
          className="border-b-2 border-[#309759] mr-5"
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
            <div className="px-4 text-[#5B6871]">
              Congratulations on taking the first step for personalized Career
              Planning & Assessment! We understand the significance of making
              informed decisions as you navigate your academic journey and
              future career. We are committed to empowering individuals with the
              tools and insights needed to confidently navigate the world of
              careers and education.
            </div>
          </>
        )}
        {activeTab === "Preferences" && (
          <>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Preferences
            </h3>
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
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Skills and Strengths
            </h3>
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
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Preferred Work Environment{" "}
            </h3>
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
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Interaction Styles
            </h3>
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
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Conclusion
            </h3>
            <div className="space-y-4 bg-red-400 rounded-xl p-2 text-white font-medium">{description}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default InterestResult;
