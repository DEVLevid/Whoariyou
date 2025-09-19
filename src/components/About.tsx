import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Sparkles, Users } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: Award,
      title: 'Técnicas Modernas',
      description: 'Especializada em cortes masculinos contemporâneos',
    },
    {
      icon: Heart,
      title: 'Paixão Genuína',
      description: 'Cada corte é feito com amor e atenção aos detalhes',
    },
    {
      icon: Sparkles,
      title: 'Estilo Único',
      description: 'Criando looks personalizados para cada personalidade',
    },
    {
      icon: Users,
      title: 'Foco no Cliente',
      description: 'Sua confiança e satisfação são minha prioridade',
    },
  ];

  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-full ">
              <img 
                src="/ariProfile.jpeg" 
                alt="Ariana - Whoariyou"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            {/* Quote Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
              <p className="text-sm italic text-gray-600 mb-3">
                "Cada corte é uma forma de arte, cada cliente uma tela em branco."
              </p>
              <div className="text-xs text-[#638C6D] font-medium">- Ariana</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Quem é Ariana
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sou Ariana, conhecida como Whoariyou, e minha paixão é transformar pessoas através da 
                arte do corte de cabelo. Com mais de 3 anos de experiência, especializo-me em cortes 
                masculinos modernos e técnicas de styling que revelam a personalidade única de cada cliente.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Minha filosofia é simples: cada pessoa tem uma identidade única que pode ser expressa 
                através do cabelo. Meu trabalho é descobrir essa essência e traduzi-la em um corte que 
                não apenas fica bem, mas que faz você se sentir autêntico e confiante.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#638C6D] to-[#E7FBB4] flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}