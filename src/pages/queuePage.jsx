import React, { useEffect, useState } from 'react';

function QueuePage() {
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
    <div>
      <h1>Dados do WebSocket:</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Aguardando dados do servidor...</p>
      )}
    </div>
  );
}

export default QueuePage;