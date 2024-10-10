export default function FAQ() {
    return(

        <div className="bg-white py-20">

            
        <div className=" w-full h-auto bg-white px-6 pt-10  pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-2xl sm:px-10">
    <div className="mx-auto px-5">
        <div className="text-black flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
            <p className="mt-3 font-light text-lg text-neutral-500 md:text-xl">Perguntas Frequentes</p> 
            <br/>
            <p className="mt-3 font-medium text-lg text-black md:text-xl text-center">
            Saiba mais sobre a Orner Quartos e nossa política de suporte e atendimento ao cliente.
            </p>

        </div>
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div className="py-5">
                <details className="group">
                    <summary className="text-black flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Quais as formas de pagamento? / Formas de pagamento </span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600"> 
                        Aceitamos pagamentos no 💳 cartão de crédito em até 10x SEM JUROS - 💸 No débito, dinheiro ou PIX com 10% de desconto - 🪙 Condições especiais disponíveis em loja.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className=" text-black text-black flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Qual o custo do envio? / Frete </span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    Entregamos de forma gratuita para região de São Paulo, consulte seu CEP no momento da compra para validar se entregamos em sua localidade.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="text-black text-black flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Como os envios são realizados? </span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    A Orner Quartos conta com uma transportadora própria, o que permite envio mais rápido da mercadoria e na baixa incidência de avarias para com o produto. Prezamos por uma entrega mais rápida e segura, para trazer a melhor experiência de compra para nossos clientes.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="text-black flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Onde posso receber meu pedido? </span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    Realizamos entrega para região de São Paulo, capital e interior. <br/><br/>
                    Regiões atendidas: 
                        Jundiaí,
                        Itatiba,
                        Americana,
                        Amparo,
                        Atibaia,
                        Barueri,
                        Bragança Paulista,
                        Cajamar,
                        Campinas,
                        Campo Limpo Paulista,
                        Hortôlandia,
                        Indaiatuba,
                        Itu,
                        Itupeva,
                        Jaguariuna,
                        Louveira,
                        Morungaba,
                        Santana do Parnaiba,
                        São Paulo,
                        Valinhos,
                        Várzea Paulista,
                        Vinhedo.


                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="text-black flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Quanto tempo meu pedido vai demorar para chegar? </span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    Havendo a disponibilidade de estoque em apenas 12H a Orner Quartos relaiza a entrega e o melhor, sem custos adicionais ao seu pedido! Caso não haja a disponibilidade temos um prazo de espera de pelo menos 15 dias para que o produto seja enviado.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="text-black flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> O que devo fazer se o produto não chega em bom estado? </span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    Entre em contato conosco pelo e-mail casaorner.digital@gmail.com ou via Whatsapp - (11) 99537-9301 para que possamos das início a verificação das evidências e a tratativa sobre manutenção ou troca do produto.
                    </p>
                </details>
                    </div>

                    <div className="py-5">
                <details className="group">
                    <summary className="text-black flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> O que é um colchão ROLLED? </span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    Os colchões Rolleds são produzidos com características especiais que permitem que os mesmos sejam embalados prensados a vácuo e enrolados. Esta situação só é possível em razão da alta expertise de fabricação da Restonic e da elevada qualidade dos componentes utilizados para fabricação deste colchão.                    </p>
                </details>
            </div>

                    <div className="py-5">
                <details className="group">
                    <summary className="text-black flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Como funciona a garantia? </span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    Antes de prosseguir, recomendamos que você leia primeiramente a garantia em nossa seção que trata deste assunto. Caso não possua mais o certificado, você pode fazer o download dele. Para ter direito a solicitar a garantia, é importante observar que a compra deve ter sido feita no máximo há 1 ano. Dessa forma, você poderá requerer a garantia dentro desse prazo estabelecido.
                    </p>
                </details>
                    </div>


                    <div className="py-5">
                <details className="group">
                    <summary className="text-black flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Posso utilizar um colchão novo em uma base antiga? </span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    O seu novo colchão deve ser utilizado sobre uma superfície reta, estruturada e integra. Caso sua base ou cama, atendam estes requisitos, não existe restrição. Bases sem o suporte adequado, podem causar danos a estrutura de seu novo colchão, afetando assim também na aprovação ou não da troca dentro da garantia.                    </p>
                </details>
                    </div>









            </div>
                
            </div>
        </div>
        </div>
    )
}