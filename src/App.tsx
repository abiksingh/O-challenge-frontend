import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StudentInfoScreen from './components/StudentInfoScreen';

const App = () => {
  return (
    <Router>
      <Route path="/" component={StudentInfoScreen} exact />
    </Router>
  );
};

export default App;
