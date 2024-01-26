interface CarouselCardProps {
  image: string;
  slidesPerView: number;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  image,
  slidesPerView,
}) => {
  return (
    <div
      className={`
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
    >
      <img src={image} alt="poster" className="w-full h-full object-cover" />
    </div>
  );
};

export default CarouselCard;
