"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './PricingSection.module.css';

const packages = [
  {
    name: "برنزی",
    price: "۵ میلیون",
    period: "ماه",
    color: "#cd7f32",
    glowColor: "205, 127, 50",
    icon: "bronze",
    features: [
      "پاسخ‌گویی هوشمند ۲۴ ساعته",
      "جواب خودکار به سوالات متداول مشتری (حداکثر ۱۰۰ سوال در روز)",
      "ثبت سفارش و پیگیری وضعیت ارسال",
      "قابلیت اتصال به دیتابیس",
      "مدیریت اطلاعات مشتری",
      "گزارش هفتگی بر اساس عملکرد",
      "ارسال گزارش برای ایمیل",
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
    icon: "silver",
    features: [
      "پاسخ‌گویی هوشمند پیشرفته ۲۴ ساعته",
      "جواب خودکار به سوالات رایج و پیچیده (حداکثر ۳۰۰ سوال در روز)",
      "پاسخ با لحن قابل تنظیم (مثل صمیمی یا رسمی)",
      "ثبت سفارش و پیگیری وضعیت ارسال پیشرفته",
      "ارجاع مستقیم کاربر به لینک خرید محصول",
      "مدیریت پیشرفته اطلاعات مشتری",
      "برچسب‌گذاری و دسته‌بندی مشتری",
      "گزارش هفتگی پیشرفته بر اساس عملکرد",
      "ارسال گزارش چند منظوره برای ایمیل",
      "پیام یادآوری و تخفیف خودکار",
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
    icon: "gold",
    features: [
      "پاسخ‌گویی هوشمند پیشرفته چند کاناله (سایت، تلگرام...) ۲۴ ساعته",
      "جواب خودکار به سوالات پیچیده‌تر (حداکثر ۵۰۰ سوال در روز)",
      "پاسخ دقیق‌تر و حرفه‌ای‌تر با لحن قابل تنظیم برند شما (مثل صمیمی یا رسمی یا لوکس)",
      "پردازش ویس مشتری (مثل سفارش با ویس) و تبدیل به متن در تلگرام",
      "پردازش عکس (مثل پیشنهاد محصول مشابه برای عکس ارسال شده)",
      "ثبت سفارش و پیگیری حرفه‌ای با جزئیات کامل",
      "امکان اتصال به پیامک و ایمیل برای تبلیغات هدفمند",
      "ارجاع مستقیم کاربر به لینک خرید محصول",
      "مدیریت حرفه‌ای اطلاعات مشتری",
      "گزارش دقیق هفتگی و ماهانه پیشرفته بر اساس عملکرد",
      "ارسال گزارش حرفه‌ای به ایمیل",
      "تحلیل محصولات یا خدمات پرطرفدار",
      "پنل مدیریت حرفه‌ای مختص به کسب و کار شما",
      "داشبورد مدیریت برای دیدن عملکرد سیستم",
      "مشاوره تخصصی برای توسعه کسب و کار و رشد برند و مجموعه شما",
      "پیام یادآور برای مشتریان غیر فعال همراه با دریافت کد تخفیف شخصی + بازی",
      "پشتیبانی حرفه‌ای و مشاوره برای استفاده بهتر از سیستم",
      "امکان اضافه کردن قابلیت‌های اختصاصی با مبالغ توافقی"
    ],
    featured: true
  }
];

const PricingSection = () => {
  const router = useRouter();

  const navigateToDetails = (pkg) => {
    const params = new URLSearchParams({
      name: pkg.name,
      price: pkg.price,
      period: pkg.period,
      color: pkg.color,
      features: JSON.stringify(pkg.features),
      featured: pkg.featured.toString()
    });
    
    router.push(`/pricing-details?${params.toString()}`);
  };

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'bronze':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#cd7f32" stroke="#8B4513" strokeWidth="1"/>
            <path d="M12 6v12M8 12h8" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case 'silver':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
            <path d="M12 6v12M8 12h8" stroke="#808080" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="12" cy="12" r="4" fill="#e0e0e0"/>
          </svg>
        );
      case 'gold':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#ffd700" stroke="#FFA500" strokeWidth="1"/>
            <path d="M12 6v12M8 12h8" stroke="#FFA500" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="12" cy="12" r="4" fill="#FFD700"/>
            <path d="M12 8l1 3h3l-2 2 1 3-3-2-3 2 1-3-2-2h3z" fill="#FFA500"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.pricingSection} id="pricing">
      <div className={styles.pricingHeader}>
        <div className={styles.headerContent}>
          <h2 className={styles.pricingTitle}>معرفی پلن‌های اشتراک چت‌بات پیشتیم</h2>
          <p className={styles.pricingSubtitle}>انتخاب بهترین پلن برای نیازهای کسب‌وکار شما</p>
          <div className={styles.headerDecoration}>
            <div className={styles.decorationLine}></div>
            <div className={styles.decorationDot}></div>
            <div className={styles.decorationLine}></div>
          </div>
        </div>
      </div>
      
      <div className={styles.pricingContainer}>
        {packages.map((pkg, index) => (
          <div 
            key={index} 
            className={`${styles.pricingCard} ${pkg.featured ? styles.featuredCard : ''}`}
            style={{
              '--card-color': pkg.color,
              '--glow-color': pkg.glowColor,
              '--animation-delay': `${index * 0.1}s`
            }}
          >
            {/* Card Background Effects */}
            <div className={styles.cardBackground}>
              <div className={styles.bgGradient}></div>
              <div className={styles.bgPattern}></div>
            </div>
            
            {/* Featured Badge - Positioned to avoid text overlap */}
            {pkg.featured && (
              <div className={styles.featuredBadge}>
                <span>پیشنهاد ویژه</span>
                <div className={styles.badgeGlow}></div>
              </div>
            )}
            
            <div className={styles.cardHeader}>
              <div className={styles.packageIcon}>
                <div className={styles.iconWrapper}>
                  {getIcon(pkg.icon)}
                </div>
                <div className={styles.iconRing}></div>
                <div className={styles.iconGlow}></div>
              </div>
              
              <div className={styles.packageInfo}>
                <div className={styles.packageName}>{pkg.name}</div>
                <div className={styles.packageTagline}>پلن {pkg.name.toLowerCase()}</div>
              </div>
              
              <div className={styles.priceSection}>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>{pkg.price}</span>
                  <span className={styles.period}>/{pkg.period}</span>
                </div>
                <div className={styles.priceSubtitle}>تومان</div>
              </div>
            </div>
            
            <div className={styles.cardBody}>
              <div className={styles.featuresHeader}>
                <h3 className={styles.featuresTitle}>امکانات کلیدی</h3>
                <div className={styles.featuresCount}>
                  <span className={styles.countNumber}>{pkg.features.length}</span>
                  <span className={styles.countText}>ویژگی</span>
                </div>
              </div>
              
              <ul className={styles.featuresList}>
                {pkg.features.slice(0, 2).map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    <div className={styles.featureNumber}>{featureIndex + 1}</div>
                    <span className={styles.featureText}>{feature}</span>
                    <div className={styles.featureIcon}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}/>
                      </svg>
                    </div>
                  </li>
                ))}
              </ul>
              
              {pkg.features.length > 2 && (
                <div className={styles.moreFeatures}>
                  <span className={styles.moreText}>+{pkg.features.length - 2} ویژگی دیگر</span>
                  <div className={styles.moreIcon}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
            
            <div className={styles.cardFooter}>
              <button 
                className={styles.detailsBtn}
                onClick={() => navigateToDetails(pkg)}
              >
                <span>جزئیات</span>
                <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button className={styles.buyNowBtn}>
                <span>انتخاب</span>
              </button>
            </div>
            
            {/* Card Shine Effect */}
            <div className={styles.cardShine}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
