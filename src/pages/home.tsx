import ListaOrdenada from "../components/listaOrdenada/listaOrdenada";
import Footer from "../components/footer/Footer";
import Slider from "../components/slideDepoimento/SliderDepoimento";
import { Container } from "../components/onboarding/Onboarding.style";

const Home = () => {
  return (
    <>
    
      <ListaOrdenada/>
      <Slider />
      <Footer />
    
    </>
  );
};

export default Home;
