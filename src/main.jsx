import React from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import 'font-awesome/css/font-awesome.css';
import App from './components/App/App';
import makeStore from './store/store';

const store = makeStore();
const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// In production the HTML is prerendered, so React attaches to it (hydration).
// In `npm run dev` the root only holds the <!--app-html--> placeholder comment,
// so React renders from scratch.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
