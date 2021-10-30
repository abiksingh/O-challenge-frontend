import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPrice, getAllPriceHistory } from '../redux/actions/priceActions';
import { Line } from 'react-chartjs-2';
import Header from '../UIHelpers/header';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Menu,
  MenuItem,
  Fade,
} from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const BitcoinPriceScreen = () => {
  const dispatch = useDispatch();

  const getBitcoinPrice = useSelector((state: any) => state.getBitcoinPrice);
  const { price } = getBitcoinPrice;

  const getPriceHistory = useSelector((state: any) => state.getPriceHistory);
  const { priceHistory } = getPriceHistory;

  console.log(price);
  console.log(priceHistory);

  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    dispatch(getPrice(currency));
    dispatch(getAllPriceHistory(currency));
  }, [dispatch, currency]);

  const [currentPrice, setCurrentPrice] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       return setCurrentPrice(price?.bpi.EUR.rate);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, [price?.bpi.EUR.rate]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Header />
      <Container>
        <Card sx={{ width: 175, marginBottom: 10, marginTop: 10 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 24 }}
              color="text.secondary"
              gutterBottom
            >
              {currentPrice}
            </Typography>
          </CardContent>
        </Card>
        <Button
          id="fade-button"
          aria-controls="fade-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Currency
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem
            onClick={() => {
              setCurrency('USD');
              setAnchorEl(null);
            }}
          >
            USD
          </MenuItem>
          <MenuItem
            onClick={() => {
              setCurrency('EUR');
              setAnchorEl(null);
            }}
          >
            EUR
          </MenuItem>
          <MenuItem
            onClick={() => {
              setCurrency('CNY');
              setAnchorEl(null);
            }}
          >
            CNY
          </MenuItem>
          <MenuItem
            onClick={() => {
              setCurrency('JPY');
              setAnchorEl(null);
            }}
          >
            JPY
          </MenuItem>
          <MenuItem
            onClick={() => {
              setCurrency('PLN');
              setAnchorEl(null);
            }}
          >
            PLN
          </MenuItem>
        </Menu>
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