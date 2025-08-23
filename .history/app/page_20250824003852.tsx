// import React from "react";
// import HomePage from "./pages/HomePage";
// import "./index.css"; // برای فونت و ریست استایل

// function App() {
//   return <HomePage />;
// }

// export default App;

// app/page.tsx
import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";
import ClientsSection from "../components/ClientsSection";
import ProjectsSection from "../components/ProjectsSection";
import DiscoveryCallSection from "../components/DiscoveryCallSection";
import UserProfileCard from "../components/UserProfileCard";
import Footer from "../components/Footer";
import "../globals.css"; // استایل‌های گلوبال
import cardStyles from "../components/UserProfileCard.module.css";
import profileImg1 from "../assets/photo_shah.jpg";
import profileImg2 from "../assets/photo_kia.jpg";
import profileImg3 from "../assets/photo_Sina.jpg";

// Socials data
const socials1 = [
  { link: "https://www.linkedin.com/in/shahrouz-azizi-5b7912352", title: "LinkedIn", icon: <svg ... /></svg> },
  { link: "https://github.com/azizishahrouz", title: "GitHub", icon: <svg ... /></svg> },
  { link: "mailto:azizishahrouz@gmail.com", title: "Gmail", icon: <svg ... /></svg> },
];

const socials2 = [
  { link: "https://www.linkedin.com/in/kiyarash-nadri", title: "LinkedIn", icon: <svg ... /></svg> },
  { link: "https://github.com/kiyarashnd", title: "GitHub", icon: <svg ... /></svg> },
  { link: "mailto:kiyarash.ndri@gmail.com", title: "Gmail", icon: <svg ... /></svg> },
];

const socials3 = [
  { link: "https://www.linkedin.com/in/sina-alizadeh-86063821a", title: "LinkedIn", icon: <svg ... /></svg> },
  { link: "mailto:sinaalizadeh2112@gmail.com", title: "Gmail", icon: <svg ... /></svg> },
];

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ClientsSection />
      <ServicesSection />
      <ProjectsSection />
      <DiscoveryCallSection />
      <div className={cardStyles.profileCardsRow}>
        <UserProfileCard profileImg={profileImg1} name="Shahrouz Azizi" jobTitle="Front-End & AI Automation Developer" bio="Building modern web apps with Next.js and smart AI-powered automation. Focused on clean design, speed, and scalable development." socials={socials1} minHeight={420} maxHeight={420} />
        <UserProfileCard profileImg={profileImg2} name="Kiarsh Nadri" jobTitle="Back-End & AI Automation Engineer" bio="Designing scalable back-end systems and building intelligent automation with AI at the core." socials={socials2} minHeight={420} maxHeight={420} />
        <UserProfileCard profileImg={profileImg3} name="Sina Alizadeh" jobTitle="Digital Marketing Specialist" bio="Focused on driving brand growth through data-driven strategies, SEO, and smart advertising. Turning analytics into action to boost engagement and reach." socials={socials3} minHeight={420} maxHeight={420} />
      </div>
      <Footer />
    </div>
  );
}
