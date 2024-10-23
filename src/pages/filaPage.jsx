import { useParams } from "react-router-dom";
import Logo from "../components/logo";
import SenhaAtual from "../components/senhaAtual";

function FilaPage() {
    const params = useParams()
    const empresa = params.empresa
    return ( 
        <div className="w-full h-screen bg-orange-950 flex justify-center items-center flex-col text-center">
            <Logo logoName={empresa}/>
            Senha atual
            <SenhaAtual />
            Sua senha
            <SenhaAtual usuario={''}/>
            <button>sair da fila</button>
        </div>
     );
}

export default FilaPage;