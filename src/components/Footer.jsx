import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const scrollToTop = () => {
  window.scrollTo(0, 0);
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section1">
          <h3>회사 정보</h3>
          <p>상호명: 여행사</p>
          <p>대표: 홍길동</p>
          <p>사업자등록번호: 123-45-67890</p>
          <p>관광사업자등록번호: 제2023-123456호</p>
        </div>
        
        <div className="footer-section2">
          <h3>고객센터</h3>
          <p>전화: 1234-5678</p>
          <p>이메일: support@travel.com</p>
          <p>운영시간: 09:00 - 18:00</p>
          <p>주소: 서울시 강남구 여행로 123</p>
        </div>

        <div className="footer-section3">
          <h3>빠른 링크</h3>
          <ul>
            <li><Link to="/" onClick={scrollToTop}>처음으로</Link></li>
            <li><Link to="/price" onClick={scrollToTop}>특가</Link></li>
            <li><Link to="/trips" onClick={scrollToTop}>전체일정</Link></li>
            <li><Link to="/ai" onClick={scrollToTop}>여행사</Link></li>
            <li><Link to="/weather" onClick={scrollToTop}>도착지 날씨</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 여행사. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 