import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import Main from '../components/main';
import Footer from '../components/Footer';
import tripData from '../data/tripData';
import './Trips.scss';

const Trips = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(tripData.length / itemsPerPage);
  const currentItems = tripData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    gsap.from('.trips-wrap', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    });
  }, []);

  return (
    <>
      <Main />
      <div className="trips-wrap">
        <table>
          <colgroup>
            <col style={{width: "8%"}} />
            <col style={{width: "12%"}} />
            <col style={{width: "40%"}} />
            <col style={{width: "15%"}} />
            <col style={{width: "15%"}} />
            <col style={{width: "10%"}} />
          </colgroup>
          <thead>
            <tr>
              <th>기수</th>
              <th>여행기간</th>
              <th>여행코스</th>
              <th>가격</th>
              <th>잔여석</th>
              <th>상세보기</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.period}</td>
                <td>{item.duration}<br/>{item.date}</td>
                <td className="title">
                  {item.title}<br/>
                  <span className="route">{item.route}</span>
                </td>
                <td className="price">{item.price}원</td>
                <td className={`status ${item.status === "모집마감" ? "closed" : item.status === "마감임박" ? "closing" : ""}`}>
                  <span>{item.seats}</span>
                  <span>{item.status}</span>
                </td>
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

export default Trips;
