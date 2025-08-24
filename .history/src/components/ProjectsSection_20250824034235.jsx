"use client";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import styles from "./HeroSection.module.css";
import { projects } from './project';

const ProjectsSection = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className={styles.projectsSection} id="projects-section">
      <div className={styles.projectsHeader}>
        <h2 className={styles.projectsTitle}>Projects</h2>
        <p className={styles.projectsSubtitle}>Explore our case studies</p>
      </div>

      <div className={styles.projectsContainer}>
        {/* Left Navigation Button */}
        <button
          className={styles.navButton}
          onClick={goPrev}
          aria-label="Previous projects"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Swiper Container */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation, FreeMode]}
          spaceBetween={32}
          slidesPerView={1}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className={styles.projectsSwiper}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx} className={styles.projectSlide}>
              <div className={styles.projectCard}>
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Navigation Button */}
        <button
          className={styles.navButton}
          onClick={goNext}
          aria-label="Next projects"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection; 