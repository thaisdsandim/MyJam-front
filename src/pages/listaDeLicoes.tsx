import ListLessons from "../components/listLessons/ListaLicoes";
import NavBarListaDeLicoes from "../components/navBarListaDeLicoes/NavBarListaDeLicoes";

function listaDeLicoes() {
    return (
        <div>
            <NavBarListaDeLicoes />
            <ListLessons />
        </div>
    );
}

export default listaDeLicoes;