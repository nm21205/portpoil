import React, { useState } from 'react';
import saleData from '../data/saleData';
import './sale.scss';

const Sale = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;  // 한 페이지당 10개 항목
  
  // 전체 페이지 수 계산
  const totalPages = Math.ceil(saleData.length / itemsPerPage);
  
  // 현재 페이지에 표시할 데이터
  const currentItems = saleData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="sale-wrap">
      <table>
        <colgroup>
          <col style={{width: "15%"}} />
          <col style={{width: "35%"}} />
          <col style={{width: "15%"}} />
          <col style={{width: "15%"}} />
          <col style={{width: "10%"}} />
          <col style={{width: "10%"}} />
        </colgroup>
        <thead>
          <tr>
            <th>여행기간</th>
            <th>상품명</th>
            <th>출발/항공</th>
            <th>가격</th>
            <th>잔여석</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td className="title">{item.title}</td>
              <td>{item.departure}/{item.airline}</td>
              <td>{item.price}원</td>
              <td>{item.seats}</td>
              <td className={item.status === "마감임박" ? "urgent" : ""}>
                {item.status}
              </td>
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
  );
};

export default Sale;