import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import makeStore from './store/store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const store = makeStore();

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
