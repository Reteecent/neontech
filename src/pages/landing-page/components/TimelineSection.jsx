import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const timelineSteps = [
    {
      year: '2020',
      title: 'The Problem Identified',
      description: 'Traditional systems failing to meet modern demands',
      icon: 'AlertCircle',
      color: 'destructive'
    },
    {
      year: '2021',
      title: 'Research & Development',
      description: 'Deep dive into next-generation technology solutions',
      icon: 'Search',
      color: 'warning'
    },
    {
      year: '2022',
      title: 'Breakthrough Innovation',
      description: 'Revolutionary platform architecture discovered',
      icon: 'Lightbulb',
      color: 'accent'
    },
    {
      year: '2023',
      title: 'Beta Testing Success',
      description: '500+ early adopters achieved 300% productivity gains',
      icon: 'TrendingUp',
      color: 'success'
    },
    {
      year: '2024',
      title: 'Market Ready',
      description: 'Platform refined and ready for global deployment',
      icon: 'Rocket',
      color: 'primary'
    },
    {
      year: '2025',
      title: 'Your Future Starts',
      description: 'Join the revolution and transform your business today',
      icon: 'Zap',
      color: 'secondary'
    }
  ];

  const getColorClasses = (color, isActive) => {
    const colors = {
      destructive: isActive ? 'bg-destructive text-destructive-foreground border-destructive' : 'bg-destructive/20 text-destructive border-destructive/30',
      warning: isActive ? 'bg-warning text-warning-foreground border-warning' : 'bg-warning/20 text-warning border-warning/30',
      accent: isActive ? 'bg-accent text-accent-foreground border-accent' : 'bg-accent/20 text-accent border-accent/30',
      success: isActive ? 'bg-success text-success-foreground border-success' : 'bg-success/20 text-success border-success/30',
      primary: isActive ? 'bg-primary text-primary-foreground border-primary' : 'bg-primary/20 text-primary border-primary/30',
      secondary: isActive ? 'bg-secondary text-secondary-foreground border-secondary' : 'bg-secondary/20 text-secondary border-secondary/30'
    };
    return colors?.[color] || colors?.primary;
  };

  return (
    <section id="innovation" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Journey to
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the evolution of technology and see where we're heading next
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-destructive via-primary to-secondary rounded-full hidden lg:block"></div>

          {/* Timeline Steps */}
          <div className="space-y-12 lg:space-y-16">
            {timelineSteps?.map((step, index) => (
              <div
                key={index}
                className={`relative cursor-pointer transition-all duration-500 ${
                  index <= activeStep ? 'opacity-100' : 'opacity-50'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                  }`}>
                    <div className={`bg-card border rounded-2xl p-6 transition-all duration-300 ${
                      index === activeStep ? 'border-primary/50 neon-glow scale-105' : 'border-border hover:border-primary/30'
                    }`}>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                          getColorClasses(step?.color, index === activeStep)
                        }`}>
                          <Icon name={step?.icon} size={24} />
                        </div>
                        <div>
                          <div className={`text-2xl font-bold ${
                            index === activeStep ? 'text-primary' : 'text-muted-foreground'
                          }`}>
                            {step?.year}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {step?.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step?.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className={`w-6 h-6 rounded-full border-4 border-background transition-all duration-300 ${
                      index === activeStep ? 'bg-primary scale-150 neon-glow' : 'bg-muted'
                    }`}></div>
                  </div>

                  {/* Spacer */}
                  <div className="w-full lg:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-16 flex justify-center">
          <div className="bg-card/50 backdrop-blur-md border border-border rounded-full px-6 py-3">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Progress:</span>
              <div className="flex space-x-1">
                {timelineSteps?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index <= activeStep ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-primary font-semibold">
                {Math.round(((activeStep + 1) / timelineSteps?.length) * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;