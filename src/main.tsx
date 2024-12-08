import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WebApp from '@twa-dev/sdk'

// Инициализация Telegram Web App
WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 