import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import Logo from "../components/logo";
import SenhaAtual from "../components/senhaAtual";

function QRCodePage() {

    const navigate = useNavigate()
    const params = useParams()
    const empresa = params.empresa
    return ( 
    <div className="w-full h-screen bg-orange-950 flex justify-center items-center flex-col text-wrap text-center">
        <Logo logoName={empresa}/>
        <h2 className="text-orange-400 font-semibold text-2xl">FILA {empresa}</h2>
        <SenhaAtual />
        <h2 className="text-orange-400 font-semibold text-2xl">ESCANEIE O QR CODE PARA ENTRAR NA FILA</h2>
        <Link to={'/'+empresa+'/entrar'}>QRCODE</Link>
        
        {/* <button onClick={()=>{navigate('entrar')}}></button> */}
    </div> 
    );
}

export default QRCodePage;