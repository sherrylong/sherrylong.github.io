import "./Widget.css";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface WidgetProps {
  title: string;
  width?: string;
  children?: React.ReactNode;
}

const Widget: React.FC<WidgetProps> = ({ title, width, children }) => {
  return (
    <div id="widget-background" style={{ width: width }}>
      <div>{title}</div>
      {children}
    </div>
  );
};
export default Widget;
