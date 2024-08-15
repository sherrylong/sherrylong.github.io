import "./Widget.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import uiucBackground from "../assets/uiuc-background.jpeg";
import accentureBackground from "../assets/accenture-background.jpeg";
import lbnlBackground from "../assets/lbnl-background.jpeg";
import nasaBackground from "../assets/nasa-background.png";

interface WidgetProps {
  app: string;
  width?: string;
}

const Widget: React.FC<WidgetProps> = ({ app, width }) => {
  return (
    <div>
      {app == "weather" && <Weather />}
      {app == "photos" && <Photos />}
    </div>
  );
};
export default Widget;

function Weather() {
  return (
    <div className="widget-background bg-[#4a9cc4] flex p-[1rem]">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div>
          <div className="text-white font-semibold text-left">UIUC</div>
          <div className="text-white font-thin text-5xl text-left -ml-1">
            '26
          </div>
        </div>
        <div className="text-white text-left text-sm">Computer Science</div>
      </div>
      <div className="w-1/2 h-full">
        <ul className="text-white text-sm text-right">
          <li>Algorithms</li>
          <li>Data Structures</li>
          <li>Database Systems</li>
          <li>Probability & Statistics</li>
          <li>Computer Architecture</li>
        </ul>
      </div>
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
      className="flex widget-background relative overflow-hidden"
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
