import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { useTranslation } from "react-i18next";
import i18n from '../i18n';
import Teams from '../Data/Teams'
import teamstyle from './team.module.css'
const Team = () => {
    const { t } = useTranslation();
    const teams = Teams()
  return (
    <>
      <div className={`${teamstyle.teamhead}`} style={{marginTop:"80px"}}>
        <h2 style={{textAlign:"center",fontSize:"38px" , color:"#4255A4"}}>{t('titleTeam')}</h2>
        <div className="slider" style={{ width: '100%', padding: '2rem 0' }}>
            <Swiper
              key={i18n.language} // 👈 ده بيخلي Swiper يعيد تحميل نفسه لما اللغة تتغير
              spaceBetween={30}
              slidesPerView={1}
              loop={true}

              dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
              breakpoints={{
                 0: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
                830: { slidesPerView: 3 },
                1024: { slidesPerView: 4 }
                }}
                modules={[Autoplay, Navigation]}
                navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}>
            <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
              {teams.map((team)=>
               <SwiperSlide key={team.id}>
                   <div className={`${teamstyle.box}`}>
                      <div className={`${teamstyle.imgteam}`}>
                        <img src={team.img} alt="" />
                      </div>
                      <div className="text" style={{paddingTop:"15px"}}>
                        <p>{team.name}</p>
                        <p>{team.career}</p>
                      </div>
                    </div>
                  </SwiperSlide>
              )}
            </Swiper>
        </div>
      </div>
    </>
  )
}

export default Team
