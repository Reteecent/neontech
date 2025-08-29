import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [userCount, setUserCount] = useState(2847);
  const [showDemo, setShowDemo] = useState(false);
  
  const fullText = "Experience Tomorrow's Technology Today";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText?.length) {
        setTypewriterText(fullText?.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const countTimer = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    
    return () => clearInterval(countTimer);
  }, []);

  const handleEarlyAccess = () => {
    const accessSection = document.getElementById('early-access');
    if (accessSection) {
      accessSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchDemo = () => {
    setShowDemo(true);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-accent/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline with Typewriter Effect */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {typewriterText}
            </span>
            <span className="animate-pulse text-primary">|</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join <span className="text-primary font-semibold">{userCount?.toLocaleString()}</span> forward-thinking innovators already transforming their digital future
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Button
            variant="default"
            size="lg"
            onClick={handleEarlyAccess}
            className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 group"
            iconName="Zap"
            iconPosition="left"
            iconSize={20}
          >
            Secure Early Access
            <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={handleWatchDemo}
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            iconName="Play"
            iconPosition="left"
            iconSize={20}
          >
            Watch Demo
          </Button>
        </div>

        {/* Real-time Counter */}
        <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <span className="text-muted-foreground">Live Beta Users:</span>
            <span className="text-2xl font-bold text-primary">{userCount?.toLocaleString()}</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </div>
      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md">
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={() => setShowDemo(false)}
              className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="X" size={32} />
            </button>
            
            <div className="bg-card border border-border rounded-2xl overflow-hidden neon-glow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Play" size={64} className="text-primary mb-4 mx-auto" />
                  <p className="text-xl text-foreground">90-Second Product Preview</p>
                  <p className="text-muted-foreground mt-2">Interactive demo coming soon</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Revolutionary Platform Demo</h3>
                <p className="text-muted-foreground">Experience the future of technology with our cutting-edge platform designed for tomorrow's innovators.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;