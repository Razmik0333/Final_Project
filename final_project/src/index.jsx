import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './style/reset.css';
import './index.css';
// import 'antd/dist/antd.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
// import { DatePicker } from 'antd';
import './components/Header/headerCompontnts/NavBar/NavBar.css';
import './components/Header/headerCompontnts/SearchBar/SearchBar.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        {/* <DatePicker /> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
