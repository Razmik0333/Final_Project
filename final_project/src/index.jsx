import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './style/reset.css';
import './index.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import App from './App';
<<<<<<< HEAD
import { store, persistor } from './redux/store';
=======
import { store } from './redux/store';
>>>>>>> 8e9e57cc09100bfc4cbce0fbc7a3b3b3f3031bb5
import './components/Header/headerCompontnts/NavBar/NavBar.css';
import './components/Header/headerCompontnts/SearchBar/SearchBar.css';
import './components/Header/Header.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
<<<<<<< HEAD
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
=======
        <App />
>>>>>>> 8e9e57cc09100bfc4cbce0fbc7a3b3b3f3031bb5
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
