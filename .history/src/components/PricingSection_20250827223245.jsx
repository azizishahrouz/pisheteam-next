"use client";
import React, { useState } from 'react';
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
      "پاسخ خودکار به سوالات متداول مشتری",
      "حداکثر ۱۰۰ سؤال در روز",
      "ثبت سفارش و پیگیری وضعیت ارسال",
      "قابلیت اتصال به دیتابیس",
      "مدیریت اطلاعات مشتری",
      "گزارش هفتگی بر اساس عملکرد",
      "ارسال گزارش به ایمیل",
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
      "پاسخ‌گویی هوشمند پیشرفته ۲۴ ساعته",
      "پاسخ خودکار به سوالات رایج و نسبتاً پیچیده",
      "حداکثر ۳۰۰ سؤال در روز",
      "پاسخ با لحن قابل تنظیم (صمیمی یا رسمی)",
      "ثبت سفارش و پیگیری وضعیت ارسال پیشرفته",
      "ارجاع مستقیم کاربر به لینک خرید محصول",
      "مدیریت پیشرفته اطلاعات مشتری",
      "برچسب‌گذاری و دسته‌بندی مشتریان",
      "گزارش هفتگی پیشرفته بر اساس عملکرد",
      "ارسال گزارش چندمنظوره به ایمیل",
      "پیام یادآوری و تخفیف خودکار برای مشتریان",
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
      "پاسخ‌گویی هوشمند پیشرفته چند کاناله",
      "سایت، تلگرام، واتساپ و ... – ۲۴ ساعته",
      "پاسخ خودکار به سوالات پیچیده‌تر",
      "حداکثر ۵۰۰ سؤال در روز",
      "پاسخ دقیق و حرفه‌ای با لحن قابل تنظیم",
      "مطابق با برند شما (صمیمی، رسمی، لوکس)",
      "پردازش ویس مشتری",
      "ثبت سفارش صوتی در تلگرام و تبدیل به متن",
      "پردازش عکس ارسالی",
      "پیشنهاد محصول مشابه بر اساس تصویر",
      "ثبت سفارش و پیگیری حرفه‌ای با جزئیات کامل",
      "اتصال به سامانه پیامک و ایمیل برای تبلیغات",
      "ارجاع مستقیم کاربر به لینک خرید محصول",
      "مدیریت حرفه‌ای اطلاعات مشتری",
      "گزارش دقیق هفتگی و ماهانه بر اساس عملکرد",
      "ارسال گزارش حرفه‌ای به ایمیل",
      "تحلیل محصولات یا خدمات پرطرفدار",
      "پنل مدیریت حرفه‌ای متناسب با کسب‌وکار",
      "داشبورد مدیریتی برای مشاهده عملکرد سیستم",
      "مشاوره تخصصی جهت توسعه کسب‌وکار و رشد برند",
      "پیام یادآور برای مشتریان غیرفعال",
      "همراه با کد تخفیف شخصی و بازی انگیزشی",
      "پشتیبانی حرفه‌ای و مشاوره برای بهره‌برداری بهتر",
      "امکان اضافه کردن قابلیت‌های اختصاصی",
      "با هزینه توافقی"
    ],
    featured: true
  }
];

const PricingSection = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpanded = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const renderFeatures = (features, index) => {
    const isExpanded = expandedCards[index];
    const displayFeatures = isExpanded ? features : features.slice(0, 6);
    const hasMore = features.length > 6;

    return (
      <>
        <ul className={styles.featuresList}>
          {displayFeatures.map((feature, featureIndex) => (
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
        {hasMore && (
          <button 
            className={styles.moreBtn}
            onClick={() => toggleExpanded(index)}
          >
            {isExpanded ? 'نمایش کمتر' : 'نمایش بیشتر'}
            <svg 
              className={`${styles.moreIcon} ${isExpanded ? styles.rotated : ''}`} 
              viewBox="0 0 24 24" 
              fill="none"
            >
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </>
    );
  };

  return (
    <section className={styles.pricingSection} id="pricing">
      <div className={styles.pricingHeader}>
        <h2 className={styles.pricingTitle}>معرفی پلن‌های اشتراک چت‌بات پیشتیم</h2>
        <p className={styles.pricingSubtitle}>انتخاب بهترین پلن برای نیازهای کسب‌وکار شما</p>
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
              {renderFeatures(pkg.features, index)}
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
};

export default PricingSection;
