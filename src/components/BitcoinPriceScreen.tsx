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
import { CardButtonWrapper } from '../UIHelpers/styles';

const BitcoinPriceScreen = () => {
  const dispatch = useDispatch();

  type getBitCoinPriceState = {
    getBitcoinPrice: {
      price: {
        bpi: {
          CNY?: {
            rate: number;
          };
          JPY?: {
            rate: number;
          };
          USD?: {
            rate: number;
          };
          EUR?: {
            rate: number;
          };
          PLN?: {
            rate: number;
          };
        };
      };
    };
  };

  type getPriceHistoryState = {
    getPriceHistory: {
      priceHistory: {
        bpi: string;
      };
    };
  };

  const getBitcoinPrice = useSelector(
    (state: getBitCoinPriceState) => state.getBitcoinPrice
  );
  const { price } = getBitcoinPrice;
  console.log(price);

  const getPriceHistory = useSelector(
    (state: getPriceHistoryState) => state.getPriceHistory
  );
  const { priceHistory } = getPriceHistory;
  console.log(priceHistory);

  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    dispatch(getPrice(currency));
    dispatch(getAllPriceHistory(currency));
  }, [dispatch, currency]);

  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    const setCurrencyRate = () => {
      if (currency === 'USD') {
        setCurrentPrice(price?.bpi.USD?.rate || 0);
      } else if (currency === 'EUR') {
        setCurrentPrice(price?.bpi.EUR?.rate || 0);
      } else if (currency === 'CNY') {
        setCurrentPrice(price?.bpi.CNY?.rate || 0);
      } else if (currency === 'JPY') {
        setCurrentPrice(price?.bpi.JPY?.rate || 0);
      } else {
        setCurrentPrice(price?.bpi.PLN?.rate || 0);
      }
    };
    setCurrencyRate();
  }, [
    currency,
    price?.bpi.USD?.rate,
    price?.bpi.EUR?.rate,
    price?.bpi.CNY?.rate,
    price?.bpi.JPY?.rate,
    price?.bpi.PLN?.rate,
  ]);

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
        <CardButtonWrapper>
          <Button
            id="fade-button"
            aria-controls="fade-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            variant="outlined"
          >
            Pick Currency
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
              $ US Dollar
            </MenuItem>
            <MenuItem
              onClick={() => {
                setCurrency('EUR');
                setAnchorEl(null);
              }}
            >
              € Euro
            </MenuItem>
            <MenuItem
              onClick={() => {
                setCurrency('CNY');
                setAnchorEl(null);
              }}
            >
              ¥ Chinese Yuan
            </MenuItem>
            <MenuItem
              onClick={() => {
                setCurrency('JPY');
                setAnchorEl(null);
              }}
            >
              ¥ Japanese Yen
            </MenuItem>
            <MenuItem
              onClick={() => {
                setCurrency('PLN');
                setAnchorEl(null);
              }}
            >
              zł Poland złoty
            </MenuItem>
          </Menu>
          <Card sx={{ width: 210, height: 60 }}>
            <CardContent>
              <Typography sx={{ fontSize: 24 }} color="text.secondary">
                {currency === 'USD'
                  ? '$'
                  : currency === 'EUR'
                  ? '€'
                  : currency === 'PLN'
                  ? ' zł'
                  : currency === 'JPY' || 'CNY'
                  ? '¥'
                  : ''}
                {currentPrice}
              </Typography>
            </CardContent>
          </Card>
        </CardButtonWrapper>

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
