import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';  /* 라우팅을 위해 추가 */
import 'bootstrap/dist/css/bootstrap.min.css';  /* 부트스트랩 설정 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* 라우팅을 위해 추가 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


