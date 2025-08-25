"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import logo from '../assets/لوگو پیشتیم.svg';
// import robotHandshake from '../assets/robot-handshake-human-background-futuristic-digital-age.jpg';

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToExplore = () => {
    const el = document.getElementById("explore-case-studies");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className={styles.heroSection}>
      <nav className={styles.navbar}>
        <div className={`${styles.logo} ${styles.logoContainer}`}>
          <Image src={logo} alt="Pisheteam Logo" className={styles.logoImg} width={160} height={110} />
        </div>
        <button
          className={styles.hamburger}
          aria-label="Open menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
        </button>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.menuOpen : ''}`}>
          {menuOpen && (
            <button
              className={styles.closeMenuBtn}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
          )}
          <li onClick={() => scrollToSection('services')}>Services</li>
          <li onClick={() => scrollToSection('projects-section')}>Projects</li>
          <li onClick={() => scrollToSection('reviews')}>Reviews</li>
          <li onClick={() => scrollToSection('about')}>About Us</li>
          <li onClick={() => scrollToSection('blog')}>Blog</li>
          <li>
            <button className={styles.contactBtn} onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
        </ul>
        {menuOpen && <div className={styles.menuOverlay} onClick={() => setMenuOpen(false)}></div>}
      </nav>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1>
            Tech Partner You Can Trust
            <br />
            To Build Your Next
            <br />
            Ambitious Project
          </h1>
          <p>
            US-based tech agency crafting custom web applications, AI solutions, and automation tools for startups and SMBs
          </p>
          <button className={styles.getInTouch}>Get in Touch</button>
        </div>
        <div className={styles.heroImage}>
          <Image
            // src="https://via.placeholder.com/480x340/4fc3f7/ffffff?text=AI+Touch"
            // src={robotHandshake}
            src="/robot-handshake-human-background-futuristic-digital-age.jpg"

            alt="AI Touch"
            width={480}
            height={340}
            priority
          />
        </div>
      </div>
      <div style={{ position: 'absolute', left: '50%', bottom: 24, transform: 'translateX(-50%)', zIndex: 10 }}>
        <button
          onClick={scrollToExplore}
          className={styles.scrollDownBtn}
          aria-label="Scroll Down"
        >
          <span>&#8595;</span>
        </button>
      </div>
    </header>
  );
};

export default HeroSection;