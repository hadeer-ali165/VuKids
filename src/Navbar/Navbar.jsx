import React, { useState, useEffect } from 'react';
import { Nav } from '../Data/Nav';
import logo from '../assets/3.png';
import head from './Navbar.module.css';
import i18n from '../i18n';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t } = useTranslation();
  const list = Nav(t);

 
  const [lang, setLang] = useState(i18n.language === "ar" ? "EN" : "AR");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  function langchangeHandle() {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
      setLang("EN");
    } else {
      i18n.changeLanguage("en");
      setLang("AR");
    }
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${head.nav} ${isSticky ? head.sticky : ""}`}>
      <div className={head.flex}>
        <div className={head.logo}>
          <img src={logo} alt="logo" />
        </div>

        <button className={head.menuToggle} onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        <div className={`${head.lists} ${menuOpen ? head.active : ''}`}>
          <ul>
            {list.map((item) => (
              <li key={item.id}>
                <Link to={item.url}>{item.text}</Link>
              </li>
            ))}
            <button className={head.btn1}>{t('Join Us')}</button>
            <Link to="/login" className={head.btn2}>
              {t('Log In')}
            </Link>
            <button className={head.btn3} onClick={langchangeHandle}>
              {lang}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



