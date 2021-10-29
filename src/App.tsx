import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BitcoinPriceScreen from './components/BitcoinPriceScreen';

const App = () => {
  return (
    <Router>
      <Route path="/" component={BitcoinPriceScreen} exact />
    </Router>
  );
};

export default App;
