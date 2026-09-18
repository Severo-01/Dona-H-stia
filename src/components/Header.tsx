import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { useNavigation } from '../context/NavigationContext';

export const Header: React.FC = () => {
  const { currentPath, navigateTo, openSearch } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'INÍCIO', path: '/' },
    { label: 'PRODUTOS', path: '/produtos' },
    { label: 'CATEGORIAS', path: '/categorias' },
    { label: 'SOBRE', path: '/sobre' },
    { label: 'CONTATO', path: '/contato' },
  ];

  const handleNavClick = (path: string) => {
    navigateTo(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#071A2B]/95 backdrop-blur-md shadow-sm border-b border-[#C89A4B]/15 text-[#F5F0E8]'
            : 'py-5 bg-gradient-to-b from-[#071A2B]/90 via-[#071A2B]/60 to-transparent text-[#F5F0E8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <Logo
              variant="dark"
              size="md"
              onClick={() => handleNavClick('/')}
            />

            {/* Center: Desktop Navigation */}
            <nav
              aria-label="Navegação Principal"
              className="hidden md:flex items-center space-x-8 lg:space-x-10"
            >
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`text-xs font-sans tracking-[0.2em] transition-colors relative py-1 focus:outline-hidden ${
                      isActive
                        ? 'text-[#E0B866] font-semibold'
                        : 'text-[#F5F0E8]/80 hover:text-[#E0B866]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C89A4B] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right: Actions (Search, Mobile Toggle) */}
            <div className="flex items-center space-x-4 sm:space-x-5">
              {/* Search Button */}
              <button
                type="button"
                onClick={openSearch}
                aria-label="Pesquisar produtos"
                className="p-2 text-[#F5F0E8]/80 hover:text-[#E0B866] transition-colors duration-200 rounded-full hover:bg-white/5 focus:outline-hidden"
              >
                <Search className="w-5 h-5" strokeWidth={1.75} />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                className="md:hidden p-2 text-[#F5F0E8]/80 hover:text-[#E0B866] transition-colors duration-200 rounded-full hover:bg-white/5 focus:outline-hidden"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" strokeWidth={1.75} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={1.75} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-[#071A2B]/98 backdrop-blur-lg pt-24 px-6 pb-8 flex flex-col justify-between">
          <nav className="flex flex-col space-y-6 pt-4">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-left text-lg tracking-[0.2em] font-serif transition-colors py-2 border-b border-white/5 ${
                    isActive ? 'text-[#E0B866] font-medium' : 'text-[#F5F0E8]/80'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="border-t border-[#C89A4B]/20 pt-6">
            <p className="text-xs font-sans text-[#F5F0E8]/60 tracking-wider">
              DONA HÉSTIA &bull; O CORAÇÃO DO SEU LAR
            </p>
            <p className="text-[11px] font-sans text-[#C89A4B]/80 mt-1">
              Atendimento: lardonahestia@gmail.com &bull; @donahestia_oficial
            </p>
          </div>
        </div>
      )}
    </>
  );
};
