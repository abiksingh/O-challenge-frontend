import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPrice, getAllPriceHistory } from '../redux/actions/priceActions';

const BitcoinPriceScreen = () => {
  const dispatch = useDispatch();

  const getBitcoinPrice = useSelector((state: any) => state.getBitcoinPrice);
  const { loading, price } = getBitcoinPrice;

  const getPriceHistory = useSelector((state: any) => state.getPriceHistory);
  const { priceHistory } = getPriceHistory;

  console.log(price);
  console.log(priceHistory);

  useEffect(() => {
    dispatch(getPrice('EUR'));
    dispatch(getAllPriceHistory('EUR'));
  }, [dispatch]);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default BitcoinPriceScreen;
