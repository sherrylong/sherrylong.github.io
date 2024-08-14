import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AppletProps {
  icon: React.ElementType;
  label: string;
  link: string;
}

const Applet: React.FC<AppletProps> = ({ icon: Icon, label, link }) => {
  const openLink = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger onClick={openLink}>
          <Icon />
        </TooltipTrigger>
        <TooltipContent sideOffset={20}>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Applet;
