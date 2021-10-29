import { AnyAction } from 'redux';
import {
  GET_PRICE_REQUEST,
  GET_PRICE_SUCCESS,
  GET_PRICE_FAIL,
  GET_PRICE_HISTORY_REQUEST,
  GET_PRICE_HISTORY_SUCCESS,
  GET_PRICE_HISTORY_FAIL,
} from '../constants/priceConstants';

export const getBitcoinPriceReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case GET_PRICE_REQUEST:
      return {
        loading: true,
      };
    case GET_PRICE_SUCCESS:
      return {
        loading: false,
        success: true,
        price: action.payload,
      };

    case GET_PRICE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getPriceHistoryReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case GET_PRICE_HISTORY_REQUEST:
      return {
        loading: true,
      };
    case GET_PRICE_HISTORY_SUCCESS:
      return {
        loading: false,
        success: true,
        priceHistory: action.payload,
      };

    case GET_PRICE_HISTORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
