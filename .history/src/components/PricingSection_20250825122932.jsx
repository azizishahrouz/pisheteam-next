"use client";
import React from 'react';
import styles from "./HeroSection.module.css";

const PricingSection = () => {
  const packages = [
    {
      name: "BRONZE",
      price: "$4.99",
      period: "month",
      features: [
        { text: "Basic AI Automation", included: true },
        { text: "5 Custom Workflows", included: true },
        { text: "Email Support", included: false },
        { text: "Basic Analytics", included: false },
        { text: "Standard Templates", included: false }
      ],
      color: "#cd7f32"
    },
    {
      name: "GOLD",
      price: "$24.99",
      period: "month",
      features: [
        { text: "Advanced AI Automation", included: true },
        { text: "15 Custom Workflows", included: true },
        { text: "Priority Support", included: true },
        { text: "Advanced Analytics", included: true },
        { text: "Custom Templates", included: true }
      ],
      color: "#ffd700",
      featured: true
    },
    {
      name: "SILVER",
      price: "$14.99",
      period: "month",
      features: [
        { text: "Standard AI Automation", included: true },
        { text: "10 Custom Workflows", included: true },
        { text: "Email Support", included: true },
        { text: "Standard Analytics", included: false },
        { text: "Basic Templates", included: false }
      ],
      color: "#c0c0c0"
    }
  ];

  return (
    <section className={styles.pricingSection} id="pricing">
      <div className={styles.pricingHeader}>
        <h2 className={styles.pricingTitle}>Choose Your Plan</h2>
        <p className={styles.pricingSubtitle}>Select the perfect package for your business needs</p>
      </div>
      
      <div className={styles.pricingContainer}>
        {packages.map((pkg, index) => (
          <div 
            key={index} 
            className={`${styles.pricingCard} ${pkg.featured ? styles.featuredCard : ''}`}
          >
            <div className={styles.cardHeader}>
              <div 
                className={styles.packageName}
                style={{ color: pkg.color }}
              >
                {pkg.name}
              </div>
              <div className={styles.priceSection}>
                <span 
                  className={styles.price}
                  style={{ color: pkg.color }}
                >
                  {pkg.price}
                </span>
                <span className={styles.period}>/{pkg.period}</span>
              </div>
            </div>
            
            <div className={styles.cardBody}>
              <ul className={styles.featuresList}>
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    <span 
                      className={styles.featureNumber}
                      style={{ backgroundColor: pkg.color }}
                    >
                      {featureIndex + 1}
                    </span>
                    <span className={styles.featureText}>{feature.text}</span>
                    <div className={`${styles.featureIcon} ${feature.included ? styles.checkIcon : styles.xIcon}`}>
                      {feature.included ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.cardFooter}>
              <button 
                className={styles.buyNowBtn}
                style={{ 
                  backgroundColor: pkg.color,
                  color: '#0f1123'
                }}
              >
                BUY NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
