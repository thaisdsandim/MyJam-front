import faker from "../../assets/jsons/Api-test.json"
import Icon from "../../assets/images/Avatar-Maker.png"
import { Link } from "react-router-dom";



type TestimonyProps = {
    id: number,
    nome: string,
    profissão: string,
    post: string
  }
  
const Testimony = (props: TestimonyProps) =>{

return(
<>

<div>
<Link to={`/${props.id}`} />
  <div>
    <h3>
    {props.post}
    </h3>
  </div>
  <div className="fotoDepoimento">
    <img src={Icon} />
    <div>
        
      <p>{props.nome}</p>
      <span>{props.profissão}</span>
    </div>
  </div>

</div>
</>
)};


export default Testimony;