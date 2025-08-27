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
            </div>
            
            <div className={styles.serviceCTA}>
              <div className={styles.ctaContent}>
                <h3 className={styles.ctaTitle}>آماده شروع پروژه‌تان هستید؟</h3>
                <p className={styles.ctaDescription}>
                  با تیم متخصص ما، رویای دیجیتال‌تان را به واقعیت تبدیل کنید
                </p>
                <div className={styles.ctaActions}>
                  <button className={styles.primaryBtn}>
                    <span>شروع پروژه</span>
                    <div className={styles.btnGlow}></div>
                  </button>
                  <button className={styles.secondaryBtn}>
                    <span>مشاوره رایگان</span>
                    <svg className={styles.phoneIcon} viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <div className={styles.ctaStats}>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>۵۰۰+</span>
                    <span className={styles.statLabel}>پروژه موفق</span>
                  </div>
                  <div className={styles.statDivider}></div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>۹۸%</span>
                    <span className={styles.statLabel}>رضایت مشتری</span>
                  </div>
                  <div className={styles.statDivider}></div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>۲۴/۷</span>
                    <span className={styles.statLabel}>پشتیبانی</span>
                  </div>
                </div>
              </div>
              <div className={styles.ctaDecoration}>
                <div className={styles.floatingElement}></div>
                <div className={styles.floatingElement}></div>
                <div className={styles.floatingElement}></div>
              </div>
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