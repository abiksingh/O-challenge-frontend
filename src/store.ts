import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  getBitcoinPriceReducer,
  getPriceHistoryReducer,
} from './redux/reducers/priceReducers';
const reducer = combineReducers({
  getBitcoinPrice: getBitcoinPriceReducer,
  getPriceHistory: getPriceHistoryReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
