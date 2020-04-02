import { createStore } from 'redux';
import gameReducer from '../features/game/gameReducer';

const store = createStore(
  gameReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => console.log(store.getState()));

export default store;
