import React from 'react'
import Navbar from '../Navbar/Navbar'
import home from './Header.module.css'
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import SubHeader from '../SubHeader/SubHeader';
const Header = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
  return (
    <>
      <div className={`${home.head}`}>
         <header className={`${home.parent} `}>
        <div className={`${home.bg} ${i18n.language === 'ar' ? home.flipped : ''}`}></div>
        <Navbar/>
        <div className={`${home.header} ${i18n.language === 'ar' ? home.rtl : home.ltr}`}>
            <h1>{t('Welcome To VuKids Academy')}</h1>
            <p>{t('welcome_paragraph')}</p>
            <button>{t('join for free')}</button>
        </div>
      </header>
      <div className={`${home.sub}`}>
        <SubHeader/>
      </div>
      </div>
    </>
  )
}

export default Header
