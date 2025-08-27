import React from 'react';
import styles from './ServicesSection.module.css';

const services = [
  {
    number: 1,
    title: "Web & Mobile apps with AI integration",
    description: "Custom applications powered by artificial intelligence for seamless user experiences",
    icon: "🚀",
    color: "#4fc3f7"
  },
  {
    number: 2,
    title: "Custom AI Agents",
    description: "Intelligent virtual assistants tailored to your business needs",
    icon: "🤖",
    color: "#72c421"
  },
  {
    number: 3,
    title: "Advanced AI Chatbots",
    description: "Next-generation conversational AI that understands and responds naturally",
    icon: "💬",
    color: "#ffc94b"
  },
  {
    number: 4,
    title: "Computer Vision Solutions",
    description: "AI-powered image and video analysis for automation and insights",
    icon: "👁️",
    color: "#e91e63"
  },
  {
    number: 5,
    title: "Custom ML Models",
    description: "Tailored machine learning solutions for your specific use cases",
    icon: "🧠",
    color: "#9c27b0"
  },
  {
    number: 6,
    title: "Finetuning LLMs",
    description: "Optimized large language models for your industry and requirements",
    icon: "⚡",
    color: "#ff5722"
  }
];

const ServicesSection = () => (
  <section className={styles.servicesSection} id="services">
    <div className={styles.servicesHeader}>
      <h2 className={styles.servicesTitle}>Our Services</h2>
      <p className={styles.servicesSubtitle}>
        We offer a range of AI services to help businesses thrive:
      </p>
      <div className={styles.servicesDivider}></div>
    </div>
    
    <div className={styles.servicesBox}>
      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <div className={styles.serviceCard} key={service.number}>
            <div className={styles.serviceCardHeader}>
              <div className={styles.serviceIcon} style={{'--icon-color': service.color}}>
                <span className={styles.iconEmoji}>{service.icon}</span>
                <div className={styles.iconGlow}></div>
              </div>
              <div className={styles.serviceNumber}>{service.number}</div>
            </div>
            
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
            
            <div className={styles.serviceCardFooter}>
              <button className={styles.learnMoreBtn}>
                Learn More
                <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection; 