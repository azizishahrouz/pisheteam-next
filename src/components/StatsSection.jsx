import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faCheckSquare, faClock } from "@fortawesome/free-solid-svg-icons";
import styles from "./HeroSection.module.css";

const StatsSection = () => (
  <section className={styles.statsSection}>
    <div className={styles.statItem}>
      <span className={styles.statIcon}>
        <FontAwesomeIcon icon={faUserTie} />
      </span>
      <div className={styles.statValue}>10+</div>
      <div className={styles.statLabel}>Years of Experience</div>
    </div>
    <div className={styles.statsDivider}></div>
    <div className={styles.statItem}>
      <span className={styles.statIcon}>
        <FontAwesomeIcon icon={faCheckSquare} />
      </span>
      <div className={styles.statValue}>35+</div>
      <div className={styles.statLabel}>Projects Completed</div>
    </div>
    <div className={styles.statsDivider}></div>
    <div className={styles.statItem}>
      <span className={styles.statIcon}>
        <FontAwesomeIcon icon={faClock} />
      </span>
      <div className={styles.statValue}>5,500+</div>
      <div className={styles.statLabel}>Hours Saved per Year</div>
    </div>
  </section>
);

export default StatsSection; 