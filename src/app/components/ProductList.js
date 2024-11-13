export function Lista() {
    return(
        <div className="bg-white">
{/*NAV */}

<div class=" ">
    <div class="border-b border-gray-200 justify-center w-full">
      <nav class=" flex items-ceter gap-x-2 pt-5 justify-center  bg-black  m-auto" aria-label="Tabs">
        <a
          href="#colchoes"
          class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-light text-white hover:border-white focus:border-white focus:font-medium hover:font-medium"
        >
          Colchões
        </a>

        <a
          href="#camas"
          class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-light text-white hover:border-white focus:border-white focus:font-medium hover:font-medium"
        >
          Camas
        </a>

        <a
          href="#sistdesc"
          class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-light text-white hover:border-white focus:border-white focus:font-medium hover:font-medium"
        >
          Comfort+
        </a>

        <a
          href=""
          class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-light text-white hover:border-white focus:border-white focus:font-medium hover:font-medium"
        >
          Travesseiros
        </a>

        <a
          href=""
          class="shrink-0 hidden lg:block md:block border-b-2 border-transparent px-1 pb-4 text-sm font-light text-white hover:border-white focus:border-white focus:font-medium hover:font-medium"
        >
          Acessórios
        </a>

      </nav>
    </div>
  </div>

  {/* COLCHÕES */}
        <div id="colchoes" className="mx-auto max-w-2xl px-4  sm:px-4 sm:py-10 lg:max-w-7xl lg:px-2">
        <h3 className="text-3xl px-8 font-bold text-black py-4">
                    Conheça nossa linha <strong> Colchões. </strong>
                </h3> 
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8 m-14">

            {/** Stallion Talalay */}
            
            <a href="/talalay" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="Stallion Talalay.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Super Macio</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Stallion Talalay</p>
                </div>
                 
            </a>

            {/** Stallion Max */}
            
            <a href="/max" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="Stallion Max.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Super Macio</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Stallion Max</p>
                </div>
                 
            </a>

            {/** Restonic Cambridge */}
            
            <a href="/cambridge" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounde d-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="Cambridge Restonic.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Super Macio</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Restonic Cambridge</p>
                </div>
                 
            </a>

            {/** Restonic Imattress */}
            
            <a href="/imattress" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounde d-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="Imattress Restonic.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Super Macio</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Restonic Imattress</p>
                </div>
                 
            </a>

            {/** Hackney Stallion */}
            
            <a href="/hackney" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounde d-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="hackney.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Macio</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Stallion Hackney</p>
                </div>
                 
            </a>

            {/** Due Alpaca Stallion */}
            
            <a href="/due" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounde d-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="duealpaca.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Macio</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Stallion Due Alpaca</p>
                </div>
                 
            </a>

             {/** Ellis Restonic */}
            
             <a href="/ellis" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounde d-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="https://restonic.com.br/wp-content/uploads/2023/10/Ellis-Medium-min.jpg" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Macio ou Intermediário

</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Restonic Ellis</p>
                </div>
                 
            </a>
              {/** Aspire Restonic */}
                          
              <a href="/aspire" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounde d-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="https://restonic.com.br/wp-content/uploads/2023/10/Aspire-min.jpg" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Macio</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Restonic Aspire Alpaca</p>
                </div>
                 
            </a>

              {/** L736 Restonic */}
                          
              <a href="/l736" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounde d-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="https://restonic.com.br/wp-content/uploads/2023/10/L736-min.jpg" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Super-Macio

</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Restonic L736</p>
                </div>
                 
            </a>

            {/** Yorkshire Restonic */}
                          
            <a href="/yorkshire" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounde d-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="https://restonic.com.br/wp-content/uploads/2023/10/Yorkshire-min.jpg" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Super-Macio

</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Restonic Yorkshire</p>
                </div>
                 
            </a>

            {/** Whindhan Restonic */}
                          
            <a href="/whindhan" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounde d-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="https://restonic.com.br/sistema/wsite/_upl/produtos/42d340017db30ffac77c0b34bd3c43ea.jpg" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Super-Macio

</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Restonic Whindhan</p>
                </div>
                 
            </a>

            {/** Spiral Restonic */}
                          
            <a href="/spiral" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounde d-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="https://restonic.com.br/sistema/wsite/_upl/produtos/57dc8a8e7116523a1cdbb203592c3687.jpg" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Super-Macio

</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Restonic Whindhan Posture Spiral®</p>
                </div>
                 
            </a>

          </div>

        </div>
                  {/* SISTEMAS DE DESCANSO */}
                  <div id="sistdesc" className="mx-auto max-w-2xl px-4  sm:px-4 sm:py-10 lg:max-w-7xl lg:px-2">

        <h3 className="text-3xl px-8 font-bold text-black py-4">
          Sistemas de <strong> Descanso. </strong>
        </h3> 

          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8 m-14">
       
          </div>
          </div>
      </div>
    )
}

