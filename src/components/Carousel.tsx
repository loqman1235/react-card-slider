import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import CarouselCard from "./CarouselCard";
import { useEffect, useRef, useState } from "react";

interface CarouselProps {
  gap?: number;
  slidesPerView?: number;
}

const Carousel: React.FC<CarouselProps> = ({ slidesPerView = 4 }) => {
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();

    if (carouselContainerRef.current) {
      carouselContainerRef.current.parentElement!.scrollBy({
        left: cardWidth / slidesPerView,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();

    if (carouselContainerRef.current) {
      carouselContainerRef.current.parentElement!.scrollBy({
        left: -cardWidth / slidesPerView,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (carouselContainerRef.current) {
      setCardWidth(carouselContainerRef.current!.getBoundingClientRect().width);
    }
  }, [carouselContainerRef]);

  return (
    <div className="w-full mt-10">
      <div className="flex items-center justify-between w-full mb-2">
        <div className="flex items-center gap-2 ">
          <button
            className="bg-blue-500
           text-white 
           hover:bg-blue-600 
           transition 
           p-2 flex 
           items-center 
           justify-center
           "
            onClick={handlePrev}
          >
            <MdArrowBackIosNew size={20} />
          </button>
          <button
            className="bg-blue-500 
          text-white 
          hover:bg-blue-600 
          transition 
          p-2
          flex 
          items-center 
          justify-center
          "
            onClick={handleNext}
          >
            <MdArrowForwardIos size={20} />
          </button>
        </div>
      </div>

      <div
        className="
        w-full
        h-[280px] 
        bg-neutral-400
        flex 
        items-center
        overflow-x-auto
        transition
        duration-300
        no-scrollbar
        "
      >
        <div
          className={`w-full flex items-center h-full`}
          ref={carouselContainerRef}
        >
          <CarouselCard
            text="1"
            bg="bg-red-500"
            slidesPerView={slidesPerView}
          />
          <CarouselCard
            text="2"
            bg="bg-green-500"
            slidesPerView={slidesPerView}
          />
          <CarouselCard
            text="3"
            bg="bg-blue-500"
            slidesPerView={slidesPerView}
          />
          <CarouselCard
            text="4"
            bg="bg-yellow-500"
            slidesPerView={slidesPerView}
          />
          <CarouselCard
            text="5"
            bg="bg-purple-500"
            slidesPerView={slidesPerView}
          />
          <CarouselCard
            text="6"
            bg="bg-pink-500"
            slidesPerView={slidesPerView}
          />
          <CarouselCard
            text="7"
            bg="bg-cyan-500"
            slidesPerView={slidesPerView}
          />
          <CarouselCard
            text="8"
            bg="bg-violet-500"
            slidesPerView={slidesPerView}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
