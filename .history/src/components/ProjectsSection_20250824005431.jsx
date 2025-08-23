"use client";

import React, { useRef } from "react";
import styles from "./HeroSection.module.css";
import {projects} from './project'

const scrollAmount = 350; // px

const ProjectsSection = () => {
  const gridRef = useRef(null);
  const sectionRef = useRef(null);

  const scrollLeft = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Floating scroll-to-projects button
  const handleScrollToProjects = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.projectsSection} ref={sectionRef} id="projects-section">
      <h2 className={styles.projectsTitle}>Projects</h2>
      <p className={styles.projectsSubtitle}>Explore our case studies</p>
      <div style={{ position: "relative" }}>
        <button
          className={styles.scrollBtn}
          style={{ left: 0 }}
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          &#8592;
        </button>
        <div
          className={styles.projectsGrid}
          ref={gridRef}
          tabIndex={0}
        >
          {projects.map((project, idx) => (
            <div className={styles.projectCard} key={idx}>
              {/* Top Card */}
              <div className={styles.projectCardTop}>
                <div className={styles.projectTitle}>{
                  project.title.length > 25
                    ? project.title.slice(0, 25) + '...'
                    : project.title
                }</div>
                <div className={styles.projectClient}>Client: {project.client}</div>
              </div>
              {/* Bottom Card */}
              <div className={styles.projectCardBottom}>
                <div className={styles.projectMetaRow}>
                  <span className={styles.projectBadge}>{project.badge}</span>
                  <span className={styles.projectDuration}>{project.duration}</span>
                </div>
                <div className={styles.projectBottomTitle}>{
                  project.title.length > 25
                    ? project.title.slice(0, 25) + '...'
                    : project.title
                }</div>
                <div className={styles.projectDescription}>{project.description}</div>
                <button className={styles.readMoreBtn}>Read more &rarr;</button>
              </div>
            </div>
          ))}
        </div>
        <button
          className={styles.scrollBtn}
          style={{ right: 0 }}
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection; 