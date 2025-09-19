import { Heart, Instagram, Wheat as Whatsapp } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#portfolio', label: 'Portfolio' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/whoariyou', label: 'Instagram' },
    { icon: Whatsapp, href: 'https://wa.me/5511999999999', label: 'WhatsApp' },
  ];

  return (
    <footer className=" w-full rounded-[6rem]text-[#96A78D] p-[4rem]">
      <div className="w-full flex-col container mx-auto px-4 py-16">
        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#96A78D] text-sm mb-4 md:mb-0">
              © 2025 Whoariyou - Ariana. Todos os direitos reservados.
            </div>
            <div className="flex items-center text-[#96A78D] text-sm">
              <span>Feito com</span>
              <Heart className="h-4 w-4 mx-1 text-[#96A78D] fill-current" />
              <span>para pessoas autênticas</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}