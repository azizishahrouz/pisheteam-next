import React from 'react';
import styles from './ServicesSection.module.css';

const services = [
  {
    id: 1,
    icon: "💻",
    number: "01",
    title: "طراحی وب‌سایت",
    description: "طراحی مدرن و ریسپانسیو با آخرین تکنولوژی‌های روز دنیا",
    features: ["طراحی UI/UX حرفه‌ای", "کاملاً ریسپانسیو", "بهینه‌سازی SEO", "سرعت بالا"]
  },
  {
    id: 2,
    icon: "📱",
    number: "02", 
    title: "اپلیکیشن موبایل",
    description: "توسعه اپلیکیشن‌های iOS و Android با تجربه کاربری عالی",
    features: ["طراحی بومی", "عملکرد بالا", "امنیت قوی", "پشتیبانی کامل"]
  },
  {
    id: 3,
    icon: "🤖",
    number: "03",
    title: "هوش مصنوعی",
    description: "پیاده‌سازی راه‌حل‌های هوشمند برای کسب‌وکار شما",
    features: ["چت‌بات هوشمند", "پردازش داده", "یادگیری ماشین", "اتوماسیون"]
  },
  {
    id: 4,
    icon: "☁️",
    number: "04",
    title: "راه‌حل‌های ابری",
    description: "مهاجرت و مدیریت زیرساخت‌های ابری برای کسب‌وکار شما",
    features: ["AWS/Azure/GCP", "مقیاس‌پذیری", "امنیت بالا", "مدیریت هزینه"]
  },
  {
    id: 5,
    icon: "🔒",
    number: "05",
    title: "امنیت سایبری",
    description: "محافظت کامل از داده‌ها و سیستم‌های شما در برابر تهدیدات",
    features: ["آزمون نفوذ", "رمزنگاری پیشرفته", "نظارت ۲۴/۷", "بازیابی فاجعه"]
  },
  {
    id: 6,
    icon: "📊",
    number: "06",
    title: "تحلیل داده",
    description: "تبدیل داده‌های خام به بینش‌های ارزشمند برای تصمیم‌گیری",
    features: ["داشبورد تعاملی", "گزارش‌های خودکار", "پیش‌بینی روند", "تصمیم‌گیری هوشمند"]
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
            
            <div className={styles.cardFooter}>
              <button className={styles.exploreBtn}>
                <span>Explore Service</span>
                <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
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