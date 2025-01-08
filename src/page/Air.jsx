import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import Main from '../components/main';
import Footer from '../components/Footer';
import './Air.scss';

const Air = () => {
  const [tripType, setTripType] = useState('roundTrip'); // roundTrip, oneWay, multi
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [seatClass, setSeatClass] = useState('economy');
  const [passengers, setPassengers] = useState({
    adult: 1,
    child: 0,
    infant: 0
  });
  const [isDateUndecided, setIsDateUndecided] = useState(false);

  useEffect(() => {
    gsap.from('.air-search-container', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    });
  }, []);

  return (
    <>
      <Main />
      <div className="air-search-container">
        <div className="search-options">
          <button className={tripType === 'roundTrip' ? 'active' : ''} onClick={() => setTripType('roundTrip')}>구간왕복</button>
          <button className={tripType === 'oneWay' ? 'active' : ''} onClick={() => setTripType('oneWay')}>편도</button>
          <button className={tripType === 'multi' ? 'active' : ''} onClick={() => setTripType('multi')}>다구간</button>
          <button onClick={() => {
            setDeparture('');
            setArrival('');
            setDepartDate('');
            setReturnDate('');
            setSeatClass('economy');
            setPassengers({ adult: 1, child: 0, infant: 0 });
          }}>초기화</button>
        </div>

        <div className="search-form">
          <div className="location-inputs">
            <div className="departure">
              <label>출발지</label>
              <input type="text" placeholder="검색" value={departure} onChange={(e) => setDeparture(e.target.value)} />
            </div>
            <div className="arrival">
              <label>도착지</label>
              <input type="text" placeholder="검색" value={arrival} onChange={(e) => setArrival(e.target.value)} />
            </div>
          </div>

          <div className="date-inputs">
            <div className="depart">
              <label>출국일</label>
              <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} disabled={isDateUndecided} />
            </div>
            {tripType === 'roundTrip' && (
              <div className="return">
                <label>귀국일</label>
                <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} disabled={isDateUndecided} />
              </div>
            )}
            <label className="undecided">
              <input type="checkbox" checked={isDateUndecided} onChange={(e) => setIsDateUndecided(e.target.checked)} />
              미정
            </label>
          </div>

          <div className="seat-class">
            <label>좌석</label>
            <select value={seatClass} onChange={(e) => setSeatClass(e.target.value)}>
              <option value="economy">일반석</option>
              <option value="premium">프리미엄 일반석</option>
              <option value="business">비즈니스석</option>
              <option value="first">일등석</option>
            </select>
          </div>

          <div className="passengers">
            <div className="passenger-type">
              <label>성인 (만 12세 이상)</label>
              <select value={passengers.adult} onChange={(e) => setPassengers({...passengers, adult: parseInt(e.target.value)})}>
                {[...Array(10)].map((_, i) => <option key={i} value={i}>{i}명</option>)}
              </select>
            </div>
            <div className="passenger-type">
              <label>소아 (만 12세 미만)</label>
              <select value={passengers.child} onChange={(e) => setPassengers({...passengers, child: parseInt(e.target.value)})}>
                {[...Array(10)].map((_, i) => <option key={i} value={i}>{i}명</option>)}
              </select>
            </div>
            <div className="passenger-type">
              <label>유아 (만 2세 미만)</label>
              <select value={passengers.infant} onChange={(e) => setPassengers({...passengers, infant: parseInt(e.target.value)})}>
                {[...Array(10)].map((_, i) => <option key={i} value={i}>{i}명</option>)}
              </select>
            </div>
          </div>

          <button className="search-button">검색하기</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Air;
