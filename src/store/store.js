import {compose, createStore} from 'redux';
import reducerJS808 from '../reducers/reducer';

export default function makeStore() {
  //Using Redux dev tools instead of return createStore(reducer);
	const createStoreDevTools = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);

  return createStoreDevTools(reducerJS808);
}