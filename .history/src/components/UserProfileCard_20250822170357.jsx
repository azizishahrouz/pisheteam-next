import React from "react";
import styles from "./UserProfileCard.module.css";

const UserProfileCard = ({ profileImg, name, jobTitle, bio, socials, minHeight, maxHeight }) => {
  const handleSocialClick = (link, title) => {
    if (link.startsWith('mailto:')) {
      window.location.href = link;
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={styles.cardWrapper}>
      <div
        className={styles.cardContent}
        style={{ minHeight: minHeight || 420, maxHeight: maxHeight || 420 }}
      >
        <div className={styles.profileImgWrapper}>
          <img src={profileImg} alt="Profile" className={styles.profileImg} />
        </div>
        <h2 className={styles.name}>{name}</h2>
        <h4 className={styles.jobTitle}>{jobTitle}</h4>
        <p className={styles.bio}>{bio}</p>
        <div className={styles.socials}>
          {socials?.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleSocialClick(item.link, item.title)}
              className={styles.socialIcon}
              title={item.title}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard; 