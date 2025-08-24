"use client";
import React, { useRef } from 'react';
import styles from "./HeroSection.module.css";
import {projects} from './project'

const ProjectsSection = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.projectsSection} id="projects-section">
      <div className={styles.projectsHeader}>
        <h2 className={styles.projectsTitle}>Projects</h2>
        <p className={styles.projectsSubtitle}>Explore our case studies</p>
      </div>
      
      <div className={styles.projectsContainer}>
        {/* Left Scroll Button */}
        <button 
          className={styles.scrollButton} 
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Projects Grid */}
        <div 
          className={styles.projectsGrid} 
          ref={scrollContainerRef}
        >
          {projects.map((project, idx) => (
            <div className={styles.projectCard} key={idx}>
              {/* Top Card */}
              <div className={styles.projectCardTop}>
                <div className={styles.projectTitle}>
                  {project.title.length > 25
                    ? project.title.slice(0, 25) + '...'
                    : project.title
                  }
                </div>
                <div className={styles.projectClient}>Client: {project.client}</div>
              </div>
              
              {/* Bottom Card */}
              <div className={styles.projectCardBottom}>
                <div className={styles.projectMetaRow}>
                  <span className={styles.projectBadge}>{project.badge}</span>
                  <span className={styles.projectDuration}>{project.duration}</span>
                </div>
                <div className={styles.projectBottomTitle}>
                  {project.title.length > 25
                    ? project.title.slice(0, 25) + '...'
                    : project.title
                  }
                </div>
                <div className={styles.projectDescription}>{project.description}</div>
                <button className={styles.readMoreBtn}>
                  Read more 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button 
          className={styles.scrollButton} 
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Progress Indicator */}
      <div className={styles.progressIndicator}>
        <div className={styles.progressBar}>
          <div className={styles.progressFill}></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 