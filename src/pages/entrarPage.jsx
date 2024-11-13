import { Link, useNavigate, useParams } from "react-router-dom";
import Logo from "../components/logo";
import { useState } from "react";

function EntrarPage() {
    const params = useParams()
    const empresa = params.empresa
    const navigate = useNavigate()
    
    return (
        <div className="w-full h-screen text-white font-bold text-2xl gap-5 bg-gray-700 flex justify-center items-center flex-col text-center">
            <Logo logoName={empresa} />
            <h2 className=" w-64">Se deseja ser avisado pelo seu WhatsApp digite seu número de celular quando sua vez chegar!</h2>
            <input type="number" className="rounded-full p-2 px-4 w-72 text-black" placeholder="(19) 98765-4321"></input>
            <Link to={'/'+empresa+'/fila'}>
            <button className="p-2 px-4 bg-orange-500 rounded-full">Entrar na fila</button>
            </Link>
        </div>
    );
}

export default EntrarPage;