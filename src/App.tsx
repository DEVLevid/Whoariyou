import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/toaster';
import './App.css';

function App() {
  return (
    <div className="min-h-screen w-full gap-8">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;