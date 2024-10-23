import { Link, useParams } from "react-router-dom";
import Logo from "../components/logo";

function EntrarPage() {
    const params = useParams()
    const empresa = params.empresa
    return (
        <div className="w-full h-screen bg-orange-950 flex justify-center items-center flex-col text-center">
            <Logo logoName={empresa} />
            <h2 className="text-white font-semibold">Se deseja ser avisado pelo seu WhatsApp digite seu número de celular</h2>
            <input className="rounded-full p-2 px-4" placeholder="(19) 98765-4321"></input>
            <Link to={'/'+empresa+'/fila'}>
            <button className="p-2 px-4 bg-orange-500 rounded-full">Entrar na fila</button>
            </Link>
        </div>
    );
}

export default EntrarPage;