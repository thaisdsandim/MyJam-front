import { Title, SectionCards } from "./cards.style";

const Cards = () => {
    return(
        <div>
            <Title>Por que usar o MyJam</Title>

            <SectionCards>

                <div className="cards">
                    <h2>No seu tempo</h2>
                    <p>Ninguém vai te pressionar a praticar horas por dia. Você aprende no seu tempo. (Você é livre pra praticar...)</p>
                </div>

                <div className="cards">
                    <h2>É gratis</h2>
                    <p>Aprenda a tocar suas músicas favoritas para se divertir sem custo. Não é teste gratis. É gratuito mesmo.</p>
                </div>

                <div className="cards">
                    <h2>Porque faz sentido</h2>
                    <p>Chega daquelas aulas sobre tempos, teorias, partituras e pausas. Aprenda o que você precisa saber pra tocar a primeira música.</p>
                </div>

                <div className="cards">
                    <h2>Se quiser mais, temos</h2>
                    <p>Se você quiser aprender toda a teoria e técnica depois da sua música favorita, temos planos pagos para que você continue evoluindo do seu jeito.</p>
                </div>

            </SectionCards>
        </div>
    )
}

export default Cards;