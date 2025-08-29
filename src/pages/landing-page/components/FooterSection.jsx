import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#platform' },
      { name: 'Pricing', href: '#early-access' },
      { name: 'Demo', href: '#proof' },
      { name: 'Roadmap', href: '#innovation' }
    ],
    company: [
      { name: 'About', href: '#home' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' }
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Support', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', href: '#', color: 'primary' },
    { name: 'LinkedIn', icon: 'Linkedin', href: '#', color: 'secondary' },
    { name: 'GitHub', icon: 'Github', href: '#', color: 'accent' },
    { name: 'Discord', icon: 'MessageCircle', href: '#', color: 'success' }
  ];

  const handleLinkClick = (href) => {
    if (href?.startsWith('#')) {
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
    }
  };

  const handleEarlyAccess = () => {
    const accessSection = document.getElementById('early-access');
    if (accessSection) {
      accessSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-background to-card/50 border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center neon-glow">
                <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold text-foreground">NeonTech</span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Experience tomorrow's technology today. Join the revolution of forward-thinking innovators transforming their industries with cutting-edge AI-powered solutions.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-8">
              {socialLinks?.map((social) => (
                <button
                  key={social?.name}
                  onClick={() => handleLinkClick(social?.href)}
                  className={`w-10 h-10 rounded-lg border-2 border-${social?.color}/30 bg-${social?.color}/10 hover:bg-${social?.color}/20 hover:border-${social?.color}/50 flex items-center justify-center transition-all duration-300 hover:scale-110`}
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={20} className={`text-${social?.color}`} />
                </button>
              ))}
            </div>

            {/* CTA */}
            <Button
              variant="default"
              onClick={handleEarlyAccess}
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
              iconName="Rocket"
              iconPosition="left"
            >
              Get Early Access
            </Button>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Product */}
              <div>
                <h3 className="text-foreground font-semibold mb-4">Product</h3>
                <ul className="space-y-3">
                  {footerLinks?.product?.map((link) => (
                    <li key={link?.name}>
                      <button
                        onClick={() => handleLinkClick(link?.href)}
                        className="text-muted-foreground hover:text-primary transition-colors text-left"
                      >
                        {link?.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-foreground font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks?.company?.map((link) => (
                    <li key={link?.name}>
                      <button
                        onClick={() => handleLinkClick(link?.href)}
                        className="text-muted-foreground hover:text-primary transition-colors text-left"
                      >
                        {link?.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-foreground font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks?.resources?.map((link) => (
                    <li key={link?.name}>
                      <button
                        onClick={() => handleLinkClick(link?.href)}
                        className="text-muted-foreground hover:text-primary transition-colors text-left"
                      >
                        {link?.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-foreground font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks?.legal?.map((link) => (
                    <li key={link?.name}>
                      <button
                        onClick={() => handleLinkClick(link?.href)}
                        className="text-muted-foreground hover:text-primary transition-colors text-left"
                      >
                        {link?.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>© {currentYear} NeonTech. All rights reserved.</span>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span>SOC 2 Certified</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} className="text-primary" />
                <span>Global CDN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute bottom-4 right-4 hidden lg:block">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full flex items-center justify-center hover:bg-primary/30 transition-all duration-300 neon-glow"
          aria-label="Scroll to top"
        >
          <Icon name="ArrowUp" size={20} className="text-primary" />
        </button>
      </div>
    </footer>
  );
};

export default FooterSection;