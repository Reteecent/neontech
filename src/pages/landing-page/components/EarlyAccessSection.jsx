import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const EarlyAccessSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    role: ''
  });
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex?.test(email);
  };

  const handleEmailSubmit = () => {
    if (!formData?.email) {
      setErrors({ email: 'Email is required' });
      return;
    }
    
    if (!validateEmail(formData?.email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }

    setFormStep(2);
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const resetForm = () => {
    setFormData({ email: '', company: '', role: '' });
    setFormStep(1);
    setIsSuccess(false);
    setErrors({});
  };

  if (isSuccess) {
    return (
      <section id="early-access" className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card border border-success/30 rounded-3xl p-12 neon-glow">
            <div className="w-24 h-24 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Icon name="CheckCircle" size={48} className="text-success" />
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Welcome to the Future!
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              You're now part of an exclusive group of 2,848 innovation leaders. Check your email for next steps.
            </p>

            {/* Onboarding Preview */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">What happens next?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Instant Access</h4>
                    <p className="text-sm text-muted-foreground">Login credentials sent to your email</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={16} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">VIP Community</h4>
                    <p className="text-sm text-muted-foreground">Join exclusive beta user group</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={16} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Early Features</h4>
                    <p className="text-sm text-muted-foreground">Access cutting-edge capabilities first</p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              onClick={resetForm}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Invite Another Team Member
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="early-access" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Secure Your
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Early Access</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join 2,847 forward-thinking innovators who are already transforming their businesses with NeonTech
          </p>
        </div>

        <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 neon-glow">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                formStep >= 1 ? 'bg-primary border-primary text-primary-foreground' : 'border-muted text-muted'
              }`}>
                {formStep > 1 ? <Icon name="Check" size={16} /> : '1'}
              </div>
              <div className={`w-16 h-1 rounded-full ${formStep >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                formStep >= 2 ? 'bg-primary border-primary text-primary-foreground' : 'border-muted text-muted'
              }`}>
                2
              </div>
            </div>
          </div>

          {formStep === 1 ? (
            /* Step 1: Email */
            (<div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Get Instant Access</h3>
                <p className="text-muted-foreground">Enter your email to join the innovation revolution</p>
              </div>
              <div className="space-y-6">
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="your.email@company.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  error={errors?.email}
                  required
                  className="text-center"
                />

                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  onClick={handleEmailSubmit}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Continue to Access
                </Button>
              </div>
              {/* Value Proposition */}
              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
                <h4 className="font-semibold text-foreground mb-3 text-center">What you'll get:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Icon name="Zap" size={16} className="text-primary" />
                    <span className="text-sm text-muted-foreground">Immediate platform access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={16} className="text-primary" />
                    <span className="text-sm text-muted-foreground">Weekly innovation insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" size={16} className="text-primary" />
                    <span className="text-sm text-muted-foreground">Exclusive beta community access</span>
                  </div>
                </div>
              </div>
            </div>)
          ) : (
            /* Step 2: Additional Info */
            (<div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Almost There!</h3>
                <p className="text-muted-foreground">Help us personalize your experience (optional)</p>
              </div>
              <div className="space-y-6">
                <Input
                  type="text"
                  label="Company Name"
                  placeholder="Your Company"
                  value={formData?.company}
                  onChange={(e) => handleInputChange('company', e?.target?.value)}
                />

                <Input
                  type="text"
                  label="Your Role"
                  placeholder="e.g., CTO, Product Manager, Founder"
                  value={formData?.role}
                  onChange={(e) => handleInputChange('role', e?.target?.value)}
                />

                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setFormStep(1)}
                    className="flex-1"
                    iconName="ArrowLeft"
                    iconPosition="left"
                  >
                    Back
                  </Button>
                  
                  <Button
                    variant="default"
                    size="lg"
                    onClick={handleFinalSubmit}
                    loading={isSubmitting}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
                    iconName="Rocket"
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Securing Access...' : 'Get Early Access'}
                  </Button>
                </div>
              </div>
              {/* Trust Indicators */}
              <div className="mt-8 text-center">
                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} className="text-success" />
                    <span>Secure & Private</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>Instant Setup</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="X" size={16} className="text-muted" />
                    <span>No Spam</span>
                  </div>
                </div>
              </div>
            </div>)
          )}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span>2,847 early adopters</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={16} className="text-accent" />
              <span>4.9/5 satisfaction</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={16} className="text-primary" />
              <span>300% avg ROI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;