import React from "react";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects-section" },
  { label: "Plans & Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" }
];

const socials = [
  {
    link: "https://facebook.com/",
    title: "Facebook",
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
    ),
  },
  {
    link: "https://twitter.com/",
    title: "Twitter",
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z"/></svg>
    ),
  },
  {
    link: "https://www.instagram.com/pisheteam.ir?igsh=cDBjeGlpbmdqYzlr",
    title: "Instagram",
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
    ),
  },
  {
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=pisheteam.info@gmail.com",
    title: "Gmail",
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-8 7.5L4 6.01V6h16v.01L12 11.5zm8 6.5H4v-9.99l8 6.49 8-6.49V18z"/>
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* About Us */}
        <div className={styles.column}>
          <div className={styles.title}>About Us</div>
          <div className={styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis.
          </div>
        </div>
        {/* Quick Links */}
        <div className={styles.column}>
          <div className={styles.title}>Quick Links</div>
          <ul className={styles.linkList}>
            {quickLinks.map((item, idx) => (
              <li key={idx} className={styles.linkItem}>
                <a href={item.href} className={styles.linkStyle}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Follow Us */}
        <div className={styles.column}>
          <div className={styles.title}>Follow Us</div>
          <div className={styles.socialRow}>
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                title={social.title}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 