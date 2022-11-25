import play from "../../assets/images/ListaDeLicoes/playBottom.png";
import { Link } from "react-router-dom";

interface PlayerProps{
src: string,
}

const Player = (props: PlayerProps) => {
    return(
<Link to={props.src}> <img className="playL" src={play} /></Link>
    );
};

export default Player;