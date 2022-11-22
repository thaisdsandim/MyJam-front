import ListaOrdenada from "../components/listaOrdenada/listaOrdenada";
import Footer from "../components/footer/Footer";
import Slider from "../components/slideDepoimento/SliderDepoimento";
import { Container } from "../components/onboarding/Onboarding.style";
import Aulas from "../components/aulas/Aulas";
import Depoimentos from "../components/footerDepoimentos/Depoimentos";

const Home = () => {
  return (
    <>
      <Aulas />
      <ListaOrdenada />
      <Depoimentos />
      <Footer />
    </>
  );
};

export default Home;
