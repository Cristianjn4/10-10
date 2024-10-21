export function Destaque(){
    return(
        <div className=" block mt-40 lg:mt-0 w-full h-auto bg-gradient-to-b bg-white align justify-center py-11 gap-8">

            <h3 className="text-3xl text-gray-900 align text-center mb-8">
            Prêmios e <strong> certificados </strong>
            </h3>
            
            <div className=" h-auto  md:flex lg:flex align m-auto gap-8 text-center ">
                <div className="bg-transparent h-auto rounded-full m-auto py-3">
                    <a href="/products">
                    <img  src="https://restonic.com.br/wp-content/uploads/2023/08/selos-2023-min-e1714164950190.png" alt="" className=" lg:px-20" />
                    </a>
                    <br/>
                </div>
            </div>
           

        </div>
    )
}

