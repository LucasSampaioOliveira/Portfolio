const Projects = () => {
    return ( 
        <div className="p-52 max-sm:p-0 max-md:p-10" id="projetos">
            <div className="mt-16">
                <h1 className="text-yellow-200 font-abc text-5xl font-semibold text-center">
                        Projetos
                </h1>
            </div>

            <div className="flex flex-wrap justify-center gap-20 mt-28">

                <div className="w-96 h-96 shadow-3xl hover:bg-yellow-200 transition duration-1000 max-md:w-64 max-md:h-64">
                    <div className="relative">

                            <img src="./movies-lib.png" alt="" width={365} className="mt-3 ml-2.5 bg-cover max-md:w-60"/>
  
                        <a href="https://movies-lib-silk-nine.vercel.app/" target="_blank">
                            <div class="image__overlay">
                                <h3 class="image__title">Projeto</h3>
                                <p class="image__description">
                                Movies-lib
                                </p>
                                <p>Feito com: React, SASS</p>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="w-96 h-96 shadow-3xl hover:bg-yellow-200 transition duration-1000 max-md:w-64 max-md:h-64">
                    <div className="relative">

                            <img src="./i-movi.png" alt="" width={365} className="mt-3 ml-2.5 bg-cover max-md:w-60"/>
  
                        <a href="https://i-movi-rho.vercel.app/" target="_blank">
                            <div class="image__overlay">
                                <h3 class="image__title">Projeto</h3>
                                <p class="image__description">
                                I-movi
                                </p>
                                <p>Feito com: Bootstrap, SASS</p>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="w-96 h-96 shadow-3xl hover:bg-yellow-200 transition duration-1000 max-md:w-64 max-md:h-64">
                    <div className="relative">

                            <img src="./spotify.png" alt="" width={365} className="mt-3 ml-2.5 bg-cover max-md:w-60"/>
  
                        <a href="https://spotify-nine-ochre.vercel.app/" target="_blank">
                            <div class="image__overlay">
                                <h3 class="image__title">Projeto</h3>
                                <p class="image__description">
                                Spotify
                                </p>
                                <p>Feito com: Next, React, Tailwind css</p>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="w-96 h-96 shadow-3xl hover:bg-yellow-200 transition duration-1000 max-md:w-64 max-md:h-64">
                    <div className="relative">

                            <img src="./king-games.png" alt="" width={365} className="mt-3 ml-2.5 bg-cover max-md:w-60"/>
  
                        <a href="https://king-games.vercel.app/pages/home.html" target="_blank">
                            <div class="image__overlay">
                                <h3 class="image__title">Projeto</h3>
                                <p class="image__description">
                                King-Games
                                </p>
                                <p>Feito com: HTML, CSS, JS, Interface</p>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="w-96 h-96 shadow-3xl hover:bg-yellow-200 transition duration-1000 max-md:w-64 max-md:h-64">
                    <div className="relative">

                            <img src="./pincel.png" alt="" width={365} className="mt-3 ml-2.5 bg-cover max-md:w-60"/>
  
                        <a href="https://pincel-dusky.vercel.app/" target="_blank">
                            <div class="image__overlay">
                                <h3 class="image__title">Projeto</h3>
                                <p class="image__description">
                                Pincel
                                </p>
                                <p>Feito com: Next, React, CSS, Python</p>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="w-96 h-96 shadow-3xl hover:bg-yellow-200 transition duration-1000 max-md:w-64 max-md:h-64">
                    <div className="relative">

                            <img src="./business-patrimony.png" alt="" width={365} className="mt-3 ml-2.5 bg-cover max-md:w-60"/>
  
                        <a href="https://business-patrimony.vercel.app/tela-busca/busca.html" target="_blank">
                            <div class="image__overlay">
                                <h3 class="image__title">Projeto</h3>
                                <p class="image__description">
                                Business-Patrimony
                                </p>
                                <p>Feito com: HTML, CSS, JS, GO</p>
                            </div>
                        </a>
                    </div>

                </div>


            </div>

        </div>
     );
}
 
export default Projects;