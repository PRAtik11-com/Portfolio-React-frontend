import './Portfolio.css'; 
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="animation-bg"></div>
      <div className="home-container">
        <div className="home-content">
          <div className="name-container">
            <motion.h1 className="home-title">
              Hello, I'm <span className="highlight-name">Pratik Amrutkar</span>
            </motion.h1>
          </div>
          <h2 className="home-subtitle">Full Stack Developer</h2>
          <p className="home-description">
            Passionate full stack developer skilled in building scalable and performant web applications.
            Experienced with frontend technologies like React and backend technologies like Node.js, Express, and MongoDB.
            Committed to delivering clean, maintainable code and seamless user experiences.
          </p>
          <motion.button
            className="home-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open('Pratik Resume.pdf', '_blank')}
          >
            Download CV
          </motion.button>
        </div>
        <div className="home-image">
          <motion.img
            src="/DALL·E 2025-02-05 16.47.49 - A minimalist illustration of a professional-looking male character with spectacles. The design is clean and simple, with a modern and sleek appearance.webp"
            alt="Profile"
            className="profile-pic"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
