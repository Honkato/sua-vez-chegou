import { useState } from "react";

function SenhaAtual({usuario}) {
    const [senha, setSenha] = useState(0)
    
    return ( 
        <div className="h-16 w-16 p-5 rounded-lg bg-white text-orange-400 flex justify-center items-center font-semibold text-3xl">
            {senha}
        </div>
     );
}

export default SenhaAtual;