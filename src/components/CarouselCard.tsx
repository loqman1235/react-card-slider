import { useEffect, useRef } from "react";

interface CarouselCardProps {
  text: string;
  bg: string;
  gap?: number;
  slidesPerView: number;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  text,
  bg = "bg-red-500",
  slidesPerView,
}) => {
  const carouselCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(carouselCardRef.current?.getBoundingClientRect().width);
  }, [carouselCardRef]);
  return (
    <div
      className={`
        ${bg}
        min-w-[calc(100%/${slidesPerView})] 
        h-full 
        flex 
        items-center 
        justify-center 
        text-white
        text-6xl
        font-bold
        overflow-hidden
        no-scrollbar
      
      `}
      ref={carouselCardRef}
    >
      <h1>{text}</h1>
    </div>
  );
};

export default CarouselCard;
