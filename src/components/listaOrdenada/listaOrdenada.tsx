import { Title, SectionCard, Container } from "./listaOrdenada.style";
import GuitarPlayer from "/src/assets/images/home/guitarplayer.png";

const ListaOrdenada = () => {
  return (
    <Container>
      <Title>Por que usar o MyJam</Title>
      <SectionCard>
        <div className="guitarPlayer">
          <img src={GuitarPlayer} />
        </div>

        <div className="aside">
          <div className="list-row">
            <div className="numberCircle">
              <p>
                <span className="number">1</span> É gratis
              </p>
            </div>
          </div>
          <span>
            Aprenda a tocar suas músicas favoritas para se divertir sem custo.
            Não é teste gratis. É gratuito mesmo.
          </span>
          <hr />

          <div className="list-row">
            <div className="numberCircle">
              <p>
                <span className="number">2</span> No seu tempo
              </p>
            </div>
          </div>
          <span>
            Ninguém vai te pressionar a praticar horas por dia. Você aprende no
            seu tempo.
          </span>
          <hr />

          <div className="list-row">
            <div className="numberCircle">
              <p>
                <span className="number">3</span> Porque faz sentido
              </p>
            </div>
          </div>
          <span>
            Chega daquelas aulas sobre tempos, teorias, partituras e pausas.
            Aprenda o que você precisa saber pra tocar a primeira música.
          </span>
          <hr />

          <div className="list-row">
            <div className="numberCircle">
              <p>
                <span className="number">4</span> Se quiser mais, temos
              </p>
            </div>
          </div>
          <span>
            Se você quiser aprender toda a teoria e técnica depois da sua música
            favorita, temos planos pagos para que você continue evoluindo do seu
            jeito.
          </span>
        </div>
      </SectionCard>
    </Container>
  );
};

export default ListaOrdenada;
