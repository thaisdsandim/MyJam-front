import Footer from "../components/footer/Footer";
import Depoimentos from "../components/footerDepoimentos/Depoimentos";
import Slider from "../components/slideDepoimento/SliderDepoimento";

const Home = () => {
  return (
    <div>
      <Depoimentos />
      <Slider />
      <Footer />
    </div>
  );
};

export default Home;
