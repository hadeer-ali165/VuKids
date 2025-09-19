import React from 'react'
import why from './Whyus.module.css'
import { useTranslation } from "react-i18next";
import imgs from '../assets/about2.png'

const Whyus = () => {
  const { i18n, t } = useTranslation();

  return (
    <>
      <div className={why.usSection}>
        <h2
          className={`${why.title} ${i18n.language === "ar" ? why.titleAr : why.titleEn}`}
        >
          {t('whytitle1')}
        </h2>

        <div className={why.flexs}>
          <div className={why.texts}>
            <h4>{t('whytitle2')}</h4>
            <p>{t('whytext1')}</p>
            <h4>{t('whytitle3')}</h4>
            <p>{t('whytext2')}</p>
            <h4>{t('whytitle4')}</h4>
            <p>{t('whytext3')}</p>
            <h4>{t('whytitle5')}</h4>
            <p>{t('whytext4')}</p>
            <h4>{t('whytitle6')}</h4>
            <p>{t('whytext5')}</p>
            <h4>{t('whytitle7')}</h4>
            <p>{t('whytext6')}</p>

            <button
              className={`${why.btn} ${i18n.language === "ar" ? why.btnAr : why.btnEn}`}
            >
              {t('btnwhy')}
            </button>
          </div>

          <img src={imgs} alt="" className={why.image} />
        </div>
      </div>
    </>
  )
}

export default Whyus

