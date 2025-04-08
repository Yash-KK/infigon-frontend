import { DashboardProps } from "@/types/types";
import PersonalityExplorer from "@/components/Personality/Explorer";
import PersonalityResult from "@/components/Personality/Result";
import PersonalityTypes from "@/components/Personality/Types";
import Top10CareerMotivators from "./Career/Top10";
import CareerMotivators from "./Career/Motivators";
import DanielGolemanTest from "./Emotional/DanielGoleman";
import CareerResult from "./Career/Result";
import EmotionalResult from "./Emotional/Result";
import EmotionalIntelligence from "./Emotional/Intelligence";
import LearningStyles from "./Learning/Styles";
import LearningResult from "./Learning/Result";
import InterstExplorer from "./Interest/Explorer";
import RAISECModel from "./Interest/RAISEC";
import InterestResult from "./Interest/Result";

const DashboardContent = ({ item, activeChild }: DashboardProps) => {
  if (item.id === "test1") {
    if (activeChild === "Personality Types") return <PersonalityTypes />;
    if (activeChild === "Your Result") return <PersonalityResult />;
    return <PersonalityExplorer />;
  }
  if (item.id === "test2") {
    if (activeChild === "RAISEC Model") return <RAISECModel />;
    if (activeChild === "Your Result") return <InterestResult />;
    return <InterstExplorer />;
  }

  if (item.id === "test3") {
    if (activeChild === "10 Career Motivators")
      return <Top10CareerMotivators />;
    if (activeChild === "Your Result") return <CareerResult />;
    return <CareerMotivators />;
  }
  if (item.id === "test4") {
    if (activeChild === "Daniel Goleman Emotional Intelligence Test")
      return <DanielGolemanTest />;
    if (activeChild === "Your Result") return <EmotionalResult />;
    return <EmotionalIntelligence />;
  }

  if (item.id === "test5") {
    if (activeChild === "Your Result") return <LearningResult />;
    return <LearningStyles />;
  }
};

export default DashboardContent;
