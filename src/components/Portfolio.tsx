import { Button } from '@/components/ui/button';

export default function Portfolio() {

  const portfolioItems = [
    {
      id: 1,
      image: 'corte-tratamento.jpeg',
      category: 'cabelo',
      title: 'Corte Texturizado Moderno',
      description: 'Corte com camadas e textura natural'
    },
    {
      id: 2,
      image: '/acabamento.jpeg',
      category: 'cabelo',
      title: 'Corte e styling',
      description: 'Estilo atemporal com acabamento impecável'
    },
    {
      id: 3,
      image: '/corte.jpeg',
      category: 'cabelo',
      title: 'Fade Moderno',
      description: 'Técnica de degradê com transições suaves'
    },
    {
      id: 4,
      image: '/manutencao-corte-barba.jpeg',
      category: 'cabelo',
      title: 'Corte Contemporâneo',
      description: 'Visual jovem e despojado'
    },
    {
      id: 5,
      image: '/visagismo.jpeg',
      category: 'cabelo',
      title: 'Transformação Completa',
      description: 'Mudança radical de visual'
    },
    {
      id: 6,
      image: '/exemplo.jpeg',
      category: 'cabelo',
      title: 'Lavar e finalizar ',
      description: 'Tratamos seu cabelo do jeito que ele merece'
    },
    {
      id: 7,
      image: '/exemplo3.jpeg',
      category: 'cabelo',
      title: 'Lavar e finalizar ',
      description: 'Tratamos seu cabelo do jeito que ele merece'
    },{
      id: 8,
      image: '/exemplo4.jpeg',
      category: 'cabelo',
      title: 'Lavar e finalizar ',
      description: 'Tratamos seu cabelo do jeito que ele merece'
    },{
      id: 9,
      image: '/exemplo5.jpeg',
      category: 'cabelo',
      title: 'Lavar e finalizar ',
      description: 'Tratamos seu cabelo do jeito que ele merece'
    },{
      id: 10,
      image: '/exemplo6.jpeg',
      category: 'cabelo',
      title: 'Lavar e finalizar ',
      description: 'Tratamos seu cabelo do jeito que ele merece'
    },
    {
      id: 11,
      image: '/exemplo7.jpeg',
      category: 'cabelo',
      title: 'Lavar e finalizar ',
      description: 'Tratamos seu cabelo do jeito que ele merece'
    },
    {
      id: 12,
      image: '/exemplo8.jpeg',
      category: 'cabelo',
      title: 'Lavar e finalizar ',
      description: 'Tratamos seu cabelo do jeito que ele merece'
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-[#E7FBB4]/5 to-[#ECEDB0]/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meus Trabalhos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Cada corte conta uma história. Veja algumas das transformações que já realizei.
          </p>

        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#638C6D]/50 rounded-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Pronto para sua transformação?
          </h3>
          <p className="text-gray-600 mb-8">
            Agende seu horário e descubra seu novo visual.
          </p>
          <Button 
            size="lg" 
            className="bg-[#DF6D2D] hover:bg-[#C84C05] text-white px-8"
            onClick={() => window.open('https://byaribarber.gendo.app', '_blank')}
          >
            Agendar Agora
          </Button>
        </div>
      </div>
    </section>
  );
}