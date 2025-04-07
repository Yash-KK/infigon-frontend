import InfigonIcon from "@/icons/Infigon";
import NotificationIcon from "@/icons/Notification";
import ChevronDownIcon from "@/icons/ChevronDown";
import Label from "./Label";
import Image from "next/image";
import ProfileImage from "../../public/Profile.png";
const AppBar = () => {
  return (
    <div className="flex h-16 items-center py-10py-5 px-30 border-b-1 border-gray-200">
      <div className="flex flex-1">
        <InfigonIcon />
        <div className="flex space-x-5 ml-6">
          <Label text="Home" className="font-medium px-3 py-2" />
          <Label text="My Tests" className="font-medium px-3 py-2" />
          <Label text="My Sessions" className="font-medium px-3 py-2" />
          <Label text="Career Library" className="font-medium px-3 py-2" />
          <Label
            text="Your Report"
            className="text-black font-medium px-3 py-2"
          />
        </div>
      </div>

      <div className="flex items-center pr-2">
        <NotificationIcon />

        <div className="flex justify-center items-center ml-5">
          <Image
            src={ProfileImage}
            alt="Profile"
            height={40}
            width={40}
            className="rounded-full"
          />

          <div className="ml-2">
            <ChevronDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
