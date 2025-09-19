import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos Eduardo',
      service: 'Corte + Styling',
      rating: 5,
      comment: 'A Ariana é incrível! Conseguiu entender exatamente o que eu queria e o resultado ficou perfeito.',
      image: '',
      date: 'Há 2 semanas'
    },
    {
      id: 2,
      name: 'Larissa Souza',
      service: 'Transformação',
      rating: 5,
      comment: 'Mudança incrível! A Ariana tem um olhar único para cada pessoa, sai de la me sentindo uma nova pessoa!',
      image: '',
      date: 'Há 1 mês'
    },
    {
      id: 3,
      name: 'Rafael Costa',
      service: 'Corte Clássico',
      rating: 5,
      comment: 'Profissional excepcional! Atenção aos detalhes e resultado impecável. Já virei cliente fiel!',
      image: '',
      date: 'Há 3 semanas'
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-[#F68537] fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O Que Meus Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos meus clientes é minha maior recompensa. Veja o que eles 
            têm a dizer sobre meu trabalho.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#638C6D] mb-2">98%</div>
            <div className="text-gray-600">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#638C6D] mb-2">300+</div>
            <div className="text-gray-600">Clientes</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-3xl md:text-4xl font-bold text-[#638C6D]">5.0</span>
              <Star className="h-6 w-6 text-[#F68537] fill-current ml-1" />
            </div>
            <div className="text-gray-600">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#638C6D] mb-2">95%</div>
            <div className="text-gray-600">Clientes que Retornam</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-[#E7FBB4]/5">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-[#638C6D]/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-3">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-[#638C6D] text-[#638C6D] text-xs">
                    {testimonial.service}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#E7FBB4]/20 to-[#ECEDB0]/20 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Quer ser o próximo cliente satisfeito?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Agende seu horário hoje mesmo e descubra seu novo visual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-[#DF6D2D] hover:bg-[#C84C05] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                onClick={() => window.open('https://byaribarber.gendo.app', '_blank')}
              >
                Agendar Horário
              </button>
              <button 
                className="border-2 border-[#638C6D] text-[#638C6D] hover:bg-[#638C6D] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                onClick={() => window.open('https://instagram.com/whoariyou', '_blank')}
              >
                Ver no Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}