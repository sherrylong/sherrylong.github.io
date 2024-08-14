import "./Widget.css";
import illinois from "../assets/illinois.png";
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
  app: string;
  width?: string;
}

const Widget: React.FC<WidgetProps> = ({ app, width }) => {
  return (
    // <div className="widget-background" style={{ width }}>
    <Drawer>
      <DrawerTrigger>
        <div>{app == "weather" && <Weather />}</div>
        <div>{app == "photos" && <Photos />}</div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
export default Widget;

function Weather() {
  return (
    <div className="widget-background bg-[#4a9cc4] flex">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div>
          <div className="text-white font-semibold text-left">UIUC</div>
          <div className="text-white font-thin text-5xl text-left">26</div>
        </div>
        <div className="text-white text-left text-sm">Computer Science</div>
      </div>
      <div className="w-1/2 h-full flex-col">
        <div className="text-white text-right text-xs">
          <b>Coursework</b> <br />
          Data Structures <br />
          Algorithms <br />
          Database Systems <br />
          Probability & Statistics <br />
          Computer Architecture <br />
        </div>
      </div>
    </div>
  );
}

function Photos() {
  return (
    <div className="widget-background">
      <div>hey!</div>
    </div>
  );
}
