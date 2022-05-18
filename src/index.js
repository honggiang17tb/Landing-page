import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './component/Layout/Layout';

ReactDOM.render(
  <Provider store={store}>
    <Layout>
      <App />
    </Layout>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
