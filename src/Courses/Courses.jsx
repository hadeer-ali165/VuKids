import React, { useState } from 'react'
import course from './Courses.module.css'
import { useTranslation } from "react-i18next";
import { Coursesdata } from '../Data/Courses'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import i18n from '../i18n';

const Courses = () => {
  const [rating, setRating] = useState(0);
  const { t } = useTranslation();
  const dataitem = Coursesdata(t);

  return (
    <>
      <div className={course.courses}>
        <h2>{t('Our Courses')}</h2>

        {/* ✅ لفينا السلايدر جوه ديف خاص بيه */}
        <div className={course.sliderWrapper}>
          <Swiper
            key={i18n.language}
            spaceBetween={30}
            loop={true}
            dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 1.5 },
              830: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: `.${course.swiperNext}`,
              prevEl: `.${course.swiperPrev}`,
            }}
          >
            {dataitem.map((item) => (
              <SwiperSlide key={item.id || item.title}>
                <div className={course.boxs}>
                  <div className={course.imgs}>
                    <img src={item.img} alt="" />
                  </div>

                  <div className={course.textBox}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>

                    <div className={course.rateBox}>
                      <div className={course.stars}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FontAwesomeIcon
                            key={star}
                            icon={faStar}
                            size="lg"
                            color={star <= rating ? '#FF9F67' : '#ccc'}
                            onClick={() => setRating(star)}
                          />
                        ))}
                      </div>

                      <div className={course.priceBox}>
                        <h4>{item.price}</h4>
                        <p>{item.pricechange}</p>
                      </div>

                      <div
                        className={course.sale}
                        style={{
                          [i18n.language === "ar" ? "left" : "right"]: "0"
                        }}
                      >
                        sale
                      </div>
                    </div>

                    <button className={course.sessionBtn}>
                      {t("keys.go_to_pre_session")}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ أسهم داخل الرابر */}
          <div className={`${course.swiperPrev}`}></div>
          <div className={`${course.swiperNext}`}></div>
        </div>
      </div>
    </>
  )
}

export default Courses


