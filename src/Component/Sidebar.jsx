import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>
        {`
          .sidebar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #222;
            color: white;
            padding: 15px 25px;
            position: sticky;
            top: 0;
            z-index: 9999;
          }

          .brand {
            font-size: 22px;
            font-weight: bold;
            color: white;
            text-decoration: none;
          }

          .nav-links {
            display: flex;
            gap: 25px;
            align-items: center;
          }

          .nav-link {
            color: white;
            text-decoration: none;
            font-size: 18px;
            transition: color 0.3s ease;
          }

          .nav-link:hover {
            color: #4caf50;
          }

          .logout-button {
            background: #ff4444;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s ease;
          }

          .logout-button:hover {
            background: #cc0000;
          }

          .hamburger {
            display: none;
            font-size: 24px;
            background: none;
            color: white;
            border: none;
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .nav-links {
              display: ${menuOpen ? "flex" : "none"};
              flex-direction: column;
              position: absolute;
              top: 60px;
              left: 0;
              width: 100%;
              background: #333;
              padding: 15px 0;
              gap: 15px;
              z-index: 999;
            }

            .hamburger {
              display: block;
            }
          }
        `}
      </style>

      <div className="sidebar">
        <Link to="/" className="brand">
          Portfolio
        </Link>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        <div className="nav-links">
          {["Skills", "Projects", "Contact"].map((item, index) => (
            <Link key={index} to={`/${item}`} className="nav-link">
              {item}
            </Link>
          ))}

        
        </div>
      </div>
    </>
  );
};

export default Sidebar;
