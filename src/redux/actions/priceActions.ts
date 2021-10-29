import axios from 'axios';
import { Dispatch } from 'redux';
import {
  GET_PRICE_REQUEST,
  GET_PRICE_SUCCESS,
  GET_PRICE_FAIL,
} from '../constants/priceConstants';

export const getPrice = (currency: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_PRICE_REQUEST,
    });

    const { data }: any = await axios.get(
      `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`
    );

    dispatch({
      type: GET_PRICE_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_PRICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
