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
  introduction,
} from "@/data/Learning/result";
import DisplayTabs from "../ui/DiplayTab";
import Label from "../ui/Label";
const LearningResult = () => {
  const [activeTab, setActiveTab] = useState("Learning Style");

  return (
    <div className="p-8 flex-1 bg-white">
      <div className="flex items-center">
        <p className="text-2xl font-semibold pr-5">
          Your <span className="text-[#DE5AFF] font-bold">Result</span>
        </p>
      </div>
      <DisplayTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="mt-8">
        {activeTab === "Learning Style" && (
          <>
            <div className="flex items-center">
              <Image src={EarImage} alt="tools" height={30} width={30} />
              <Label
                text="Kinesthetic"
                className="text-2xl font-bold text-[#FF6969] mx-2 mb-2"
              />
            </div>

            <div className="px-4 text-[#5B6871]">{introduction}</div>
          </>
        )}
        {activeTab === "Characterisitics" && (
          <>
            <Label
              text="Characterisitics"
              className="text-lg font-semibold text-blue-600 mb-4"
            />
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
            <Label
              text="Learning Preferences"
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

        {activeTab === "Strengths" && (
          <>
            <Label
              text="Strengths"
              className="text-lg font-semibold text-blue-600 mb-4"
            />
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
            <Label
              text="Environment"
              className="text-lg font-semibold text-blue-600 mb-4"
            />
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
            <Label
              text="Manifestation in Workspace"
              className="text-lg font-semibold text-blue-600 mb-4"
            />
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
