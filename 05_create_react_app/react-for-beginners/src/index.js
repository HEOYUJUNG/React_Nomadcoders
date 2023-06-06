import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import "./style.css";  // 하나의 css 파일로 전체를 컨트롤하기 (global) => 모든 버튼들에 대해 같은 색이 설정됨..

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

