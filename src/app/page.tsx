import Header from './components/Header';
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ButtonTop from './components/ButtonTop';


export default function Home() {
  return (
    <section className='bg-slate-900'>
      <Header/>
      <Resume />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ButtonTop />
    </section>
    
  )
}
