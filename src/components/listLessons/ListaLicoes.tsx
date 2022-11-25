import violao from "../../assets/images/ListaDeLicoes/violao.png";
import { Lessons, Enquadro } from "./ListaLicoes.style";
import Player from "./Playlessons";

const ListLessons = () => {
  return (
    <>
      <Enquadro>
        <Lessons>
          <div className="Infos">
            <h3 className="infoH">lição 1</h3>

            <div className="divViola">
              <img className="viola" src={violao} />
            </div>

            <Player src="/lessons/1" />
          </div>
        </Lessons>
        <Lessons>
          <div className="Infos">
            <h3 className="infoH">lição 2</h3>
            <div className="divViola">
              <img className="viola" src={violao} />
            </div>
            <Player src="/lessons/2" />
          </div>
        </Lessons>
        <Lessons>
          <div className="Infos">
            <h3 className="infoH">lição 3</h3>
            <div className="divViola">
              <img className="viola" src={violao} />
            </div>
            <Player src="/lessons/3" />
          </div>
        </Lessons>
        <Lessons>
          <div className="Infos">
            <h3 className="infoH">lição 4</h3>
            <div className="divViola">
              <img className="viola" src={violao} />
            </div>
            <Player src="/lessons/4" />
          </div>
        </Lessons>
        <Lessons>
          <div className="Infos">
            <h3 className="infoH">lição 5</h3>
            <div className="divViola">
              <img className="viola" src={violao} />
            </div>
            <Player src="/lessons/5" />
          </div>
        </Lessons>
      </Enquadro>
    </>
  );
};

export default ListLessons;
