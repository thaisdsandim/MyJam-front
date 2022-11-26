import React from "react";
import ListaOrdenada from "../components/listaOrdenada/listaOrdenada";
import Footer from "../components/footer/Footer";
import Slider from "../components/slideDepoimento/SliderDepoimento";
import Aulas from "../components/aulas/Aulas";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Aulas />
      <ListaOrdenada />
      <Slider />
      <Footer />
    </div>
  );
};

export default Home;
