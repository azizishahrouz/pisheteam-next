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
    icon: "🟤",
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
    icon: "⚪",
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
    icon: "🟡",
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
              '--animation-delay': `${index * 0.2}s`
            }}
          >
            {/* Card Background Effects */}
            <div className={styles.cardBackground}>
              <div className={styles.bgGradient}></div>
              <div className={styles.bgPattern}></div>
              <div className={styles.bgShine}></div>
            </div>
            
            {/* Featured Badge */}
            {pkg.featured && (
              <div className={styles.featuredBadge}>
                <span>پیشنهاد ویژه</span>
                <div className={styles.badgeGlow}></div>
                <div className={styles.badgeSparkle}></div>
              </div>
            )}
            
            <div className={styles.cardHeader}>
              <div className={styles.packageIcon}>
                <span className={styles.iconEmoji}>{pkg.icon}</span>
                <div className={styles.iconRing}></div>
                <div className={styles.iconGlow}></div>
                <div className={styles.iconSparkles}>
                  <div className={styles.sparkle}></div>
                  <div className={styles.sparkle}></div>
                  <div className={styles.sparkle}></div>
                </div>
              </div>
              
              <div className={styles.packageInfo}>
                <div className={styles.packageName}>{pkg.name}</div>
                <div className={styles.packageTagline}>پلن {pkg.name.toLowerCase()}</div>
                <div className={styles.packageDescription}>
                  {pkg.featured ? 'پیشرفته‌ترین امکانات' : 'امکانات پایه و ضروری'}
                </div>
              </div>
              
              <div className={styles.priceSection}>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>{pkg.price}</span>
                  <span className={styles.period}>/{pkg.period}</span>
                </div>
                <div className={styles.priceSubtitle}>تومان</div>
                <div className={styles.priceDecoration}>
                  <div className={styles.priceLine}></div>
                  <div className={styles.priceDot}></div>
                  <div className={styles.priceLine}></div>
                </div>
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
                {pkg.features.slice(0, 6).map((feature, featureIndex) => (
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
              
              {pkg.features.length > 6 && (
                <div className={styles.moreFeatures}>
                  <span className={styles.moreText}>+{pkg.features.length - 6} ویژگی دیگر</span>
                  <div className={styles.moreIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
                <span>مشاهده جزئیات کامل</span>
                <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className={styles.btnGlow}></div>
              </button>
              
              <button className={styles.buyNowBtn}>
                <span>انتخاب این پلن</span>
                <div className={styles.btnGlow}></div>
                <div className={styles.btnSparkle}></div>
              </button>
            </div>
            
            {/* Card Shine Effect */}
            <div className={styles.cardShine}></div>
            
            {/* Floating Elements */}
            <div className={styles.floatingElements}>
              <div className={styles.floatElement}></div>
              <div className={styles.floatElement}></div>
              <div className={styles.floatElement}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
