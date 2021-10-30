import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPrice, getAllPriceHistory } from '../redux/actions/priceActions';
import { Line } from 'react-chartjs-2';
import Header from '../UIHelpers/header';
import { Container } from '@mui/material';

const BitcoinPriceScreen = () => {
  const dispatch = useDispatch();

  const getBitcoinPrice = useSelector((state: any) => state.getBitcoinPrice);
  const { price } = getBitcoinPrice;

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
      <Header />
      <Container>
        {priceHistory?.bpi && (
          <Line
            data={{
              labels: Object.keys(priceHistory?.bpi),
              datasets: [
                {
                  label: 'Historical Price Data of Bitcoin ',
                  data: Object.values(priceHistory?.bpi),
                  fill: false,
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgba(255, 99, 132, 0.2)',
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        )}
      </Container>
    </div>
  );
};

export default BitcoinPriceScreen;
