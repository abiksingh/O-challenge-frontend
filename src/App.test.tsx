import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './UIHelpers/header';
import BitcoinPriceScreen from './components/BitcoinPriceScreen';
import { Provider } from 'react-redux';
import store from './store';

describe('Header Component', () => {
  it('check if Header component is rendered', () => {
    render(<Header />);
    const headerElement = screen.getByText(/Bitcoin Price details App/i);
    expect(headerElement).toBeInTheDocument();
  });
});

describe('button component', () => {
  it('check if currency button is rendered correctly', async () => {
    render(
      <Provider store={store}>
        <BitcoinPriceScreen />
      </Provider>
    );
    const buttonElement = screen.getByRole('button', {
      name: 'Pick Currency',
    });
    fireEvent.click(buttonElement);
    const priceElement = screen.getByTestId('price-item');
    expect(priceElement).toBeTruthy();
  });
});

describe('Chart component', () => {
  it('check if chart is rendered correctly', async () => {
    render(
      <Provider store={store}>
        <BitcoinPriceScreen />
      </Provider>
    );

    const chartElement = screen.getByTestId('chart-item');
    expect(chartElement).toBeTruthy();
  });
});
