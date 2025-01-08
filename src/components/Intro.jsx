import React, { useState, useEffect } from 'react';
import data from '../data/data';
import { Link } from 'react-router-dom';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Intro.scss';
import 'swiper/css';
import 'swiper/css/navigation';

const Location = () => {
  const [dataLocation] = useState(data);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='location'>
      <h2>Hello World</h2>
      <p>여행 상품</p>
      {!isMobile ? (
        <div className="slideLocation">
          <Swiper
            className='locationSwiper'
            modules={[Navigation, Autoplay]}
            spaceBetween={5}
            slidesPerView={4}
            navigation
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            loopAdditionalSlides={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {dataLocation.map((data) => {
              return (
                <SwiperSlide key={data.id}>
                  <div className="locationList">
                    <Link to="">
                      <div className="imgBox">
                        <img src={process.env.PUBLIC_URL+data.img} alt={data.title} />
                      </div>
                      <div className="textBox"><p>{data.title} </p></div>
                      <div className="addBox"><p>{data.add} </p></div>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : (
        <div className="location-board">
          {dataLocation.map((data) => (
            <div className="locationList" key={data.id}>
              <Link to="">
                <div className="imgBox">
                  <img src={process.env.PUBLIC_URL+data.img} alt={data.title} />
                </div>
                <div className="textBox">
                  <p>{data.title}</p>
                </div>
                <div className="addBox">
                  <p>{data.add}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Location;