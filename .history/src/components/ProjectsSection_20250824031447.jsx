"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from "./HeroSection.module.css";
import {projects} from './project'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectsSection = () => {
  return (
    <section className={styles.projectsSection} id="projects-section">
      <h2 className={styles.projectsTitle}>Projects</h2>
      <p className={styles.projectsSubtitle}>Explore our case studies</p>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={28}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        className="projects-swiper"
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
      
      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev" style={{
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        background: '#181a2c',
        border: '2px solid #72c421',
        color: '#fff',
        borderRadius: '50%',
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.2s, color 0.2s, border 0.2s',
        boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
        outline: 'none',
      }}>&#8592;</div>
      
      <div className="swiper-button-next" style={{
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        background: '#181a2c',
        border: '2px solid #72c421',
        color: '#fff',
        borderRadius: '50%',
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.2s, color 0.2s, border 0.2s',
        boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
        outline: 'none',
      }}>&#8594;</div>
    </section>
  );
};

export default ProjectsSection; 