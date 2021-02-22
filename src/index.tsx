import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Webfont from 'webfontloader';


Webfont.load({
  google: {
    families: ["Inter: 400, 500, 600", "Rajdhani: 600"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

