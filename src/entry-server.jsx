import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import App from './components/App/App';
import makeStore from './store/store';

// Used only at build time by scripts/prerender.js.
export const render = () =>
  renderToString(
    <React.StrictMode>
      <Provider store={makeStore()}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
