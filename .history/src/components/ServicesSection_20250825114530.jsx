import React from "react";
import styles from "./HeroSection.module.css";

const services = [
  {
    number: 1,
    title: "Web & Mobile apps with AI integration",
  },
  {
    number: 2,
    title: "Custom AI Agents",
  },
  {
    number: 3,
    title: "Advanced AI Chatbots",
  },
  {
    number: 4,
    title: "Computer Vision Solutions",
  },
  {
    number: 5,
    title: "Custom ML Models",
  },
  {
    number: 6,
    title: "Finetuning LLMs",
  },
];

const ServicesSection = () => (
  <section className={styles.servicesSection} id="services">
    <h2 className={styles.servicesTitle}>Our Services</h2>
    <p className={styles.servicesSubtitle}>
      We offer a range of AI services to help businesses thrive:
    </p>
    <div className={styles.servicesBox}>
      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <div className={styles.serviceCard} key={service.number}>
            <div className={styles.serviceNumber}>{service.number}</div>
            <div className={styles.serviceTitle}>{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection; 