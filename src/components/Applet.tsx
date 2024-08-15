import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import "./Applet.css";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiGmail } from "react-icons/si";

interface AppletProps {
  label: string;
  link: string;
}

const Applet: React.FC<AppletProps> = ({ label, link }) => {
  const openLink = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger onClick={openLink}>
          <div className="icon-magnify">
            {label == "Email" && (
              <SiGmail className="app-icon bg-white text-[#d2493b] p-1.5" />
            )}
            {label == "LinkedIn" && (
              <FaLinkedinIn className="app-icon bg-[#0a66c2] text-white p-1.5" />
            )}
            {label == "GitHub" && (
              <IoLogoGithub className="app-icon bg-black text-white p-1" />
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent sideOffset={20}>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Applet;
