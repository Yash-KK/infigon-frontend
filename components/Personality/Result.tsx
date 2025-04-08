"use client";
import { useState } from "react";
import Image from "next/image";
import {
  characteristics,
  comparisonPoints,
  interpersonalInteraction,
  personalityData,
  preferences,
  staticPoint,
  tabs,
  workStyle,
} from "@/data/Personality/results";

import ArchitectImage from "../../public/Personality/Types/Architect.png";
import DisplayTabs from "../ui/DiplayTab";
import Label from "../ui/Label";
const PersonalityResult = () => {
  const [activeTab, setActiveTab] = useState("Personality");

  return (
    <div className="p-8 flex-1 bg-white">
      <h2 className="text-2xl font-semibold text-gray-900">
        Your <span className="text-blue-700 font-bold">Result</span>
      </h2>

      <DisplayTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="mt-8">
        {activeTab === "Personality" && (
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="bg-purple-100 p-4 rounded-2xl">
              <Image
                src={ArchitectImage}
                alt="Personality Icon"
                width={300}
                height={300}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">
                Architect{" "}
                <span className="text-purple-600">| INTJ Personality</span>
              </h3>
              <div className="flex gap-2 mt-3 mb-4">
                <Label
                  className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full"
                  text="INDEPENDENT"
                />
                <Label
                  className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full"
                  text="ANALYTICAL"
                />
                <Label
                  className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full"
                  text="STRATEGIC"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">{personalityData}</p>
            </div>
          </div>
        )}

        {activeTab === "Characteristics" && (
          <>
            <Label
              className="text-lg font-semibold text-blue-600 mb-4"
              text="Characteristics"
            />
            <ul className="space-y-6 list-disc list-inside text-gray-800">
              {characteristics.map((item, idx) => (
                <li key={idx}>
                  <span className="font-bold">{item.title}</span>
                  <p className="ml-5">{item.desc}</p>
                </li>
              ))}
            </ul>
          </>
        )}

        {activeTab === "Strengths/ Weaknesses" && (
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-blue-700 mb-4">
                Strengths
              </h3>
              <div className="space-y-4">
                {comparisonPoints.map((title, idx) => (
                  <div
                    key={idx}
                    className="bg-green-600 text-white p-4 rounded-xl shadow-md"
                  >
                    <div className="flex items-start gap-2">
                      <div className="mt-1 text-white text-lg">•</div>
                      <p className="text-sm">
                        <span className="font-semibold">{title}: </span>
                        {staticPoint}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold text-blue-700 mb-4">
                Weaknesses
              </h3>
              <div className="space-y-4">
                {comparisonPoints.map((title, idx) => (
                  <div
                    key={idx}
                    className="bg-red-500 text-white p-4 rounded-xl shadow-md"
                  >
                    <div className="flex items-start gap-2">
                      <div className="mt-1 text-white text-lg">•</div>
                      <p className="text-sm">
                        <span className="font-semibold">{title}:</span>{" "}
                        {staticPoint}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "Work Style" && (
          <>
            <Label
              text="Work Style"
              className="text-lg font-semibold text-blue-600 mb-4"
            />
            <div className="border border-gray-300 shadow rounded-lg p-3">
              <ul className="space-y-6 list-disc list-inside text-gray-800">
                {workStyle.map((item, idx) => (
                  <li key={idx}>
                    <span className="font-bold">{item.title}</span>
                    <p className="ml-5">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        {activeTab === "Preferences" && (
          <>
            <Label
              text="Preferences"
              className="text-lg font-semibold text-blue-600 mb-4"
            />
            <div className="border border-gray-300 shadow rounded-lg p-3">
              <ul className="space-y-6 text-gray-800">
                {preferences.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="text-lg mt-1">👍</div>
                    <div>
                      <span className="font-bold">{item.title}</span>
                      <p className="ml-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {activeTab === "Interpersonal Interaction" && (
          <>
            <Label
              text="Interpersonal Interaction"
              className="text-lg font-semibold text-blue-600 mb-4"
            />
            <div className="border border-gray-300 shadow rounded-lg p-3">
              <ul className="space-y-6 list-disc list-inside text-gray-800">
                {interpersonalInteraction.map((item, idx) => (
                  <li key={idx}>
                    <span className="font-bold">{item.title}</span>
                    <p className="ml-5">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default PersonalityResult;
