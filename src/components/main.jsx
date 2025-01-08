import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './main.scss';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Main = () => {
  const background = [
    process.env.PUBLIC_URL + '/img/main1.png',
    process.env.PUBLIC_URL + '/img/main2.png',
    process.env.PUBLIC_URL + '/img/main3.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? background.length - 1 : prevIndex - 1);
  }

  const nextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === background.length - 1 ? 0 : prevIndex + 1);
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <div className="main-container" style={{ backgroundImage: `url(${background[currentIndex]})` }}>
        <div className="main-content">
          <nav>
            <ul>
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/price" onClick={scrollToTop}>특가</Link></li>
              <li><Link to="/trips" onClick={scrollToTop}>전체 일정</Link></li>
              <li><Link to="/air" onClick={scrollToTop}>여행사</Link></li>
              <li><Link to="/weather" onClick={scrollToTop}>도착지 날씨</Link></li>
            </ul>
          </nav>

          <div className='main-title-container'>
            <div className='main-title'>
              <FaArrowLeft onClick={handleClick} className='arrow-left' />
              <h3>여행의 즐거움</h3>
              <FaArrowRight onClick={nextClick} className='arrow-right' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;