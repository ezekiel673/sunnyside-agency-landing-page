import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";

const Nav = () => {
  const [btnHover, setBtnHover] = useState(false);
  const [btnActive, setBtnActive] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeLink, setActiveLink] = useState(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  // update when window resizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false); // close dropdown if resizing back to desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonStyles = {
    border: "none",
    background: btnHover || btnActive ? "var(--Green_500)" : "var(--White)",
    color: btnHover || btnActive ? "var(--White)" : "var(--Grey_950)",
    borderRadius: "50px",
    padding: "15px 20px",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const getLinkStyles = (linkName) => ({
    color:
      activeLink === linkName
        ? "var(--Grey_550)"
        : hoveredLink === linkName
        ? "var(--Green_500)"
        : "var(--White)", // 👈 Desktop normal is white
    textDecoration: "none",
    transition: "color 0.3s ease",
    cursor: "pointer",
    fontSize: "1.2rem",
  });

  return (
    <nav style={navStyles}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Desktop Menu */}
      {!isMobile && (
        <ul style={ulStyles}>
          {["About", "Services", "Projects"].map((link) => (
            <li key={link}>
              <a
                href="#"
                style={getLinkStyles(link)}
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
                onMouseDown={() => setActiveLink(link)}
                onMouseUp={() => setActiveLink(null)}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <button
              className="heading_1"
              type="submit"
              style={buttonStyles}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => {
                setBtnHover(false);
                setBtnActive(false);
              }}
              onMouseDown={() => setBtnActive(true)}
              onMouseUp={() => setBtnActive(false)}
            >
              Contact
            </button>
          </li>
        </ul>
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <div>
          <img
            src={hamburger}
            alt="menu"
            style={{ cursor: "pointer" }}
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div style={dropdownWrapper}>
              {/* Arrow projection */}
              <div style={dropdownArrow}></div>

              <div style={dropdownMenu}>
                {["About", "Services", "Projects"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      color: "var(--Grey_600)",
                      textDecoration: "none",
                      fontSize: "1.2rem",
                    }}
                    onClick={() => setMenuOpen(false)} // close menu when clicked
                  >
                    {link}
                  </a>
                ))}
                <button
                  className="heading_1"
                  type="submit"
                  style={{
                    ...buttonStyles,
                    background: "var(--Yellow_500)",
                    color: "var(--Grey_950)",
                    fontWeight: "bold",
                    marginTop: "1rem",
                  }}
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

const navStyles = {
  display: "flex",
  justifyContent: "space-between",
  width: "90%",
  justifySelf: "center",
  paddingTop: "16px",
  alignItems: "center",
  position: "relative",
};

const ulStyles = {
  display: "flex",
  gap: "2.5em",
  alignItems: "center",
};

const dropdownWrapper = {
  position: "absolute",
  top: "70px",
  right: "20px",
  zIndex: 1000,
};

const dropdownMenu = {
  background: "var(--White)",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.5rem",
  width: "80vw",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const dropdownArrow = {
  position: "absolute",
  top: "-20px",
  right:'0',
  width: "0",
  height: "0",
  borderLeft: "20px solid transparent",
  borderBottom: "20px solid var(--White)",
};

export default Nav;
