import { useState } from "react";

function SenhaAtual({usuario, bgColor, fontColor}) {
    const [senha, setSenha] = useState(0)
    
    return ( 
        <div 
        style={{backgroundColor:bgColor??'#000', color:fontColor??'#fff'}}
        className="h-16 w-16 p-5 rounded-lg flex justify-center items-center font-semibold text-3xl">
            {senha}
        </div>
     );
}

export default SenhaAtual;