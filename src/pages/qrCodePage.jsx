import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import Logo from "../components/logo";
import SenhaAtual from "../components/senhaAtual";
import { useEffect, useState } from "react";
import QRCode from 'qrcode'

// import htmlPage from './html.jsx'
// import QRCode from '../service/qrcode'
function QRCodePage() {

    const navigate = useNavigate()
    const params = useParams()
    const empresa = params.empresa
    // const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')
    const [data, setData] = useState(null);
    const [senha, setSenha] = useState(0)

  useEffect(() => {
    // Conectando ao WebSocket
    const socket = new WebSocket('ws://sua-vez-chegou-api.onrender.com/current_costumer_socket/current_costumer_socket');

    // Escuta por mensagens do servidor
    socket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      setData(receivedData); // Atualiza o estado com os dados recebidos
    };

    // Limpeza ao desmontar o componente
    return () => {
      socket.close();
    };
  }, []);

    useEffect(()=>{
        GenerateQRCode(empresa)
    },[])
    
    const GenerateQRCode = (url) => {
		QRCode.toDataURL(`http://localhost:5173/${url}/entrar`, {
			width: 400,
			margin: 2,
			color: {
				dark: '#000000',
				light: '#FFFFFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}
    return ( 
    <div className="w-full gap-5 h-screen bg-gray-700 flex justify-center items-center flex-col text-wrap text-center">
        <Logo logoName={empresa}/>
        <h2 className="text-orange-400 font-semibold text-2xl">FILA {empresa}</h2>
        <SenhaAtual senha={senha}/>
        <h2 className="text-orange-400 font-semibold text-2xl">ESCANEIE O QR CODE PARA ENTRAR NA FILA</h2>
        <div className="app">
			{qr && <>
				<img src={qr} />
				{/* <a href={qr} download="qrcode.png">Download</a> */}
			</>}
        <Link to={'/'+empresa+'/entrar'}>QRCODE</Link>
		</div>
        {/* <div dangerouslySetInnerHTML={{__html: htmlPage}}/> */}
        {/* <button onClick={()=>{navigate('entrar')}}></button> */}
    </div> 
    );
}

export default QRCodePage;