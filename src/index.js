import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 확대/축소 방지 함수
const preventZoom = (e) => {
  if (e.ctrlKey) {
    e.preventDefault();
  }
};

// 이벤트 리스너 추가
document.addEventListener('wheel', preventZoom, { passive: false });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// 이벤트 리스너 제거 (필요한 경우)
// window.addEventListener('beforeunload', () => {
//   document.removeEventListener('wheel', preventZoom);
// });