import Image from 'next/image';
import Header from './components/Header';
import Resume from './components/Resume';
import About from './components/About';

export default function Home() {
  return (
    <section className='bg-slate-900'>
      <Header/>
      <Resume />
      <About />
    </section>
  )
}
