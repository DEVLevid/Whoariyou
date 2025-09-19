import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#depoimentos', label: 'Depoimentos' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="font-bold text-2xl tracking-wide">
            <span className="text-[#638C6D]">who</span>
            <span className="text-[#DF6D2D]">ariyou</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#638C6D] transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://byaribarber.gendo.app" target="_blank" rel="noopener noreferrer" className="text-[#DF6D2D] hover:text-[#C84C05] transition-colors">
              <Phone className="h-5 w-5" />
            </a>
            <a href="mailto:ariana@whoariyou.com" className="text-[#DF6D2D] hover:text-[#C84C05] transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/whoariyou" className="text-[#DF6D2D] hover:text-[#C84C05] transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-[#638C6D] transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t">
              <a href="https://byaribarber.gendo.app" target="_blank" rel="noopener noreferrer" className="text-[#DF6D2D] hover:text-[#C84C05] transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="mailto:ariana@whoariyou.com" className="text-[#DF6D2D] hover:text-[#C84C05] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/whoariyou" className="text-[#DF6D2D] hover:text-[#C84C05] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}