import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="w-full border-red min-h-full flex items-center justify-center relative overflow-hidden">
      {/* Content */}
        <div className="container min-h-full rounded-t-[8rem] rounded-b-sm mt-20 px-4 z-10 p-10" style={{
          background: 'linear-gradient(90deg,rgba(225, 233, 201, 1) 43%, rgba(255, 255, 255, 1) 81%)'
        }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center pl-16 lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Descubra
                <span className="block text-[#DF6D2D]">O seu estilo</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Sou Ariana, e através da arte do corte e styling, ajudo você a expressar sua 
                verdadeira identidade. Cada corte conta uma história única.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-[#DF6D2D] hover:bg-[#C84C05] text-white px-8 py-4 text-lg group"
                onClick={() => window.open('https://byaribarber.gendo.app', '_blank')}
              >
                Agendar Horário
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#638C6D] text-[#638C6D] hover:bg-[#638C6D] hover:text-white px-8 py-4 text-lg"
              >
                Ver Portfolio
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="w-[30rem] relative left-[4rem] rounded-[6rem]">
              <img 
                src="/bigchop.jpeg" 
                alt="Trabalho da Ariana - Corte masculino moderno"
                className="w-full h-full object-cover rounded-[6rem]"
              />
              {/* Floating Elements */}
              <div className="absolute top-6 right-0  z-30 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-[#638C6D]">+500</div>
                <div className="text-sm text-gray-600">Transformações</div>
              </div>
              <div className="absolute bottom-6 left-10 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 rounded-full bg-[#DF6D2D] border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-[#638C6D] border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-[#F68537] border-2 border-white"></div>
                  </div>
                  <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}