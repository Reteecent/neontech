import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProductShowcase = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [completionPercentage, setCompletionPercentage] = useState(20);

  const demoScreens = [
    {
      id: 0,
      title: 'AI-Powered Dashboard',
      description: 'Intelligent insights at your fingertips with real-time analytics and predictive modeling.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      hotspots: [
        { x: 25, y: 30, title: 'Real-time Analytics', desc: 'Live data processing with sub-second updates' },
        { x: 75, y: 45, title: 'AI Predictions', desc: 'Machine learning forecasts with 95% accuracy' },
        { x: 50, y: 70, title: 'Smart Alerts', desc: 'Proactive notifications for critical events' }
      ]
    },
    {
      id: 1,
      title: 'Quantum Processing Engine',
      description: 'Experience lightning-fast computations with our quantum-inspired processing architecture.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      hotspots: [
        { x: 30, y: 25, title: 'Quantum Speed', desc: 'Process complex calculations in milliseconds' },
        { x: 70, y: 40, title: 'Parallel Computing', desc: 'Simultaneous multi-threaded operations' },
        { x: 45, y: 65, title: 'Auto-Scaling', desc: 'Dynamic resource allocation based on demand' }
      ]
    },
    {
      id: 2,
      title: 'Intelligent Automation',
      description: 'Let AI handle routine tasks while you focus on strategic decisions and innovation.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      hotspots: [
        { x: 35, y: 35, title: 'Smart Workflows', desc: 'AI-optimized process automation' },
        { x: 65, y: 50, title: 'Decision Trees', desc: 'Intelligent routing and approvals' },
        { x: 50, y: 75, title: 'Learning System', desc: 'Continuously improving performance' }
      ]
    },
    {
      id: 3,
      title: 'Predictive Analytics',
      description: 'Stay ahead with advanced forecasting and trend analysis powered by machine learning.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      hotspots: [
        { x: 40, y: 30, title: 'Trend Analysis', desc: 'Identify patterns before they emerge' },
        { x: 60, y: 55, title: 'Risk Assessment', desc: 'Proactive risk identification and mitigation' },
        { x: 50, y: 80, title: 'Market Insights', desc: 'Competitive intelligence and opportunities' }
      ]
    },
    {
      id: 4,
      title: 'Unified Integration Hub',
      description: 'Connect all your tools and systems in one seamless, intelligent ecosystem.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      hotspots: [
        { x: 25, y: 40, title: 'API Gateway', desc: 'Universal connector for all platforms' },
        { x: 75, y: 35, title: 'Data Sync', desc: 'Real-time synchronization across systems' },
        { x: 50, y: 70, title: 'Smart Mapping', desc: 'Intelligent data transformation and routing' }
      ]
    }
  ];

  const [activeHotspot, setActiveHotspot] = useState(null);

  const handleDemoChange = (index) => {
    setActiveDemo(index);
    setCompletionPercentage(((index + 1) / demoScreens?.length) * 100);
    setActiveHotspot(null);
  };

  const nextDemo = () => {
    const next = (activeDemo + 1) % demoScreens?.length;
    handleDemoChange(next);
  };

  const prevDemo = () => {
    const prev = activeDemo === 0 ? demoScreens?.length - 1 : activeDemo - 1;
    handleDemoChange(prev);
  };

  return (
    <section id="proof" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See the
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Future in Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive product demonstrations showing real capabilities and breakthrough features
          </p>
        </div>

        {/* Main Showcase */}
        <div className="bg-card border border-border rounded-3xl overflow-hidden neon-glow">
          {/* Demo Screen */}
          <div className="relative aspect-video bg-gradient-to-br from-background to-card">
            <Image
              src={demoScreens?.[activeDemo]?.image}
              alt={demoScreens?.[activeDemo]?.title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            
            {/* Hotspots */}
            {demoScreens?.[activeDemo]?.hotspots?.map((hotspot, index) => (
              <button
                key={index}
                className={`absolute w-6 h-6 rounded-full border-2 border-primary bg-primary/20 backdrop-blur-sm transition-all duration-300 hover:scale-150 ${
                  activeHotspot === index ? 'scale-150 bg-primary' : 'animate-pulse'
                }`}
                style={{ left: `${hotspot?.x}%`, top: `${hotspot?.y}%` }}
                onClick={() => setActiveHotspot(activeHotspot === index ? null : index)}
              >
                <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping"></div>
              </button>
            ))}

            {/* Hotspot Tooltip */}
            {activeHotspot !== null && (
              <div
                className="absolute z-10 bg-card border border-border rounded-lg p-4 max-w-xs shadow-lg"
                style={{
                  left: `${demoScreens?.[activeDemo]?.hotspots?.[activeHotspot]?.x}%`,
                  top: `${demoScreens?.[activeDemo]?.hotspots?.[activeHotspot]?.y + 5}%`
                }}
              >
                <h4 className="font-semibold text-foreground mb-1">
                  {demoScreens?.[activeDemo]?.hotspots?.[activeHotspot]?.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {demoScreens?.[activeDemo]?.hotspots?.[activeHotspot]?.desc}
                </p>
              </div>
            )}

            {/* Navigation Arrows */}
            <button
              onClick={prevDemo}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card/80 backdrop-blur-md border border-border rounded-full flex items-center justify-center hover:bg-card transition-colors"
            >
              <Icon name="ChevronLeft" size={24} className="text-foreground" />
            </button>
            
            <button
              onClick={nextDemo}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card/80 backdrop-blur-md border border-border rounded-full flex items-center justify-center hover:bg-card transition-colors"
            >
              <Icon name="ChevronRight" size={24} className="text-foreground" />
            </button>
          </div>

          {/* Demo Info */}
          <div className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="mb-4 lg:mb-0">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {demoScreens?.[activeDemo]?.title}
                </h3>
                <p className="text-muted-foreground">
                  {demoScreens?.[activeDemo]?.description}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-sm text-muted-foreground">
                  {activeDemo + 1} of {demoScreens?.length}
                </div>
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Demo Thumbnails */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {demoScreens?.map((screen, index) => (
                <button
                  key={screen?.id}
                  onClick={() => handleDemoChange(index)}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeDemo === index
                      ? 'border-primary neon-glow scale-105' :'border-border hover:border-primary/50'
                  }`}
                >
                  <Image
                    src={screen?.image}
                    alt={screen?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs text-foreground font-medium truncate">
                      {screen?.title}
                    </p>
                  </div>
                  
                  {activeDemo === index && (
                    <div className="absolute inset-0 border-2 border-primary rounded-lg"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="text-center mt-8">
          <div className="bg-card/50 backdrop-blur-md border border-border rounded-full px-6 py-3 inline-flex items-center space-x-4">
            <Icon name="Eye" size={20} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              Exploration Progress: <span className="text-primary font-semibold">{Math.round(completionPercentage)}%</span>
            </span>
            <div className="flex space-x-1">
              {demoScreens?.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index <= activeDemo ? 'bg-primary' : 'bg-muted'
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

export default ProductShowcase;