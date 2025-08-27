import React from 'react';
import styles from './ServicesSection.module.css';

const services = [
  {
    number: 1,
    title: "Web & Mobile Apps with AI Integration",
    description: "Custom applications powered by artificial intelligence for seamless user experiences across all platforms",
    icon: "🚀",
    color: "#4fc3f7",
    gradient: "linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)"
  },
  {
    number: 2,
    title: "Custom AI Agents",
    description: "Intelligent virtual assistants tailored to your business needs and industry requirements",
    icon: "🤖",
    color: "#72c421",
    gradient: "linear-gradient(135deg, #72c421 0%, #5a9e1a 100%)"
  },
  {
    number: 3,
    title: "Advanced AI Chatbots",
    description: "Next-generation conversational AI that understands context and responds naturally to user queries",
    icon: "💬",
    color: "#ffc94b",
    gradient: "linear-gradient(135deg, #ffc94b 0%, #f39c12 100%)"
  },
  {
    number: 4,
    title: "Computer Vision Solutions",
    description: "AI-powered image and video analysis for automation, quality control, and business insights",
    icon: "👁️",
    color: "#e91e63",
    gradient: "linear-gradient(135deg, #e91e63 0%, #c2185b 100%)"
  },
  {
    number: 5,
    title: "Custom ML Models",
    description: "Tailored machine learning solutions designed specifically for your unique use cases and data",
    icon: "🧠",
    color: "#9c27b0",
    gradient: "linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%)"
  },
  {
    number: 6,
    title: "Finetuning LLMs",
    description: "Optimized large language models customized for your industry, terminology, and specific requirements",
    icon: "⚡",
    color: "#ff5722",
    gradient: "linear-gradient(135deg, #ff5722 0%, #e64a19 100%)"
  }
];

const ServicesSection = () => (
  <section className={styles.servicesSection} id="services">
    <div className={styles.servicesHeader}>
      <div className={styles.titleContainer}>
        <h2 className={styles.servicesTitle}>Our Services</h2>
        <div className={styles.titleUnderline}></div>
      </div>
      <p className={styles.servicesSubtitle}>
        We offer a comprehensive range of AI services to help businesses thrive in the digital age
      </p>
      <div className={styles.servicesDivider}>
        <div className={styles.dividerDot}></div>
        <div className={styles.dividerLine}></div>
        <div className={styles.dividerDot}></div>
      </div>
    </div>
    
    <div className={styles.servicesContainer}>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div 
            className={styles.serviceCard} 
            key={service.number}
            style={{
              '--service-color': service.color,
              '--service-gradient': service.gradient,
              '--animation-delay': `${index * 0.1}s`
            }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.serviceIcon}>
                <span className={styles.iconEmoji}>{service.icon}</span>
                <div className={styles.iconGlow}></div>
                <div className={styles.iconRing}></div>
              </div>
              <div className={styles.serviceNumber}>{service.number}</div>
            </div>
            
            <div className={styles.cardContent}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              
              {/* Features List */}
              <div className={styles.featuresList}>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className={styles.featureItem}>
                    <div className={styles.featureIcon}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className={styles.featureText}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.cardFooter}>
              <button className={styles.exploreBtn}>
                <span>Explore Service</span>
                <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className={styles.cardBackground}></div>
            <div className={styles.cardShine}></div>
          </div>
        ))}
      </div>
    </div>
    
    <div className={styles.servicesCTA}>
      <div className={styles.ctaContent}>
        <h3 className={styles.ctaTitle}>Ready to Transform Your Business?</h3>
        <p className={styles.ctaSubtitle}>Let's discuss how AI can revolutionize your operations</p>
        <button className={styles.ctaButton}>
          <span>Get Started Today</span>
          <div className={styles.buttonGlow}></div>
        </button>
      </div>
    </div>
  </section>
);

export default ServicesSection; 