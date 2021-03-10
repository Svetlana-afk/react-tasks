import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App
      value={[{ name: "Angular", count: 0 }, { name: "React", count: 0 }, { name: "Vue", count: 0 }]} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
