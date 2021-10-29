import { AnyAction } from 'redux';
import {
  GET_PRICE_REQUEST,
  GET_PRICE_SUCCESS,
  GET_PRICE_FAIL,
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
        data: action.payload,
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
