import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TrustBadgesSection = () => {
  const [animationIndex, setAnimationIndex] = useState(0);

  const securityBadges = [
    {
      icon: 'Shield',
      title: 'SOC 2 Certified',
      description: 'Enterprise-grade security compliance',
      color: 'success'
    },
    {
      icon: 'Lock',
      title: 'ISO 27001',
      description: 'International security standard',
      color: 'primary'
    },
    {
      icon: 'Key',
      title: 'End-to-End Encryption',
      description: 'Military-grade data protection',
      color: 'secondary'
    },
    {
      icon: 'Eye',
      title: 'GDPR Compliant',
      description: 'Privacy regulation adherence',
      color: 'accent'
    }
  ];

  const acceleratorLogos = [
    {
      icon: 'Rocket',
      name: 'TechStars',
      description: 'Accelerator Program Graduate',
      color: 'primary'
    },
    {
      icon: 'Zap',
      name: 'Y Combinator',
      description: 'Startup Accelerator Alumni',
      color: 'warning'
    },
    {
      icon: 'Star',
      name: 'Plug and Play',
      description: 'Innovation Platform Partner',
      color: 'accent'
    },
    {
      icon: 'Award',
      name: '500 Startups',
      description: 'Venture Capital Backed',
      color: 'success'
    }
  ];

  const mediaMentions = [
    {
      icon: 'Newspaper',
      outlet: 'TechCrunch',
      headline: 'Revolutionary AI Platform Disrupts Industry',
      color: 'primary'
    },
    {
      icon: 'Radio',
      outlet: 'Forbes',
      headline: 'Top 10 Startups to Watch in 2024',
      color: 'secondary'
    },
    {
      icon: 'Tv',
      outlet: 'Wired',
      headline: 'The Future of Business Intelligence',
      color: 'accent'
    },
    {
      icon: 'Globe',
      outlet: 'VentureBeat',
      headline: 'Next-Gen Platform Raises $50M Series A',
      color: 'success'
    }
  ];

  const partnerships = [
    {
      icon: 'Building',
      name: 'Microsoft',
      type: 'Technology Partner',
      color: 'primary'
    },
    {
      icon: 'Cloud',
      name: 'AWS',
      type: 'Cloud Infrastructure',
      color: 'warning'
    },
    {
      icon: 'Database',
      name: 'Google Cloud',
      type: 'AI/ML Platform',
      color: 'accent'
    },
    {
      icon: 'Server',
      name: 'IBM',
      type: 'Enterprise Solutions',
      color: 'secondary'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationIndex(prev => (prev + 1) % 4);
    }, 2000);
    
    return () => clearInterval(timer);
  }, []);

  const getColorClasses = (color) => {
    const colors = {
      primary: 'text-primary border-primary/30 bg-primary/10',
      secondary: 'text-secondary border-secondary/30 bg-secondary/10',
      accent: 'text-accent border-accent/30 bg-accent/10',
      success: 'text-success border-success/30 bg-success/10',
      warning: 'text-warning border-warning/30 bg-warning/10'
    };
    return colors?.[color] || colors?.primary;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted &
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Recognized</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-leading security, prestigious partnerships, and media recognition validate our innovation
          </p>
        </div>

        {/* Security & Compliance */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Enterprise Security & Compliance
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {securityBadges?.map((badge, index) => (
              <div
                key={index}
                className={`bg-card border rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 ${
                  animationIndex === 0 ? 'border-primary/50 neon-glow' : 'border-border'
                }`}
              >
                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto mb-4 ${getColorClasses(badge?.color)}`}>
                  <Icon name={badge?.icon} size={32} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{badge?.title}</h4>
                <p className="text-sm text-muted-foreground">{badge?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accelerator Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Startup Accelerator Alumni
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {acceleratorLogos?.map((accelerator, index) => (
              <div
                key={index}
                className={`bg-card border rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 ${
                  animationIndex === 1 ? 'border-primary/50 neon-glow' : 'border-border'
                }`}
              >
                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto mb-4 ${getColorClasses(accelerator?.color)}`}>
                  <Icon name={accelerator?.icon} size={32} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{accelerator?.name}</h4>
                <p className="text-sm text-muted-foreground">{accelerator?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Mentions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Featured in Leading Publications
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mediaMentions?.map((mention, index) => (
              <div
                key={index}
                className={`bg-card border rounded-2xl p-6 flex items-start space-x-4 transition-all duration-500 hover:scale-102 ${
                  animationIndex === 2 ? 'border-primary/50 neon-glow' : 'border-border'
                }`}
              >
                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${getColorClasses(mention?.color)}`}>
                  <Icon name={mention?.icon} size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{mention?.outlet}</h4>
                  <p className="text-sm text-muted-foreground">{mention?.headline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Technology Partners
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships?.map((partner, index) => (
              <div
                key={index}
                className={`bg-card border rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 ${
                  animationIndex === 3 ? 'border-primary/50 neon-glow' : 'border-border'
                }`}
              >
                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto mb-4 ${getColorClasses(partner?.color)}`}>
                  <Icon name={partner?.icon} size={32} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{partner?.name}</h4>
                <p className="text-sm text-muted-foreground">{partner?.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-card/50 backdrop-blur-md border border-border rounded-3xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2,847+</div>
              <div className="text-sm text-muted-foreground">Beta Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">300%</div>
              <div className="text-sm text-muted-foreground">Avg ROI Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
          </div>
        </div>

        {/* Animation Indicator */}
        <div className="flex justify-center mt-8">
          <div className="bg-card/50 backdrop-blur-md border border-border rounded-full px-6 py-3 flex items-center space-x-2">
            <Icon name="Shield" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Verified credentials</span>
            <div className="flex space-x-1">
              {[0, 1, 2, 3]?.map((index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === animationIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;