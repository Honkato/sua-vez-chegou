function Logo({logoName}) {
    return ( 
        <div className="rounded-full bg-slate-600 h-24 w-24 flex justify-center object-center items-center flex-wrap overflow-hidden">
            {logoName}
        </div>
     );
}

export default Logo;