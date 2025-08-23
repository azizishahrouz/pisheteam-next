"use client";

import React from "react";
import styles from "./DiscoveryCallSection.module.css";

const DiscoveryCallSection = () => (
  <section className={styles.discoverySection}>
    <h4 className={styles.discoverySubtitle} id="explore-case-studies">
      Explore our case studies
    </h4>
    <h2 className={styles.discoveryTitle}>
      Book a discovery call
    </h2>
    <button
      className={styles.discoveryBtn}
      onClick={() => {
        const el = document.getElementById("explore-case-studies");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Get in Touch
    </button>
  </section>
);

export default DiscoveryCallSection; 