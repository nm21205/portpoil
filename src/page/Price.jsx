import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import './Price.scss';
import priceData from '../data/priceData';
import Main from '../components/main';
import Footer from '../components/Footer';

const Price = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;  // 한 페이지당 10개 항목
  
  // 전체 페이지 수 계산
  const totalPages = Math.ceil(priceData.length / itemsPerPage);
  
  // 현재 페이지에 표시할 데이터
  const currentItems = priceData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    gsap.from('.price-wrap', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    });
  }, []);

  return (
    <>
      <Main />
      <div className="price-wrap">
        <table>
          <colgroup>
            <col style={{width: "8%"}} />
            <col style={{width: "15%"}} />
            <col style={{width: "42%"}} />
            <col style={{width: "12%"}} />
            <col style={{width: "13%"}} />
            <col style={{width: "10%"}} />
          </colgroup>
          <thead>
            <tr>
              <th>기수</th>
              <th>날짜(여행기간)</th>
              <th>상품명 & 출도착도시</th>
              <th>잔여석 현황</th>
              <th>모집현황</th>
              <th>상세보기</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.period}</td>
                <td>{item.date} ({item.duration})</td>
                <td className="title">{item.title} ({item.route})</td>
                <td>{item.seats}</td>
                <td className="status">{item.status}</td>
                <td><button>보기</button></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Price;
