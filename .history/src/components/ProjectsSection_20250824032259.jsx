"use client";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import styles from "./HeroSection.module.css";
import {projects} from './project'

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection} id="projects-section">
      <h2 className={styles.projectsTitle}>Projects</h2>
      <p className={styles.projectsSubtitle}>Explore our case studies</p>
      
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.projectCard}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
} 