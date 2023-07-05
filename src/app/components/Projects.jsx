const Projects = () => {
    return ( 
        <div className="p-52" id="projetos">
            <div className="mt-16">
                <h1 className="text-yellow-200 font-abc text-5xl font-semibold text-center">
                        Projetos
                </h1>
            </div>

            <div className="flex flex-wrap justify-center gap-20 mt-28">

                <div className="w-96 h-96 shadow-3xl hover:bg-yellow-200 transition duration-1000">
                    <div className="relative">

                            <img src="./movies-lib.png" alt="" width={365} className="mt-3 ml-2.5 bg-cover"/>
  
                        <a href="https://movies-lib-silk-nine.vercel.app/" target="_blank">
                            <div class="image__overlay">
                                <h3 class="image__title">Projeto</h3>
                                <p class="image__description">
                                Movies-lib
                                </p>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="w-96 h-96 shadow-3xl hover:bg-yellow-200 transition duration-1000">
                    <div className="relative">

                            <img src="./movies-lib.png" alt="" width={365} className="mt-3 ml-2.5 bg-cover"/>
  
                        <a href="https://movies-lib-silk-nine.vercel.app/" target="_blank">
                            <div class="image__overlay">
                                <h3 class="image__title">Projeto</h3>
                                <p class="image__description">
                                Movies-lib
                                </p>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="w-96 h-96 shadow-3xl hover:bg-yellow-200 transition duration-1000">
                    <div className="relative">

                            <img src="./movies-lib.png" alt="" width={365} className="mt-3 ml-2.5 bg-cover"/>
  
                        <a href="https://movies-lib-silk-nine.vercel.app/" target="_blank">
                            <div class="image__overlay">
                                <h3 class="image__title">Projeto</h3>
                                <p class="image__description">
                                Movies-lib
                                </p>
                            </div>
                        </a>
                    </div>

                </div>


            </div>

        </div>
     );
}
 
export default Projects;