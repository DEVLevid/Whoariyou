import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Corte",
      description:
        "Cortes personalizados, com acabamentos precisos à máquina ou tesoura, e indicação dos melhores produtos para manutenção em casa.",
      duration: "1h",
      price: "R$ 60,00",
      features: [
        "Design personalizado",
        "Acabamento preciso",
        "Dicas de manutenção",
      ],
      popular: false,
      image: "/corte.jpeg",
    },
    {
      title: "Corte + Barba",
      description:
        "O combo perfeito para um visual completo: corte personalizado e alinhamento da barba com técnica visagista.",
      duration: "1h30min",
      price: "R$ 90,00",
      features: ["Corte + barba", "Técnica visagista", "Visual completo"],
      popular: true,
      image: "/corte-barba.jpeg",
    },
    {
      title: "Só Barba",
      description:
        "Alinhamento da barba com técnica visagista para um design impecável, valorizando o seu rosto.",
      duration: "40 min",
      price: "R$ 40,00",
      features: [
        "Alinhamento visagista",
        "Hidratação e finalização",
        "Contorno perfeito",
      ],
      popular: false,
      image: "/barba.jpeg",
    },
    {
      title: "Corte + Tratamento",
      description:
        "Corte personalizado combinado com tratamentos para os fios e couro cabeludo, como hidratação, nutrição e detox.",
      duration: "1h40min",
      price: "R$ 90,00",
      features: [
        "Consultoria de tratamento",
        "Corte + cuidados especiais",
        "Cabelos saudáveis",
      ],
      popular: false,
      image: "/corte-tratamento.jpeg",
    },
    {
      title: "Lavar e Finalizar",
      description:
        "Higienização e condicionamento dos cabelos, seguidos de finalização profissional com produtos adequados para o seu tipo de fio.",
      duration: "35 min",
      price: "R$ 30,00",
      features: [
        "Higienização completa",
        "Finalização profissional",
        "Produtos de qualidade",
      ],
      popular: false,
      image: "/lavar-finalizar.jpeg",
    },
    {
      title: "Manutenção (Corte+Barba)",
      description:
        "Pacote de manutenção para quem volta em 15 dias, garantindo que seu visual de corte e barba se mantenha impecável.",
      duration: "50 min",
      price: "R$ 70,00",
      features: [
        "Retoque completo",
        "Design e alinhamento",
        "Desconto especial",
      ],
      popular: false,
      image: "/manutencao-corte-barba.jpeg",
    },
    {
      title: "Manutenção (Corte)",
      description:
        "Serviço rápido para retoque de corte a cada 15 dias, perfeito para manter o estilo sempre em dia.",
      duration: "30 min",
      price: "R$ 45,00",
      features: ["Retoque do corte", "Agilidade", "Preço especial"],
      popular: false,
      image: "/manutencao-corte.jpeg",
    },
    {
      title: "Manutenção (Barba)",
      description:
        "Serviço de manutenção para retoque da barba a cada 15 dias, mantendo o desenho e o alinhamento perfeitos.",
      duration: "25 min",
      price: "R$ 30,00",
      features: ["Retoque da barba", "Manutenção do design", "Preço especial"],
      popular: false,
      image: "/manutencao-barba.jpeg",
    },
    {
      title: "Acabamento",
      description:
        "Apenas o pezinho, para um acabamento limpo e preciso do corte, valorizando o seu visual.",
      duration: "30 min",
      price: "R$ 25,00",
      features: [
        "Pezinho e costeletas",
        "Contorno limpo",
        "Aparência renovada",
      ],
      popular: false,
      image: "/acabamento.jpeg",
    },
    {
      title: "Consultoria de Corte",
      description:
        "Análise completa para descobrir o melhor corte para o seu formato de rosto, textura e intenção de imagem, com proposta visagista e design de corte.",
      duration: "3h",
      price: "R$ 579,00",
      features: [
        "Análise completa",
        "Proposta visagista",
        "Design de corte exclusivo",
      ],
      popular: false,
      image: "/consultoria-corte.jpeg",
    },
    {
      title: "Corte Infantil",
      description:
        "Cortes divertidos e seguros para os pequenos, realizados em um ambiente acolhedor e descontraído.",
      duration: "1h",
      price: "R$ 60,00",
      features: ["Ambiente lúdico", "Corte seguro", "Experiência divertida"],
      popular: false,
      image: "/corte-infantil.jpeg",
    },
    {
      title: "Sobrancelhas",
      description:
        "Alinhamento das sobrancelhas para valorizar o olhar, utilizando técnicas de linha ou pinça para um resultado preciso.",
      duration: "45 min",
      price: "R$ 35,00",
      features: [
        "Design personalizado",
        "Técnica com linha ou pinça",
        "Valorização do olhar",
      ],
      popular: false,
      image: "/sobrancelhas.jpeg",
    },
  ];

  const mainServices = services.slice(0, 9);

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra a variedade de serviços para cuidar do seu visual, da barba
            ao cabelo e sobrancelhas.
          </p>
        </div>

        {/* Serviços Principais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden"
            >
              {service.popular && (
                <div className="relative">
                  <Badge className="absolute top-4 right-4 z-10 bg-[#DF6D2D] hover:bg-[#C84C05] text-white">
                    Mais Popular
                  </Badge>
                </div>
              )}

              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center"></div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-gray-900 group-hover:text-[#638C6D] transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Duration and Price */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.duration}
                  </div>
                  <div className="font-semibold text-[#DF6D2D]">
                    {service.price}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#638C6D] mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className="w-full bg-[#EDA35A] text-white transition-all duration-300"
                  onClick={() =>
                    window.open("https://byaribarber.gendo.app", "_blank")
                  }
                >
                  Agendar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#E7FBB4]/20 to-[#ECEDB0]/20 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Pronto para agendar seu horário?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Escolha o serviço ideal para você e garanta um visual que combina
              com a sua personalidade.
            </p>
            <Button
              size="lg"
              className="bg-[#DF6D2D] hover:bg-[#C84C05] text-white px-8"
              onClick={() =>
                window.open("https://byaribarber.gendo.app", "_blank")
              }
            >
              Agendar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
