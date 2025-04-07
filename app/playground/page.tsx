import AppBar from "@/components/ui/AppBar";
import CareerOptions from "@/components/CareerOptions";
import Dashboard from "@/components/Dashboard";
import Intro from "@/components/Intro";


export default function Playground() {
  return (
    <div>
      <AppBar />
      <Intro />
      <CareerOptions />
      <Dashboard />
    </div>
  );
}
