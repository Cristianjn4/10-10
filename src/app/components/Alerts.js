

export  function Alerts(){

    return(

        <div className="">
            {/*Desktop*/}
            <div className=" fixed items-center bg-[#262223] w-screen lg:px-20 h-10 z-20 gap-5 md:justify-between justify-between text-[10px] lg:text-xs hidden lg:flex md:flex ">

            <p className="flex items-center text-white ">
            <svg class="w-5 text-white-100 pr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />  <circle cx="7" cy="10" r="1" /></svg>
                <span className="text-white">ENCONTRE O SEU <strong>MELHOR SONO</strong></span>
            </p>

            <p className=" items-center text-white hidden md:flex lg:flex">  
                <span className="text-white">🇺🇸 RESTONIC <strong> AMERICAN MATTRESS </strong> </span>
            </p>

            <p className=" items-center text-white hidden md:flex lg:flex">  
                <svg class="w-5 text-white-100 pr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />  <line x1="3" y1="9" x2="7" y2="9" /></svg>
                <span className="text-white">ENTREGA <strong> RÁPIDA,</strong> <strong>GRATUITA</strong> E <strong> ESPECIALIZADA </strong> </span>
            </p>

            </div>


            {/*Mobile*/}

            <div className=" fixed items-center bg-black w-screen lg:px-20 h-10 z-10 gap-5 md:justify-between justify-center text-[10px] lg:text-xs flex lg:hidden md:hidden ">

            <p className="align items-center text-white flex">
            <svg class="w-5 text-white-100 pr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />  <circle cx="7" cy="10" r="1" /></svg>
            <span className="text-white">DURMA EM UM COLCHÃO DE HOTEL TODOS OS DIAS</span>
            </p>

            </div>

        </div>
       
    )
}