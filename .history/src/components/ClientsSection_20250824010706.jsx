import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./HeroSection.module.css";

const clients = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", alt: "Sass" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", alt: "C" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", alt: "Go" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", alt: "Photoshop" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg", alt: "Twitter" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg", alt: "Chrome" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg", alt: "Facebook" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stackoverflow/stackoverflow-original.svg", alt: "Stack Overflow" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
];

const ClientsSection = () => (
  <section className={styles.clientsSection}>
    <h3 className={styles.clientsTitle}>Our clients:</h3>
    <Marquee gradient={false} speed={40} pauseOnHover={true} className={styles.clientsLogos}>
      {clients.map((client, idx) => (
        <span className={styles.clientLogoWrapper} key={idx}>
          <img src={client.src} alt={client.alt} className={styles.clientLogo} />
        </span>
      ))}
    </Marquee>
  </section>
);

export default ClientsSection; 