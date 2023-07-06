import { ArrowUpCircle  } from 'lucide-react';

import Image from 'next/image';
import Header from './components/Header';
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function Home() {
  return (
    <section className='bg-slate-900'>
      <Header/>
      <Resume />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <div className='flex flex-wrap justify-end mr-10'>
        <button id="myBtn"><a href="#top"><ArrowUpCircle size={35}/></a></button>
      </div>
    </section>
    
  )
}
