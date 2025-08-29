import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'innovation', label: 'Innovation', href: '#innovation' },
    { id: 'platform', label: 'Platform', href: '#platform' },
    { id: 'proof', label: 'Proof', href: '#proof' },
    { id: 'access', label: 'Access', href: '#access' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navigationItems?.map(item => ({
        id: item?.id,
        element: document.getElementById(item?.id?.replace('#', ''))
      }))?.filter(section => section?.element);

      const currentSection = sections?.find(section => {
        const rect = section?.element?.getBoundingClientRect();
        return rect?.top <= 100 && rect?.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection?.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const targetId = href?.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80;
      const targetPosition = targetElement?.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavClick('#home')}
                className="flex items-center space-x-2 group transition-neon"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center neon-glow">
                  <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  NeonTech
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => handleNavClick(item?.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-neon ${
                    activeSection === item?.id
                      ? 'text-primary' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item?.label}
                  {activeSection === item?.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary neon-glow rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleNavClick('#platform')}
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                Watch Demo
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => handleNavClick('#access')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
              >
                Request Access
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle mobile menu"
              >
                <Icon 
                  name={isMobileMenuOpen ? "X" : "Menu"} 
                  size={24} 
                  strokeWidth={2} 
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-20 left-0 right-0 bg-card border-b border-border animate-slide-down">
            <nav className="px-4 py-6 space-y-4">
              {navigationItems?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => handleNavClick(item?.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-neon ${
                    activeSection === item?.id
                      ? 'text-primary bg-primary/10 border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item?.label}
                </button>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3 border-t border-border">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => handleNavClick('#platform')}
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  <Icon name="Play" size={16} className="mr-2" />
                  Watch Demo
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => handleNavClick('#access')}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
                >
                  <Icon name="Zap" size={16} className="mr-2" />
                  Request Access
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;