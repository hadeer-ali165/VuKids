import React from 'react'
import img from '../assets/icon1.svg'
import sub from './SubHeader.module.css'
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

const SubHeader = () => {
      const { t } = useTranslation();
      const { i18n } = useTranslation();
  return (
    <>
      <div className={`${sub.flexs}`}>
        <div className={`${sub.box}`}>
            <img src={img} alt="" />
            <div className={`${sub.text} ${i18n.language === 'ar' ? sub.spaceleft : sub.spaceright}`}>
            <h3>{t('kids_prog')}</h3>
            <p>{t('we-teach')}</p>
            </div>
        </div>
        <div className={`${sub.box}`}>
            <img src={img} alt="" />
            <div className={`${sub.text} ${i18n.language === 'ar' ? sub.spaceleft : sub.spaceright}`}>
            <h3>{t('kids_robot')}</h3>
            <p>{t('teach-robot')}</p>
            </div>
        </div>
        <div className={`${sub.box}`}>
            <img src={img} alt="" />
            <div className={`${sub.text} ${i18n.language === 'ar' ? sub.spaceleft : sub.spaceright}`}>
            <h3>{t('games')}</h3>
            <p>{t('teach-game')}</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default SubHeader
