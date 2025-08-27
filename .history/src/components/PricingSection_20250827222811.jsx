"use client";
import React from 'react';
import styles from './PricingSection.module.css';

const packages = [
  {
    name: "برنزی",
    price: "۵ میلیون",
    period: "ماه",
    color: "#cd7f32",
    glowColor: "205, 127, 50",
    features: [
      "پاسخ‌گویی هوشمند ۲۴ ساعته",
      "حداکثر ۱۰۰ سؤال در روز",
      "ثبت سفارش و پیگیری",
      "اتصال به دیتابیس",
      "گزارش هفتگی",
      "پشتیبانی پایه"
    ],
    featured: false
  },
  {
    name: "نقره‌ای",
    price: "۱۰ میلیون",
    period: "ماه",
    color: "#c0c0c0",
    glowColor: "192, 192, 192",
    features: [
      "پاسخ‌گویی پیشرفته ۲۴ ساعته",
      "حداکثر ۳۰۰ سؤال در روز",
      "لحن قابل تنظیم",
      "مدیریت پیشرفته مشتریان",
      "گزارش هفتگی پیشرفته",
      "پشتیبانی استاندارد"
    ],
    featured: false
  },
  {
    name: "طلایی",
    price: "۱۵ میلیون",
    period: "ماه",
    color: "#ffd700",
    glowColor: "255, 215, 0",
    features: [
      "چند کاناله (سایت، تلگرام، واتساپ)",
      "حداکثر ۵۰۰ سؤال در روز",
      "پردازش ویس و عکس",
      "پنل مدیریت حرفه‌ای",
      "مشاوره تخصصی",
      "پشتیبانی حرفه‌ای"
    ],
    featured: true
  }
];

const PricingSection = () => (
  <section className={styles.pricingSection} id="pricing">
    <div className={styles.pricingHeader}>
      <h2 className={styles.pricingTitle}>پلن‌های اشتراک</h2>
      <p className={styles.pricingSubtitle}>انتخاب بهترین پلن برای کسب‌وکار شما</p>
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
              {pkg.name === "طلایی" && (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" fill="var(--card-color)" stroke="var(--card-color)" strokeWidth="1"/>
                </svg>
              )}
              {pkg.name === "نقره‌ای" && (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="var(--card-color)" stroke="var(--card-color)" strokeWidth="1"/>
                  <path d="M12 6V18M6 12H18" stroke="#0f1123" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
              {pkg.name === "برنزی" && (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
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
                  <div className={styles.featureNumber}>{featureIndex + 1}</div>
                  <span className={styles.featureText}>{feature}</span>
                  <div className={styles.featureIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}/>
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.cardFooter}>
            <button className={styles.buyNowBtn}>
              انتخاب این پلن
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PricingSection;
