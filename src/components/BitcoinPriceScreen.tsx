import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPrice } from '../redux/actions/priceActions';

const BitcoinPriceScreen = () => {
  const dispatch = useDispatch();

  const getBitcoinPrice = useSelector((state: any) => state.getBitcoinPrice);
  const { loading, data } = getBitcoinPrice;

  console.log(data);

  useEffect(() => {
    dispatch(getPrice('EUR'));
  }, [dispatch]);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default BitcoinPriceScreen;
