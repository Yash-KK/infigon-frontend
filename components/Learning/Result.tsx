"use client";
import { useState } from "react";
import Image from "next/image";

import EarImage from "../../public/Learning/ear.png";
import {
  characterisitics,
  tabs,
  preferences,
  strengths,
  environment,
  workspaceManifestation,
} from "@/data/Learning/result";
const LearningResult = () => {
  const [activeTab, setActiveTab] = useState("Learning Style");

  return (
    <div className="p-8 flex-1 bg-white">
      <div className="flex items-center">
        <p className="text-2xl font-semibold pr-5">
          Your <span className="text-[#DE5AFF] font-bold">Result</span>
        </p>
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
        {activeTab === "Learning Style" && (
          <>
            <div className="flex items-center">
              <Image src={EarImage} alt="tools" height={30} width={30} />
              <h3 className="text-2xl font-bold text-[#FF6969] mx-2 mb-2">
                Kinesthetic
              </h3>
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
        {activeTab === "Characterisitics" && (
          <>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Characterisitics
            </h3>
            <div className="space-y-4">
              {characterisitics.map((item, idx) => (
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
        {activeTab === "Preferences" && (
          <>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Learning Preferences
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

        {activeTab === "Strengths" && (
          <>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Strengths{" "}
            </h3>
            <div className="space-y-4">
              {strengths.map((item, idx) => (
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

        {activeTab === "Environment" && (
          <>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Environment
            </h3>
            <div className="space-y-4">
              {environment.map((item, idx) => (
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

        {activeTab === "Workspace Manifestation" && (
          <>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Manifestation in Workspace
            </h3>
            <div className="space-y-4">
              {workspaceManifestation.map((item, idx) => (
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
      </div>
    </div>
  );
};

export default LearningResult;
