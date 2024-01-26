import Carousel from "./components/Carousel";
import { carouselData } from "./data";

const App = () => {
  return (
    <div className="container mx-auto">
      <Carousel slidesPerView={4} slides={carouselData} />;
    </div>
  );
};

export default App;
