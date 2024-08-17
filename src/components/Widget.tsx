import "./Widget.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Autoplay from "embla-carousel-autoplay";
import uiucBackground from "../assets/uiuc-background.jpeg";
import accentureBackground from "../assets/accenture-background.jpeg";
import lbnlBackground from "../assets/lbnl-background.jpeg";
import nasaBackground from "../assets/nasa-background.png";
import { LuPencil } from "react-icons/lu";

interface WidgetProps {
  app: string;
}

const Widget: React.FC<WidgetProps> = ({ app }) => {
  return (
    <div>
      {app == "reminder" && <Reminder />}
      {app == "weather" && <Weather />}
      {app == "photos" && <Photos />}
      {app == "email" && <Email />}
    </div>
  );
};
export default Widget;

function Weather() {
  return (
    <div className="widget-background widget-sm bg-gradient-to-b from-[#084d90] from-1% to-[#4e86c0] flex p-[1rem]">
      <div className="w-full h-full flex flex-col justify-between">
        <div>
          <div className="text-white font-semibold text-left">UIUC</div>
          <div className="text-white font-thin text-4xl text-left -ml-1">
            '26
          </div>
        </div>
        <div className="text-white text-left text-sm">
          GPA: 3.91 <br /> Computer Science
        </div>
      </div>
    </div>
  );
}

function Reminder() {
  const courses = [
    { value: "opt-1", title: "Algorithms" },
    { value: "opt-2", title: "Data Structures" },
    { value: "opt-3", title: "Database Systems" },
    { value: "opt-4", title: "Probability & Stats" },
  ];
  return (
    <div className="flex flex-col widget-background p-[1rem] pr-0 widget-sm">
      <div className="w-full text-[#f59a30] font-semibold text-sm mb-2">
        Coursework
      </div>
      <RadioGroup defaultValue="opt-1">
        {courses.map((course, idx) => (
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="radio-checked border-[#cbcbcb] border-2"
                value={course.value}
                id={course.value}
              />
              <Label className="font-normal text-xs" htmlFor={course.value}>
                {course.title}
              </Label>
            </div>
            {idx !== courses.length - 1 && (
              <hr className="border-dotted border-[#d9d9d9] ml-6 mr-4 mt-1" />
            )}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

function Photos() {
  const slides = [
    {
      year: "2024",
      position: "Software Developer @ UIUC",
      background: uiucBackground,
    },
    {
      year: "2023",
      position: "Business Analyst Intern @ Accenture",
      background: accentureBackground,
    },
    {
      year: "2022",
      position: "Software Intern @ Berkeley Lab",
      background: lbnlBackground,
    },
    {
      year: "2021",
      position: "Data Science Intern @ NASA Ames",
      background: nasaBackground,
    },
  ];

  return (
    <Carousel
      className="flex widget-background widget-med relative overflow-hidden"
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent className="h-full">
        {slides.map((slide) => (
          <CarouselItem
            key={slide.year}
            className="slide"
            style={{ backgroundImage: `url(${slide.background})` }}
          >
            <div className="slide-text">
              <div className="font-semibold">{slide.position}</div>
              <div className="text-xs">{slide.year}</div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="carousel-arrows left-0 bg-transparent" />
      <CarouselNext className="carousel-arrows right-0 bg-transparent" />
    </Carousel>
  );
}

function Email() {
  const projects = [
    {
      title: "Six Degrees",
      description: "Your social network. Your social media.",
    },
    {
      title: "Rembrandt",
      description: "DALL-E, styled for your brand.",
    },
    { title: "Portfolio", description: "Looks familiar!" },
  ];
  return (
    <div className="flex widget-background widget-med bg-[#f9f9f9] p-[1rem]">
      <div className="flex flex-col justify-between">
        <div className="bg-[#89CC04] w-[2rem] h-[2rem] rounded-full flex items-center justify-center font-bold text-sm">
          SL
        </div>
        <div className="bg-white w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center">
          <LuPencil className="h-[1.2rem] w-[1.2rem] text-[#d4311f]" />
        </div>
      </div>
      <div className="flex flex-col w-full ml-[1.7rem] gap-[0.2rem]">
        {projects.map((project) => (
          <div className="email-background flex flex-col text-xs">
            <div className="font-semibold">{project.title}</div>
            <div className="text-[#7a7b7d]">{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
