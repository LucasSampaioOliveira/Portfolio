const Contact = () => {
    return ( 
        <div className="p-52 text-center max-sm:p-0 max-md:p-10 max-md:mt-24" id="contato">
            <div className="flex flex-wrap justify-center">
                <h1 className="text-yellow-200 font-abc text-5xl font-semibold">Contato</h1>
            </div>
            <div className="mt-14">
                <div>
                    <div className="flex flex-wrap justify-center">
                        <a href="mailto:lucas.sampaio33@hotmail.com"><h1 className="text-white font-semibold text-4xl font-abc p-6 max-md:text-xl hover:text-yellow-200 transition duration-500">lucas.sampaio33@hotmail.com</h1></a>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <h1 className="text-yellow-200 text-xl font-abc p-6">(+55)27999848179</h1>
                    </div>
                </div>
                <div>
                    <div className="text-white flex flex-wrap justify-center gap-10">
                        <a href="https://github.com/LucasSampaioOliveira" className="hover:text-yellow-200 transition duration-500" target="_blank">GITHUB</a>
                        <a href="https://www.linkedin.com/in/lucas-sampaio-0aa72320b/" className="hover:text-yellow-200 transition duration-500" target="_blank">LINKEDIN</a>
                        <a href="https://www.instagram.com/lucas.sampaio33/" className="hover:text-yellow-200 transition duration-500" target="_blank">INSTAGRAM</a>
                    </div>
                </div>
                <p class="local font-abc mt-8">Vitória, Epírito Santo, Brasil</p>
            </div>
        </div>
     );
}
 
export default Contact;