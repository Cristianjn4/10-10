export function About(){
    return(

        <div className="bg-white">

                <div className="hidden md:flex justify-center gap-10 p-10">
                    <img src="logoOrn.png" alt="" className="h-20 "/>
                    <img src="restonic.png" alt="" className=" h-20 "/>
                </div>        

        <section className="pb-10 py-10 lg:top-0 md:top-0 relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">

                <div className="lg:pr-24 flex items-center ">
                    <div className="data w-full">
                        
                        <h2 class="font-manrope font-bold text-3xl lg:text-5xl text-black mb-9 max-lg:text-center relative"> Sobre nós</h2>
                        <p className="font-normal text-base leading-8 text-black max-lg:text-center max-w-2xl mx-auto">
                        Bem-vindo à Orner Colchões, sua loja exclusiva de colchões direto da fábrica Restonic. 
                        Temos o orgulho de oferecer o melhor em conforto e qualidade para o sono. Com o compromisso do 
                        melhor preço, entrega gratuita para região e diversas formas de pagamento. 
                        Tornamos mais acessível do que nunca investir na sua saúde e bem-estar. 
                        <br/>
                        
                        <br/>
                        Na Orner Colchões, não só nos dedicamos a fornecer colchões de alta performance, 
                        mas também criamos ambientes acolhedores, confortáveis e sofisticados com o padrão Restonic. 
                        Cada colchão é projetado para oferecer suporte excepcional e conforto personalizado, 
                        garantindo noites de sono revitalizantes e energizantes.
                        </p>
                    </div>

                </div>
                <div className="img-box ">
                    <img src="equipe.jpg" alt="About Us tailwind page"
                        className=" py-10 lg:block rounded-xl"/>
                </div>
            </div>
        </div>
        </section>

        <section class="py-8 lg:py-8 relative">
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative ">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
                <div class="img-box">
                    <img src="ilustração familia.png" alt="About Us tailwind page"
                        class="max-lg:mx-auto w-full rounded-xl"/>
                </div>
                <div class="lg:pl-[100px] flex items-center">
                    <div class="data w-full">
                        <h2
                            class="font-manrope font-bold text-3xl lg:text-5xl text-black mb-9 max-lg:text-center relative"> Você em primeiro lugar</h2>
                        <p class="font-normal text-base leading-8 text-black max-lg:text-center max-w-2xl mx-auto">
                        Visite a loja mais proxima  e descubra nossa ampla gama de colchões, desde os clássicos até os mais inovadores, 
                        todos projetados para atender às suas necessidades individuais. Nossa equipe experiente está à disposição para 
                        oferecer orientação personalizada e ajudá-lo a encontrar o colchão perfeito para você e sua família.
                        <br/><br/>
                        Casa Orner Colchões Loja Exclusiva Restonic - O melhor para seu sono, o melhor para sua vida.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        

        </div>


    )
}
