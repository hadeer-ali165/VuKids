import React from 'react'
import aboutImg from '../assets/about3.png'
import { useTranslation } from "react-i18next";
import about from './About.module.css'

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={about.flexy}>
        <div className={about.txt}>
          <h2 className={about.title}>{t('abouttitle')}</h2>
          <p className={about.para}>{t('abouttext1')}</p>
          <p className={about.para}>{t('abouttext2')}</p>
          <p className={about.para}>
            <span className={about.bold}>{t('title2')}</span>{t('abouttext3')}
          </p>
          <p className={about.para}>
            <span className={about.bold}>{t('title3')}</span>{t('abouttext4')}
          </p>
          <p className={about.para}>
            <span className={about.bold}>{t('title4')}</span>{t('abouttext5')}
          </p>
        </div>
        <img src={aboutImg} className={about.image} alt="" />
      </div>
    </>
  )
}

export default About

