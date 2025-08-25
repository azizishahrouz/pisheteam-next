"use client";
import React from 'react';
import styles from "./HeroSection.module.css";

const AfterSalesServiceSection = () => {
  const services = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#4fc3f7"/>
          <path d="M13 3c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1s-1-.45-1-1V3z" fill="#4fc3f7"/>
          <path d="M19 3c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1s-1-.45-1-1V3z" fill="#4fc3f7"/>
        </svg>
      ),
      title: "Discovery & Road-Mapping",
      description: "Deep-dive into your goals, data, and workflows. Technical architecture, timeline, and budget you can bank on",
      color: "#4fc3f7"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" fill="#72c421"/>
          <path d="M14.5 9.5L9 15l-1.5-1.5 5.5-5.5 1.5 1.5z" fill="#72c421"/>
        </svg>
      ),
      title: "Build & Iterate",
      description: "Rapid prototyping, weekly demos, transparent milestones, and prompt-engineering support",
      color: "#72c421"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#ffc94b"/>
        </svg>
      ),
      title: "Launch & Scale",
      description: "Integration with your stack (Azure, AWS, etc.) Ongoing optimization so your ROI compounds over time",
      color: "#ffc94b"
    }
  ];

  return (
    <section className={styles.afterSalesSection} id="after-sales">
      <div className={styles.afterSalesHeader}>
        <h2 className={styles.afterSalesTitle}>Our Proven Process for Success</h2>
        <p className={styles.afterSalesSubtitle}>
          No fluff, no endless sprints—just an expert-built AI solution that ships fast and pays for itself.
        </p>
      </div>
      
      <div className={styles.afterSalesContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.afterSalesCard}>
            <div className={styles.serviceIconWrapper} style={{ '--icon-color': service.color }}>
              {service.icon}
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className={styles.afterSalesCTA}>
        <button className={styles.learnMoreBtn}>
          Reach out to learn more
        </button>
      </div>
    </section>
  );
};

export default AfterSalesServiceSection;
