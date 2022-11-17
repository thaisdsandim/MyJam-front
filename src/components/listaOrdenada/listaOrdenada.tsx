import { Title, SectionCard } from "./listaOrdenada.style";
import GuitarPlayer from "/src/assets/images/home/guitarplayer.png"



const ListaOrdenada = () => {
    return(
        <div>
            <Title>Por que usar o MyJam</Title>

            <SectionCard>

                <div>
                    <img src={GuitarPlayer} />
                </div>

                <ol>
                    <li className="numberCircle"><h3>É gratis</h3>
                    <span>Aprenda a tocar suas músicas favoritas para se divertir sem custo. Não é teste gratis. É gratuito mesmo.</span>
                    </li>

                    <li><h3>Se quiser mais, temos</h3>
                    <span>Se você quiser aprender toda a teoria e técnica depois da sua música favorita, temos planos pagos para que você continue evoluindo do seu jeito.</span>
                    </li>

                    <li><h3>No seu tempo</h3>
                    <span>Ninguém vai te pressionar a praticar horas por dia. Você aprende no seu tempo.</span>
                    </li>

                    <li><h3>Porque faz sentido</h3>
                    <span>Chega daquelas aulas sobre tempos, teorias, partituras e pausas. Aprenda o que você precisa saber pra tocar a primeira música.</span>
                    </li>
                </ol>

            </SectionCard>
        </div>
    )
}

export default ListaOrdenada;