import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechVision Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      quote: `NeonTech gave us a 6-month head start over our competitors. The AI-powered insights helped us identify market opportunities that others are still missing.`,
      rating: 5,
      metric: '300% ROI increase',
      logo: 'Building'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Founder & CEO',
      company: 'InnovateLab',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      quote: `Being an early adopter of NeonTech positioned us as thought leaders in our industry. Our clients now see us as the innovation partner they need.`,
      rating: 5,
      metric: '500% client growth',
      logo: 'Lightbulb'
    },
    {
      id: 3,
      name: 'Dr. Emily Watson',
      role: 'Head of Innovation',
      company: 'FutureTech Solutions',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: `The quantum-inspired processing capabilities are revolutionary. We're solving problems in minutes that used to take our team weeks to analyze.`,rating: 5,metric: '95% time savings',logo: 'Zap'
    },
    {
      id: 4,
      name: 'James Park',role: 'Product Manager',company: 'NextGen Dynamics',avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',quote: `NeonTech's predictive analytics helped us launch three successful products this year. The competitive intelligence is unmatched in the market.`,
      rating: 5,
      metric: '3 successful launches',
      logo: 'TrendingUp'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'VP of Technology',
      company: 'Digital Pioneers',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      quote: `The automation capabilities freed up our team to focus on strategic initiatives. We've become the innovation leader in our sector.`,rating: 5,metric: '80% automation rate',logo: 'Cog'
    },
    {
      id: 6,
      name: 'David Kim',role: 'Chief Innovation Officer',company: 'Quantum Ventures',avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',quote: `NeonTech's platform scales with our ambitions. What started as a pilot program is now the backbone of our entire digital transformation.`,
      rating: 5,
      metric: '10x scalability',
      logo: 'Rocket'
    },
    {
      id: 7,
      name: 'Rachel Green',
      role: 'Director of Strategy',
      company: 'Innovation Hub',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      quote: `The early access program gave us insights that shaped our entire business strategy. We're now leading market trends instead of following them.`,rating: 5,metric: 'Market leadership',logo: 'Crown'
    },
    {
      id: 8,
      name: 'Michael Foster',role: 'Technology Director',company: 'Advanced Systems',avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face',quote: `The integration capabilities are seamless. NeonTech connected our entire tech stack in ways we never thought possible, creating unprecedented efficiency.`,rating: 5,metric: '100% integration',logo: 'Link'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
      }, 4000);
      
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, testimonials?.length]);

  const handleTestimonialChange = (index) => {
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => prev === 0 ? testimonials?.length - 1 : prev - 1);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Innovation Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the exclusive community of forward-thinking professionals who are already transforming their industries
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 neon-glow">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Avatar and Company Info */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="relative mb-4">
                  <Image
                    src={testimonials?.[activeTestimonial]?.avatar}
                    alt={testimonials?.[activeTestimonial]?.name}
                    className="w-24 h-24 rounded-full mx-auto lg:mx-0 border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon name={testimonials?.[activeTestimonial]?.logo} size={16} className="text-primary-foreground" />
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-foreground">
                  {testimonials?.[activeTestimonial]?.name}
                </h4>
                <p className="text-sm text-primary font-medium">
                  {testimonials?.[activeTestimonial]?.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials?.[activeTestimonial]?.company}
                </p>
                
                {/* Metric Badge */}
                <div className="mt-4 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 inline-block">
                  <span className="text-sm font-semibold text-primary">
                    {testimonials?.[activeTestimonial]?.metric}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <div className="flex-1">
                <div className="mb-4">
                  <Icon name="Quote" size={32} className="text-primary/30" />
                </div>
                
                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-6">
                  {testimonials?.[activeTestimonial]?.quote}
                </blockquote>
                
                {/* Rating */}
                <div className="flex items-center justify-center lg:justify-start space-x-1">
                  {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card/80 backdrop-blur-md border border-border rounded-full flex items-center justify-center hover:bg-card transition-colors lg:left-0 lg:-translate-x-16"
          >
            <Icon name="ChevronLeft" size={24} className="text-foreground" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card/80 backdrop-blur-md border border-border rounded-full flex items-center justify-center hover:bg-card transition-colors lg:right-0 lg:translate-x-16"
          >
            <Icon name="ChevronRight" size={24} className="text-foreground" />
          </button>
        </div>

        {/* Testimonial Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          {testimonials?.map((testimonial, index) => (
            <button
              key={testimonial?.id}
              onClick={() => handleTestimonialChange(index)}
              className={`relative p-4 rounded-xl border transition-all duration-300 ${
                activeTestimonial === index
                  ? 'border-primary/50 bg-primary/10 scale-105' :'border-border bg-card/50 hover:border-primary/30 hover:bg-card/80'
              }`}
            >
              <Image
                src={testimonial?.avatar}
                alt={testimonial?.name}
                className="w-12 h-12 rounded-full mx-auto mb-2 border-2 border-primary/20"
              />
              <p className="text-xs font-medium text-foreground truncate">
                {testimonial?.name}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {testimonial?.company}
              </p>
              
              {activeTestimonial === index && (
                <div className="absolute inset-0 border-2 border-primary rounded-xl"></div>
              )}
            </button>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center">
          <div className="bg-card/50 backdrop-blur-md border border-border rounded-full px-6 py-3 flex items-center space-x-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
            </button>
            
            <div className="flex space-x-1">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleTestimonialChange(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            
            <span className="text-sm text-muted-foreground">
              {activeTestimonial + 1} / {testimonials?.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;