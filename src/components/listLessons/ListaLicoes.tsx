import violao from "../../assets/images/ListaDeLicoes/violao.png";
import play from "../../assets/images/ListaDeLicoes/playBottom.png";
import { Lessons } from "./ListaLicoes.style";

const ListLessons = () => {
  return (
    <>
      <Lessons>
        <div className="Infos">
          <h3 className="infoH">lição 1</h3>
          
          <div className="divViola">
            <img className="viola" src={violao} />
          </div>

          <img className="playL" src={play} />
        </div>
      </Lessons>
      <Lessons>
        <div className="Infos">
          <h3 className="infoH">lição 2</h3>
          
          <div className="divViola">
            <img className="viola" src={violao} />
          </div>

          <img className="playL" src={play} />
        </div>
      </Lessons>
      <Lessons>
        <div className="Infos">
          <h3 className="infoH">lição 3</h3>
          
          <div className="divViola">
            <img className="viola" src={violao} />
          </div>

          <img className="playL" src={play} />
        </div>
      </Lessons>
      <Lessons>
        <div className="Infos">
          <h3 className="infoH">lição 4</h3>
          
          <div className="divViola">
            <img className="viola" src={violao} />
          </div>

          <img className="playL" src={play} />
        </div>
      </Lessons>
      <Lessons>
        <div className="Infos">
          <h3 className="infoH">lição 5</h3>
          
          <div className="divViola">
            <img className="viola" src={violao} />
          </div>

          <img className="playL" src={play} />
        </div>
      </Lessons>
    </>
  );
};

export default ListLessons;
