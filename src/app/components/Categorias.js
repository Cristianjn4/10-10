export function Categorias(){
    return(
        <div className=" w-full h-auto bg-gradient-to-b bg-white align justify-center py-11 gap-8">

            <h3 className="block lg:hidden text-3xl text-gray-900 align text-center mb-8">
            <strong> Categorias </strong> de Produtos
            </h3>

            <h3 className="hidden md:block text-2xl text-gray-900 md:text-3xl  align text-center mb-8">
            <strong>Conforto</strong>, <strong> Qualidade </strong> e <strong>Tecnologia</strong> que só a <strong>Orner Quartos</strong> pode oferecer            </h3>
            
            <div className="w-2/3 h-auto  md:flex lg:flex align m-auto gap-8 text-center ">
                <div className="bg-transparent w-40 rounded-full m-auto py-3">
                    <a href="/products">
                    <img  src="Ecomax Restonic.png" alt="" className="bg-white w-40 h-40 rounded-full shadow-lg border-2 border-transparent hover:border-blue-600" />
                    </a>
                    <br/>
                    <a href="/products" className=" b-3 font-normal text-black text-center w-auto"> Colchões </a>
                </div>

                <div className="bg-transparent w-40 rounded-full m-auto py-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNylhCd7nvX2qljCKr3xi8Kuq_RM1cL3opw&s" alt="" className="bg-white w-40 h-40 rounded-full shadow-lg border-2 border-transparent hover:border-gray-400" />
                    <br/>
                    <a href="" className=" b-3 font-normal text-black text-center w-auto py-3"> Camas </a>
                </div>

                <div className="bg-transparent w-40 rounded-full m-auto py-4">
                    <img src="https://aladimdecor.fbitsstatic.net/img/p/kit-2-travesseiros-percal-firme-50x70-suporte-firme-151885/338844.jpg" alt="" className="bg-white w-40 h-40 rounded-full shadow-lg border-2 border-transparent hover:border-gray-400" />
                    <br/>
                    <a href="" className=" b-3 font-normal text-black text-center w-auto py-3"> Travesseiros </a>
                </div>

                <div className=" bg-transparent w-40 rounded-full m-auto py-4">
                    <img src="https://cdn.sistemawbuy.com.br/arquivos/dc7db93e78bf0dd8806d89ead6f85ac6/produtos/6598af8fb402c/jogo-de-cama-casal-queen-liso-100-algodao-200-fios-04-pecas-tous-les-jours-branco-6102efd286e58-large-6598af90678a2_mini.jpg" alt="" className="shadow-lg bg-white w-40 h-40 rounded-full border-2 border-transparent hover:border-gray-400" />
                    <br/>
                    <a href="" className=" b-3 font-normal text-black text-center w-auto py-3"> Acessórios   </a>

                </div>
            </div>
           

        </div>
    )
}

