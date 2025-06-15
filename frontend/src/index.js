import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Створюємо корінь React додатку
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендеримо додаток всередині StrictMode для виявлення потенційних проблем
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
