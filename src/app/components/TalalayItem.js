export function TalalayItem() {
    return(

        <section class=" py-8 bg-white md:py-16 antialiased">
        <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0 pt-28">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">

            {/* Stallion Logo */}
                <img src="https://www.colchaostallion.com.br/wp-content/themes/stallion/assets/img/logo-stallion.png" alt="Stallion" class="w-40 block md:float-right"/>

            <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <img class="w-full" src="https://www.colchaostallion.com.br/wp-content/uploads/2023/10/STALLION-TALALAY-NEW-min.png" alt="" />             
              
            {/* Modal toggle */}
            <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="gap-2 float-right flex hover:font-medium" type="button">
            <p className="m-auto">Ver Mais.</p> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </button>

            {/* Main modal */}
            <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-4xl max-h-full">
                    {/* Modal content */}
                    <div class="relative bg-white rounded-lg shadow">
            
                        {/* Modal header */}
                        <div class="flex items-center justify-between p-4 md:p-5 rounded-t ">
                            <div class=""> 
                                {/* Stallion Logo */}
                <img src="https://www.colchaostallion.com.br/wp-content/themes/stallion/assets/img/logo-stallion.png" alt="Stallion" class="w-40 block m-auto"/>

                            </div> 
                            
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-red-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>

                        <img class="w-full" src="https://www.colchaostallion.com.br/wp-content/uploads/2023/10/STALLION-TALALAY-NEW-min.png" alt="" />

                        
                    </div>
                </div>
            </div>

            <br/>


            </div>
    
            <div class="mt-6 sm:mt-8 lg:mt-0">

              <h1 className="text-3xl font-extrabold text-gray-900  ">
                Colchão Talalay
              </h1>
              <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p
                  class="text-2xl font-semibold text-gray-900 sm:text-3xl "
                >
                  Macio
                </p>

              </div>
    
              <br/>
              
              <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <a
                  href="https://api.whatsapp.com/send?phone=5511995379301&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20colch%C3%A3o%20*Stallion%Talalay.*"
                  target="blank"
                  title=""
                  class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-green-500 hover:text-green-500 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  role="button"
                >
                  <svg
                                className="w-5 h-5 -ms-2 me-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 448 512">
                                    <path
                                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  Entrar em contato pelo WhatsApp
                </a>
    
                <a
                  href=""
                  target="blank"
                  title=""
                  class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-black rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-black hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-100 "
                  role="button"
                >
    
                  Ver ficha técnica
                </a>
    
              </div>
              
              <br/>

              <div className=" mt-6 gap-2 text-sm text-black">
                <p class="font-semibold">Altura: 39cm</p>
                <p className="font-light text-black">
                  Solteiro (88x188) - Casal (138x188) - Queen (158x198) - King (198x203)
                </p>
                <br/>

{/* Entrega */}
 
<button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="text-black bg-white hover:bg-black hover:text-white border-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center " type="button">Medidas <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
    </svg>
    </button>
    
    {/* Dropdown menu */}
    <div id="dropdownDivider" class="z-10 hidden bg-white divide-y divide-gray-100 shadow-lg rounded-lg border-2 border-stone-200  w-64 h-44 overflow-y-auto">
        <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownDividerButton">
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Jundiaí</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Itatiba</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Americana</a>
        </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Amparo</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Atibaia</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Barueri</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Bragança Paulista</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Cajamar</a>
            </li>    
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Campinas</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Campo Limpo Paulista</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Hortôlandia</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Indaiatuba</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Itu</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Itupeva</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Jaguariuna</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Louveira</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Morungaba</a>
        </li>
        <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100"> Santana do Parnaiba</a>
        </li>
        <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">São Paulo</a>
        </li>
        <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Valinhos</a>
        </li>
        <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Várzea Paulista</a>
        </li>
        <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Vinhedo</a>
        </li>
        </ul>
        <div class="py-2">
        <a href="ENTREGA.pdf" target="_blank" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Condições de entrega.</a>
        </div>
    </div>
                
             
              {/* MEDIDAS */}
 
            <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="text-black bg-white hover:bg-black hover:text-white border-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center " type="button">Consulte a disponibilidade da entrega. <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                </button>
                
                {/* Dropdown menu */}
                <div id="dropdownDivider" class="z-10 hidden bg-white divide-y divide-gray-100 shadow-lg rounded-lg border-2 border-stone-200  w-44">
                    <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownDividerButton">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Settings</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Earnings</a>
                    </li>
                    </ul>
                    <div class="py-2">
                    <a href="ENTREGA.pdf" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Separated link</a>
                    </div>
                </div>
                

              </div>
    
    
    
              <hr class="my-6 md:my-8 border-gray-200" />
    <div className="text-black">
    <p class="font-bold" dir="ltr">SOBRE O PRODUTO:</p>
    
    <p>Stallion Talalay é um colchão que permite três diferentes confortos, em um só núcleo (core).
        Quando Ultraplush, a camada mais externa é Látex Pulse.
        Quando Superplush, a camada mais externa é D36 Macia.
        E se pode ter um lado mais macio (Látex) e outro mais firme (D36 macio).
        <br/>

        <br/>

    </p>
    <p class="font-bold" dir="ltr">TECIDO:</p>
        (CAPA REMOVÍVEL):
        <br/>
        LADO VERÃO:
        <br/>
        Malha tecido Glacier Gramatura 500g/m²
        <br/>
        70% Poliéster, 27% Polietileno de Alta Densidade (frio), 3% Elastano
        <br/>
        LADO INVERNO:
        <br/>
        Malha tecido Gramatura 430g/m²
        <br/>
        97% Poliéster, 3% Elastano
        <br/>
        <br/>

    <p class="font-bold" dir="ltr">COPOSIÇÃO:</p>
    COVER:
        Látex 1cm
        <br/>
        Crina de Cavalo
        <br/>
        Látex Pulse 3cm (quando Ultraplush)
        <br/>
        Espuma D36 2,5cm (quando Superplush)
        <br/>
        Lã de Ovelha SuperSoft
        <br/>
        Látex 1cm
        <br/>
        CORE:
        <br/>
        Espuma Ultracel® 2,5cm
        <br/>
        Crina de Camelo
        <br/>
        Látex Talalay 5cm
        <br/>
        <br/>
    <p class="font-bold" dir="ltr">MOLEJO:</p>
    <p>
        <p>
            Ensacada Q5 Zoned 18cm.
        </p>
    <br/>

              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}