import {compose, createStore} from 'redux';
import reducerJS808 from '../reducers/reducer';

export default function makeStore() {
  // Hook up the Redux DevTools browser extension when it's installed.
  // `window` doesn't exist during the build-time prerender, so check first.
  const devTools =
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f;

  return createStore(reducerJS808, compose(devTools));
}
