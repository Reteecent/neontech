import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex?.test(email);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setEmail('');
    }, 3000);
  };

  const insights = [
    {
      icon: 'TrendingUp',
      title: 'Market Intelligence',
      description: 'Weekly reports on emerging tech trends and market opportunities'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation Insights',
      description: 'Exclusive previews of breakthrough technologies and features'
    },
    {
      icon: 'Users',
      title: 'Community Updates',
      description: 'Success stories and best practices from fellow innovators'
    },
    {
      icon: 'Zap',
      title: 'Beta Features',
      description: 'First access to new capabilities and platform updates'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Stay Ahead of the
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Innovation Curve</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Get weekly innovation reports and beta feature previews delivered to your inbox. Join 2,847+ forward-thinking professionals.
            </p>

            {/* Value Propositions */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {insights?.map((insight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={insight?.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{insight?.title}</h4>
                    <p className="text-sm text-muted-foreground">{insight?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="X" size={16} className="text-muted" />
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <span>Weekly delivery</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-12">
            {isSuccess ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircle" size={32} className="text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">You're In!</h3>
                <p className="text-muted-foreground mb-6">
                  Welcome to the innovation insider community. Your first report will arrive within 24 hours.
                </p>
                <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                  <p className="text-sm text-success font-medium">
                    <Icon name="Gift" size={16} className="inline mr-2" />
                    Bonus: Exclusive early access discount code sent to your email
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Join the Innovation Insider List
                  </h3>
                  <p className="text-muted-foreground">
                    Get exclusive insights and be first to know about breakthrough features
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="email"
                    label="Email Address"
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e?.target?.value);
                      if (error) setError('');
                    }}
                    error={error}
                    required
                  />

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
                    iconName="Mail"
                    iconPosition="left"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Get Innovation Insights'}
                  </Button>
                </form>

                {/* Sample Content Preview */}
                <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="Eye" size={16} className="text-primary mr-2" />
                    Latest Report Preview
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>AI Revolution: 5 Technologies Reshaping Business</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Quantum Computing: From Lab to Market Reality</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Beta Feature Spotlight: Predictive Analytics 2.0</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Users" size={16} className="text-primary" />
                <span>2,847+ subscribers</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Star" size={16} className="text-accent" />
                <span>4.8/5 content rating</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="TrendingUp" size={16} className="text-success" />
                <span>95% open rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;