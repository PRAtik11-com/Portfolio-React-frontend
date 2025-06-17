import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../App.css'; // Make sure it includes footer styles

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <div className="footer-item">
          <FaEnvelope size={24} />
          <span>7682pratikamrutkar@gmail.com</span>
        </div>

        <div className="footer-item">
          <Link to="https://github.com/PRAtik11-com" className="footer-link" target="_blank">
            <FaGithub size={24} />
            <span>GitHub</span>
          </Link>
        </div>

        <div className="footer-item">
          <Link to="https://www.instagram.com/amrutkar_pratik/" className="footer-link" target="_blank">
            <FaInstagram size={24} />
            <span>Instagram</span>
          </Link>
        </div>
      </div>

      <div className="footer-location">
        <MdLocationOn size={20} />
        <span>Karadva, Surat-394210</span>
      </div>
    </footer>
  );
};

export default Footer;
