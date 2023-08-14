import { Github, Linkedin, Instagram, ArrowDownToLine} from 'lucide-react';

const Resume = () => {
    return ( 
        <div className="flex flex-wrap justify-around gap-28 p-52 max-sm:p-0 max-md:p-10" id='resume'>
            <div className="mt-16">
                <h1 className="text-yellow-200 font-abc">
                    Hello, I`m Lucas Sampaio
                </h1>

                <h1 className="text-yellow-200 font-abc text-7xl font-semibold max-md:text-5xl">
                    Front end
                </h1>

                <h1 id="developer">
                    Developer
                </h1>
                <div className='flex flex-wrap gap-4'>

                    <a href="https://github.com/LucasSampaioOliveira" className="text-sm font-semibold text-zinc-200 hover:text-yellow-200 transition duration-500" target="_blank">
                        <Github/>
                    </a>

                    <a href="https://www.linkedin.com/in/lucas-sampaio-0aa72320b/" className="text-sm font-semibold text-zinc-200 hover:text-yellow-200 transition duration-500" target="_blank">
                        <Linkedin/>
                    </a>

                    <a href="https://www.instagram.com/lucas.sampaio33/" className="text-sm font-semibold text-zinc-200 hover:text-yellow-200 transition duration-500" target="_blank">
                        <Instagram/>
                    </a>
                </div>

                <div className='mt-10 w-64 p-4 shadow-3xl rounded-xl'>
                    <a href="./LucasSampaioOliveira-Currículo.pdf" className="flex gap-2 font-semibold text-white transition hover:text-yellow-200 duration-500 text-xl" target="_blank" download="LucasSampaioOliveira-Currículo">
                        Download Currículo
                        <ArrowDownToLine/>
                    </a>
                </div>

            </div>

            <div>
                <div className="w-96 shadow-3xl mb-16 rounded-3xl max-md:w-64"><img src="./lucas.png" alt="Lucas" /></div>
            </div>

            <div class="box">
                <span></span>
                <span></span>
                <span></span>
            </div>


        </div>

     );
}
 
export default Resume;