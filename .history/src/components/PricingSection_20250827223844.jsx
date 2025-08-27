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
  const openDetailedFeatures = (pkg) => {
    // ایجاد پنجره جدید با جزئیات کامل
    const featuresText = pkg.features.map((feature, index) => `${index + 1}. ${feature}`).join('\n\n');
    const windowFeatures = 'width=800,height=600,scrollbars=yes,resizable=yes';
    const newWindow = window.open('', '_blank', windowFeatures);
    
    newWindow.document.write(`
      <!DOCTYPE html>
      <html dir="rtl" lang="fa">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>جزئیات کامل پلن ${pkg.name} - پیشتیم</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0f1123 0%, #1a1c3b 100%);
            color: #fff;
            padding: 30px;
            line-height: 1.6;
            direction: rtl;
          }
          
          .container {
            max-width: 700px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            padding: 30px;
            border: 2px solid ${pkg.color};
            box-shadow: 0 0 30px rgba(${pkg.glowColor}, 0.3);
          }
          
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid ${pkg.color};
          }
          
          .planName {
            font-size: 2.5rem;
            font-weight: 800;
            color: ${pkg.color};
            margin-bottom: 10px;
            text-shadow: 0 2px 8px rgba(${pkg.glowColor}, 0.5);
          }
          
          .planPrice {
            font-size: 1.5rem;
            color: #ffc94b;
            font-weight: 600;
          }
          
          .featuresList {
            list-style: none;
            padding: 0;
          }
          
          .featureItem {
            background: rgba(255, 255, 255, 0.03);
            margin: 15px 0;
            padding: 20px;
            border-radius: 12px;
            border-right: 4px solid ${pkg.color};
            transition: all 0.3s ease;
          }
          
          .featureItem:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: translateX(-5px);
          }
          
          .featureNumber {
            display: inline-block;
            width: 30px;
            height: 30px;
            background: ${pkg.color};
            color: #0f1123;
            border-radius: 50%;
            text-align: center;
            line-height: 30px;
            font-weight: 700;
            margin-left: 15px;
            box-shadow: 0 2px 8px rgba(${pkg.glowColor}, 0.4);
          }
          
          .featureText {
            font-size: 1.1rem;
            font-weight: 500;
            color: #b0b3c8;
          }
          
          .closeBtn {
            position: fixed;
            top: 20px;
            left: 20px;
            background: #e74c3c;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
          }
          
          .closeBtn:hover {
            background: #c0392b;
            transform: scale(1.05);
          }
          
          @media (max-width: 600px) {
            body { padding: 15px; }
            .container { padding: 20px; }
            .planName { font-size: 2rem; }
            .featureItem { padding: 15px; }
          }
        </style>
      </head>
      <body>
        <button class="closeBtn" onclick="window.close()">بستن</button>
        <div class="container">
          <div class="header">
            <h1 class="planName">پلن ${pkg.name}</h1>
            <p class="planPrice">${pkg.price} تومان / ${pkg.period}</p>
          </div>
          <ul class="featuresList">
            ${pkg.features.map((feature, index) => `
              <li class="featureItem">
                <span class="featureNumber">${index + 1}</span>
                <span class="featureText">${feature}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </body>
      </html>
    `);
    
    newWindow.document.close();
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
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
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
                <button 
                  className={styles.detailsBtn}
                  onClick={() => openDetailedFeatures(pkg)}
                >
                  مشاهده جزئیات کامل
                  <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
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
