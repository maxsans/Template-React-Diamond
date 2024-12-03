import React, { useState, useEffect } from "react";
import logo from "../../assets/react-diamond.png";
import { FaGithub, FaSun, FaMoon, FaExpand } from "react-icons/fa";
import styles from "./Navbar.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark-mode";
    document.body.classList.add(savedTheme);
    setIsDarkMode(savedTheme === "dark-mode");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light-mode" : "dark-mode";
    document.body.classList.remove(isDarkMode ? "dark-mode" : "light-mode");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const onClickLogo = () => {
    navigate("/");
  };

  const onClickFullScreen = () => {
    if (location.pathname === "/fullscreen") navigate("/");
    else navigate("/fullscreen");
  };

  return (
    <div className={styles.navbar}>
      <div onClick={onClickLogo} className={styles.logo}>
        <img loading="lazy" src={logo} alt="Logo" />
        <span>React-Diamond</span>
      </div>
      <div className={styles.actions}>
        <a
          href="https://github.com/mon-github"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          <FaGithub size={25} />
        </a>
        <button className={styles.themeSwitch} onClick={toggleTheme}>
          {isDarkMode ? <FaMoon size={25} /> : <FaSun size={25} />}
        </button>
        <button className={styles.themeSwitch} onClick={onClickFullScreen}>
          <FaExpand size={25} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
