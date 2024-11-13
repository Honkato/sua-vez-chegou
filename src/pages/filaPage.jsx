import { useParams } from "react-router-dom";
import Logo from "../components/logo";
import SenhaAtual from "../components/senhaAtual";
import { useEffect, useState } from "react";
import ApiRoot from "../service/apiRoot";

function FilaPage() {
    const params = useParams()
    const empresa = params.empresa
    const [senha, setSenha] = useState(0)
    const [usuario, setUsuario] = useState({id: '0', is_turn: false, phone: '', position_in_line: 0})
    const [data, setData] = useState(null);
    const [lastPosition, setLastPosition] = useState(0)

    useEffect(()=>{
      PRECISA FAZER O NEGOCIO PRA FILA COM OS 2 WEBSOCKETS
      1 PARA VER A POSIÇÃO ATUAL E OUTRO PARA VER A ULTIMA PESSOA QUE ENTROU NA FILA
      const u = JSON.parse(localStorage.getItem('user'))
      if (u != null){
        console.log(u)
        setUsuario(u)
      }
      function largestElement(arr) {
        return arr.reduce((largest, current) =>
            (current > largest ? current : largest), arr[0]);
    }
    
      ApiRoot.get('/costumers').then((res)=>{
          let lista = [] 
          console.log(res.data.data);
          let last_position = res.data.data.map((x)=> x.position_in_line);
          console.log('lastPosition');
          console.log(lastPosition);
          setLastPosition(largestElement(last_position))
      })
    },[])
  useEffect(() => {
    // Conectando ao WebSocket
    const socket = new WebSocket('wss://sua-vez-chegou-api.onrender.com/current_costumer_socket/current_costumer_socket');

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
                {lastPosition != 0 ? 
                <>
                    {usuario.is_turn?
                        (
                            <div className="text-orange-500 bg-white rounded-xl h-20 w-52 flex items-center ">SUA VEZ CHEGOU!</div>
                        )
                        :
                        (
                            <div className="flex flex-col items-center">
                        Senha atual
                        <SenhaAtual senha={lastPosition}/>
                        </div>
                        )
                    }
                        <div className="flex flex-col items-center">
                        Sua senha
                        <SenhaAtual senha={usuario.position_in_line}usuario={''}/>
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