const Header = () => {
    return ( 
        <header className="flex flex-wrap justify-around  text-white w-full h-24 border-b-2 border-yellow-200">

            <div className="w-36 mt-4"><img src="./logo-1.png" alt="Logo"/></div>
            
            <div className="block">
                <nav className="mt-7">
                    <ul>
                        <li className="inline-block px-10 font-abc text-lg hover:text-yellow-200 transition duration-500"><a href="">Home</a></li>
                        <li className="inline-block px-10 font-abc text-lg hover:text-yellow-200 transition duration-500"><a href="">Sobre</a></li>
                        <li className="inline-block px-10 font-abc text-lg hover:text-yellow-200 transition duration-500"><a href="">Contato</a></li>
                    </ul>
                </nav>
            </div>
      </header>
     );
}
 
export default Header;