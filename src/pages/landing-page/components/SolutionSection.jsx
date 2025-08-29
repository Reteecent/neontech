import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SolutionSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      id: 'first-mover',
      icon: 'Trophy',
      title: 'First-Mover Advantage',
      description: 'Be among the first to leverage breakthrough technology before your competitors even know it exists.',
      features: [
        'Early access to revolutionary features',
        'Competitive advantage for 12+ months',
        'Industry leadership positioning',
        'Premium support and consultation'
      ],
      color: 'primary',
      gradient: 'from-primary/20 to-primary/5'
    },
    {
      id: 'innovation',
      icon: 'Zap',
      title: 'Cutting-Edge Innovation',
      description: 'Experience technology that\'s 3-5 years ahead of current market solutions with AI-powered automation.',
      features: [
        'AI-driven intelligent automation',
        'Quantum-inspired processing speed',
        'Predictive analytics and insights',
        'Self-optimizing performance'
      ],
      color: 'secondary',
      gradient: 'from-secondary/20 to-secondary/5'
    },
    {
      id: 'future-proof',
      icon: 'Shield',
      title: 'Future-Proof Platform',
      description: 'Built on next-generation architecture that evolves with technology, ensuring your investment never becomes obsolete.',
      features: [
        'Modular, scalable architecture',
        'Automatic updates and improvements',
        'Backward and forward compatibility',
        'Unlimited growth potential'
      ],
      color: 'accent',
      gradient: 'from-accent/20 to-accent/5'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'text-primary border-primary/50',
      secondary: 'text-secondary border-secondary/50',
      accent: 'text-accent border-accent/50'
    };
    return colors?.[color] || colors?.primary;
  };

  return (
    <section id="platform" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> NeonTech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three core advantages that position you as an innovation leader in your industry
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits?.map((benefit, index) => (
            <div
              key={benefit?.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                hoveredCard === benefit?.id ? 'scale-105 z-10' : 'hover:scale-102'
              }`}
              onMouseEnter={() => setHoveredCard(benefit?.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`bg-card border rounded-2xl p-8 h-full transition-all duration-300 ${
                hoveredCard === benefit?.id 
                  ? `border-${benefit?.color}/50 neon-glow` 
                  : 'border-border hover:border-primary/30'
              }`}>
                {/* Icon and Title */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit?.gradient} border-2 ${getColorClasses(benefit?.color)} flex items-center justify-center mb-4 transition-all duration-300 ${
                    hoveredCard === benefit?.id ? 'scale-110' : ''
                  }`}>
                    <Icon name={benefit?.icon} size={32} className={`text-${benefit?.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {benefit?.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit?.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {benefit?.features?.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`flex items-center space-x-3 transition-all duration-300 ${
                        hoveredCard === benefit?.id ? 'translate-x-2' : ''
                      }`}
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-${benefit?.color} flex-shrink-0`}></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Overlay */}
                {hoveredCard === benefit?.id && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit?.gradient} rounded-2xl opacity-10 pointer-events-none transition-opacity duration-300`}></div>
                )}
              </div>

              {/* Card Number */}
              <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-full bg-${benefit?.color} text-${benefit?.color}-foreground flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                hoveredCard === benefit?.id ? 'scale-125' : ''
              }`}>
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Lead Your Industry?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the exclusive group of innovators who are already transforming their businesses with NeonTech
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Users" size={16} className="text-primary" />
                <span>2,847+ early adopters</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Star" size={16} className="text-accent" />
                <span>4.9/5 satisfaction rate</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="TrendingUp" size={16} className="text-success" />
                <span>300% avg. productivity gain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;