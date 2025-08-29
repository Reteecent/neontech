import React, { useEffect, useState } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import TimelineSection from './components/TimelineSection';
import SolutionSection from './components/SolutionSection';
import ProductShowcase from './components/ProductShowcase';
import TestimonialsSection from './components/TestimonialsSection';
import TrustBadgesSection from './components/TrustBadgesSection';
import EarlyAccessSection from './components/EarlyAccessSection';
import NewsletterSection from './components/NewsletterSection';
import FooterSection from './components/FooterSection';

const LandingPage = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);

  useEffect(() => {
    // Exit intent detection
    const handleMouseLeave = (e) => {
      if (e?.clientY <= 0 && !hasShownExitIntent) {
        setShowExitIntent(true);
        setHasShownExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShownExitIntent]);

  const handleExitIntentClose = () => {
    setShowExitIntent(false);
  };

  const handleExitIntentAccept = () => {
    setShowExitIntent(false);
    const accessSection = document.getElementById('early-access');
    if (accessSection) {
      accessSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection />

        {/* Problem Agitation */}
        <ProblemSection />

        {/* Innovation Timeline */}
        <TimelineSection />

        {/* Solution Benefits */}
        <SolutionSection />

        {/* Product Showcase */}
        <ProductShowcase />

        {/* Social Proof - Testimonials */}
        <TestimonialsSection />

        {/* Trust Badges */}
        <TrustBadgesSection />

        {/* Newsletter Signup */}
        <NewsletterSection />

        {/* Early Access CTA */}
        <EarlyAccessSection />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md">
          <div className="relative max-w-md w-full mx-4">
            <div className="bg-card border border-primary/30 rounded-3xl p-8 neon-glow">
              <button
                onClick={handleExitIntentClose}
                className="absolute -top-2 -right-2 w-8 h-8 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              >
                <span className="text-muted-foreground text-sm">×</span>
              </button>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚀</span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Wait! Don't Miss Out
                </h3>

                <p className="text-muted-foreground mb-6">
                  Get exclusive early access with a <span className="text-primary font-semibold">50% discount</span> for the first 100 innovators who join today.
                </p>

                <div className="space-y-4">
                  <button
                    onClick={handleExitIntentAccept}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-colors neon-glow"
                  >
                    Claim My 50% Discount
                  </button>
                  
                  <button
                    onClick={handleExitIntentClose}
                    className="w-full text-muted-foreground hover:text-foreground transition-colors"
                  >
                    No thanks, I'll pay full price later
                  </button>
                </div>

                <div className="mt-6 flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Limited time</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>First 100 only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;