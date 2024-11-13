import { useParams } from "react-router-dom";
import Logo from "../components/logo";
import SenhaAtual from "../components/senhaAtual";
import { useEffect, useState } from "react";

function FilaPage() {
    const params = useParams()
    const empresa = params.empresa
    const [senha, setSenha] = useState(0)
    const [senhaUsuario, setSenhaUsuario] = useState(0)
    const [data, setData] = useState(null);

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
    return ( 
        <div className="w-full h-screen gap-8 bg-gray-700 text-white font-bold text-2xl flex justify-center items-center flex-col text-center">
            <Logo logoName={empresa}/>
            <div>
                {/* <h1>Dados do WebSocket:</h1> */}
                {data ? 
                <>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                    {senha == senhaUsuario & senha !=0?
                        (
                            <div className="text-orange-500 bg-white rounded-xl h-20 w-52 flex items-center ">SUA VEZ CHEGOU!</div>
                        )
                        :
                        (
                            <div className="flex flex-col items-center">
                        Senha atual
                        <SenhaAtual senha={senha}/>
                        </div>
                        )
                    }
                        <div className="flex flex-col items-center">
                        Sua senha
                        <SenhaAtual senha={senha}usuario={''}/>
                        </div>
                    </>
                 : (
                    <p>Aguardando dados do servidor...</p>
                )}
            </div>
            
            
            <button className="bg-orange-500 w-64 rounded-full">sair da fila</button>
        </div>
     );
}

export default FilaPage;