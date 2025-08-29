import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const [activeView, setActiveView] = useState('outdated');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('problem-section');
    if (section) {
      observer?.observe(section);
    }

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setActiveView(prev => prev === 'outdated' ? 'futuristic' : 'outdated');
      }, 3000);
      
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const outdatedFeatures = [
    { icon: 'AlertTriangle', title: 'Legacy Systems', desc: 'Stuck with outdated technology' },
    { icon: 'Clock', title: 'Slow Processes', desc: 'Manual workflows killing productivity' },
    { icon: 'TrendingDown', title: 'Falling Behind', desc: 'Competitors gaining advantage' },
    { icon: 'Lock', title: 'Limited Scalability', desc: 'Growth constrained by old tech' }
  ];

  const futuristicFeatures = [
    { icon: 'Zap', title: 'AI-Powered', desc: 'Intelligent automation everywhere' },
    { icon: 'Rocket', title: 'Lightning Fast', desc: 'Instant processing and responses' },
    { icon: 'TrendingUp', title: 'Market Leader', desc: 'Stay ahead of competition' },
    { icon: 'Infinity', title: 'Unlimited Scale', desc: 'Grow without technical limits' }
  ];

  return (
    <section id="problem-section" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Don't Get Left Behind in the
            <span className="bg-gradient-to-r from-destructive to-warning bg-clip-text text-transparent"> Digital Stone Age</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While you're using yesterday's technology, your competitors are already building tomorrow's solutions
          </p>
        </div>

        {/* Split Screen Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Outdated Side */}
          <div className={`relative transition-all duration-1000 ${
            activeView === 'outdated' ? 'scale-105 z-10' : 'scale-95 opacity-75'
          }`}>
            <div className="bg-card border border-destructive/30 rounded-2xl p-8 h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="AlertTriangle" size={32} className="text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-destructive mb-2">Your Current Reality</h3>
                <p className="text-muted-foreground">Struggling with outdated systems</p>
              </div>

              <div className="space-y-6">
                {outdatedFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                    <div className="w-10 h-10 bg-destructive/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={feature?.icon} size={20} className="text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature?.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature?.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-destructive/10 rounded-lg border border-destructive/30">
                <p className="text-center text-destructive font-semibold">
                  <Icon name="TrendingDown" size={20} className="inline mr-2" />
                  Losing competitive advantage daily
                </p>
              </div>
            </div>
          </div>

          {/* Futuristic Side */}
          <div className={`relative transition-all duration-1000 ${
            activeView === 'futuristic' ? 'scale-105 z-10 neon-glow' : 'scale-95 opacity-75'
          }`}>
            <div className="bg-card border border-primary/30 rounded-2xl p-8 h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Your Future with NeonTech</h3>
                <p className="text-muted-foreground">Leading with cutting-edge innovation</p>
              </div>

              <div className="space-y-6">
                {futuristicFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={feature?.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature?.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature?.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <p className="text-center text-primary font-semibold">
                  <Icon name="TrendingUp" size={20} className="inline mr-2" />
                  Dominating your market tomorrow
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-4 bg-card/50 backdrop-blur-md border border-border rounded-full px-6 py-3">
            <div className={`w-3 h-3 rounded-full transition-colors ${
              activeView === 'outdated' ? 'bg-destructive' : 'bg-destructive/30'
            }`}></div>
            <span className="text-sm text-muted-foreground">Auto-switching comparison</span>
            <div className={`w-3 h-3 rounded-full transition-colors ${
              activeView === 'futuristic' ? 'bg-primary' : 'bg-primary/30'
            }`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;