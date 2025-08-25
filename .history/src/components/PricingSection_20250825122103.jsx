"use client";
import React from 'react';
import styles from "./HeroSection.module.css";

const PricingSection = () => {
  const packages = [
    {
      name: "Bronze",
      price: "$299",
      period: "/month",
      description: "Perfect for startups and small businesses",
      features: [
        "Basic AI Automation",
        "5 Custom Workflows",
        "Email Support",
        "Basic Analytics",
        "Standard Templates"
      ],
      popular: false,
      color: "#cd7f32"
    },
    {
      name: "Silver",
      price: "$599",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI Automation",
        "15 Custom Workflows",
        "Priority Support",
        "Advanced Analytics",
        "Custom Templates",
        "API Access",
        "Team Collaboration"
      ],
      popular: true,
      color: "#c0c0c0"
    },
    {
      name: "Gold",
      price: "$999",
      period: "/month",
      description: "For enterprise-level solutions",
      features: [
        "Premium AI Automation",
        "Unlimited Workflows",
        "24/7 Dedicated Support",
        "Enterprise Analytics",
        "Custom Development",
        "Full API Access",
        "Advanced Security",
        "White-label Solutions"
      ],
      popular: false,
      color: "#ffd700"
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
            className={`${styles.pricingCard} ${pkg.popular ? styles.popularCard : ''}`}
          >
            {pkg.popular && (
              <div className={styles.popularBadge}>Most Popular</div>
            )}
            
            <div className={styles.packageHeader}>
              <div 
                className={styles.packageIcon}
                style={{ backgroundColor: pkg.color }}
              >
                {pkg.name === "Gold" && "👑"}
                {pkg.name === "Silver" && "🥈"}
                {pkg.name === "Bronze" && "🥉"}
              </div>
              <h3 className={styles.packageName}>{pkg.name}</h3>
              <p className={styles.packageDescription}>{pkg.description}</p>
            </div>
            
            <div className={styles.packagePrice}>
              <span className={styles.price}>{pkg.price}</span>
              <span className={styles.period}>{pkg.period}</span>
            </div>
            
            <ul className={styles.featuresList}>
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={styles.featureItem}>
                  <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className={styles.selectPlanBtn}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
