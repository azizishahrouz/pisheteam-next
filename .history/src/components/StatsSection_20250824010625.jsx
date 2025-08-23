import React from "react";
import styles from "./HeroSection.module.css";

const StatsSection = () => (
  <section className={styles.statsSection}>
    <div className={styles.statItem}>
      <span className={styles.statIcon}>
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </span>
      <div className={styles.statValue}>10+</div>
      <div className={styles.statLabel}>Years of Experience</div>
    </div>
    <div className={styles.statsDivider}></div>
    <div className={styles.statItem}>
      <span className={styles.statIcon}>
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      </span>
      <div className={styles.statValue}>35+</div>
      <div className={styles.statLabel}>Projects Completed</div>
    </div>
    <div className={styles.statsDivider}></div>
    <div className={styles.statItem}>
      <span className={styles.statIcon}>
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
      </span>
      <div className={styles.statValue}>5,500+</div>
      <div className={styles.statLabel}>Hours Saved per Year</div>
    </div>
  </section>
);

export default StatsSection; 