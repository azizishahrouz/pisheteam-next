"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import styles from './PricingDetails.module.css';

interface PackageDetails {
  name: string;
  price: string;
  period: string;
  color: string;
  features: string[];
  featured: boolean;
}

const PricingDetailsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [packageDetails, setPackageDetails] = useState<PackageDetails | null>(null);

  useEffect(() => {
    if (searchParams) {
      const name = searchParams.get('name');
      const price = searchParams.get('price');
      const period = searchParams.get('period');
      const color = searchParams.get('color');
      const features = searchParams.get('features');
      const featured = searchParams.get('featured');

      if (name && price && period && color && features) {
        setPackageDetails({
          name,
          price,
          period,
          color,
          features: JSON.parse(features),
          featured: featured === 'true'
        });
      }
    }
  }, [searchParams]);

  if (!packageDetails) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>در حال بارگذاری...</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      {/* Header Section */}
      <header className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <button 
            className={styles.backBtn}
            onClick={() => router.back()}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            بازگشت
          </button>
          
          <div className={styles.headerTitle}>
            <h1>جزئیات کامل پلن {packageDetails.name}</h1>
            <p>همه امکانات و ویژگی‌های این پلن را مشاهده کنید</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.packageOverview}>
          <div 
            className={styles.packageCard}
            style={{ '--package-color': packageDetails.color }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.packageIcon}>
                <span className={styles.iconEmoji}>
                  {packageDetails.name === "طلایی" ? "🟡" : 
                   packageDetails.name === "نقره‌ای" ? "⚪" : "🟤"}
                </span>
                <div className={styles.iconRing}></div>
                <div className={styles.iconGlow}></div>
              </div>
              
              <div className={styles.packageInfo}>
                <h2 className={styles.packageName}>{packageDetails.name}</h2>
                <div className={styles.packageTagline}>پلن {packageDetails.name.toLowerCase()}</div>
              </div>
              
              <div className={styles.priceSection}>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>{packageDetails.price}</span>
                  <span className={styles.period}>/{packageDetails.period}</span>
                </div>
                <div className={styles.priceSubtitle}>تومان</div>
              </div>
            </div>

            {packageDetails.featured && (
              <div className={styles.featuredBadge}>
                <span>پیشنهاد ویژه</span>
                <div className={styles.badgeGlow}></div>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>تمام امکانات و ویژگی‌ها</h2>
            <p className={styles.sectionSubtitle}>
              {packageDetails.features.length} ویژگی حرفه‌ای برای رشد کسب‌وکار شما
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {packageDetails.features.map((feature, index) => (
              <div 
                key={index} 
                className={styles.featureCard}
                style={{ '--animation-delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className={styles.featureHeader}>
                  <div className={styles.featureNumber}>{index + 1}</div>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature}</h3>
                  <div className={styles.featureDescription}>
                    این ویژگی به شما کمک می‌کند تا کسب‌وکار خود را بهتر مدیریت کنید
                  </div>
                </div>
                
                <div className={styles.featureStatus}>
                  <span className={styles.statusText}>فعال</span>
                  <div className={styles.statusDot}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>آماده شروع هستید؟</h2>
            <p className={styles.ctaSubtitle}>
              همین الان پلن {packageDetails.name} را انتخاب کنید و از امکانات حرفه‌ای بهره‌مند شوید
            </p>
            
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>
                <span>انتخاب این پلن</span>
                <div className={styles.btnGlow}></div>
              </button>
              
              <button className={styles.secondaryBtn}>
                <span>مشاوره رایگان</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PricingDetailsPage;
