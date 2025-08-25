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
      color: "#cd7f32",
      glowColor: "#cd7f32"
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
      glowColor: "#ffd700",
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
      color: "#c0c0c0",
      glowColor: "#c0c0c0"
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
            style={{
              '--card-color': pkg.color,
              '--glow-color': pkg.glowColor
            }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.packageIcon}>
                {pkg.name === "GOLD" && (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" fill="var(--card-color)" stroke="var(--card-color)" strokeWidth="1"/>
                  </svg>
                )}
                {pkg.name === "SILVER" && (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="var(--card-color)" stroke="var(--card-color)" strokeWidth="1"/>
                    <path d="M12 6V18M6 12H18" stroke="#0f1123" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
                {pkg.name === "BRONZE" && (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.09 8.26L19 9L14 14.14L15.18 21.02L12 17.77L8.82 21.02L10 14.14L5 9L10.91 8.26L12 2Z" fill="var(--card-color)" stroke="var(--card-color)" strokeWidth="1"/>
                    <circle cx="12" cy="12" r="3" fill="#0f1123"/>
                  </svg>
                )}
              </div>
              <div className={styles.packageName}>{pkg.name}</div>
              <div className={styles.priceSection}>
                <span className={styles.price}>{pkg.price}</span>
                <span className={styles.period}>/{pkg.period}</span>
              </div>
            </div>
            
            <div className={styles.cardBody}>
              <ul className={styles.featuresList}>
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    <span className={styles.featureNumber}>{featureIndex + 1}</span>
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
              <button className={styles.buyNowBtn}>
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
