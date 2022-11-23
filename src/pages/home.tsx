import React from "react";
import ListaOrdenada from "../components/listaOrdenada/listaOrdenada";
import Footer from "../components/footer/Footer";
import Slider from "../components/slideDepoimento/SliderDepoimento";
import { Container } from "../components/onboarding/Onboarding.style";
import Aulas from "../components/aulas/Aulas";
import Depoimentos from "../components/footerDepoimentos/Depoimentos";
import faker from "../assets/jsons/Api-test.json"
import Testimony from "../components/testimony/Testimony"

// type HomeProps = {}
// props: HomeProps
const Home = () => {

  // const { Testimonys }= faker

  return (
    <div>
      <Aulas />
      <ListaOrdenada />
      <Depoimentos />
      <Footer />
    </div>
  );
};

export default Home;

/* {Testimonys.map ((testimony)=>(
<Testimony key={testimony.id} id={testimony.id} nome={testimony.nome} profissão={testimony.profissão} post={testimony.post} />
))} */