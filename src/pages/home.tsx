import ListaOrdenada from "../components/listaOrdenada/listaOrdenada";
import Footer from "../components/footer/Footer";
import Slider from "../components/slideDepoimento/SliderDepoimento";
import { Container } from "../components/onboarding/Onboarding.style";
import Aulas from "../components/aulas/Aulas";

const Home = () => {
  return (
    <>
      <Aulas/>
      <ListaOrdenada/>
      <Slider />
      <Footer />
    
    </>
  );
};

export default Home;
