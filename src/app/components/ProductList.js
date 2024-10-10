export function Lista() {
    return(
        <div className="bg-white">
{/*NAV */}

<div class=" ">
    <div class="border-b border-gray-200 justify-center w-full">
      <nav class=" flex items-ceter gap-5 pt-5 px-2 justify-center  bg-black  m-auto" aria-label="Tabs">
        <a
          href="#colchoes"
          class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-light text-white hover:border-white focus:border-white focus:font-medium hover:font-medium"
        >
          Colchões
        </a>

        <a
          href=""
          class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-light text-white hover:border-white focus:border-white focus:font-medium hover:font-medium"
        >
          Camas
        </a>

        <a
          href=""
          class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-light text-white hover:border-white focus:border-white focus:font-medium hover:font-medium"
        >
          Travesseiros
        </a>

        <a
          href=""
          class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-light text-white   hover:border-white focus:border-white focus:font-medium hover:font-medium"
          aria-current="page"
        >
          Acessórios
        </a>
      </nav>
    </div>
  </div>

  {/* COLCHÕES */}
        <div id="colchoes" className="mx-auto max-w-2xl px-4  sm:px-4 sm:py-10 lg:max-w-7xl lg:px-2">
              
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

            {/** Kingpedic Victoria Latex */}
            
            <a href="/victoria" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounde d-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="Imattress Restonic.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Intermediário</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Kingpedic Victoria Latex</p>
                </div>
                 
            </a>
            
            {/** Kingpedic High Comfort Visco ROLLED */}
            
            <a href="/highcomfort" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounde d-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="Imattress Restonic.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Super Macio</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Kingpedic High Comfort Visco ROLLED</p>
                </div>
                 
            </a>
{/** Kingpedic Victoria Latex */}
            
            <a href="/norwood" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounde d-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="Imattress Restonic.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Intermediário</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Orbhes Norwood</p>
                </div>
                 
            </a>
            
          </div>
        </div>
      </div>
    )
}

