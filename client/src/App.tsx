import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CLOCK, WEATHER } from './config/routes';
import ClockPage from './pages/ClockPage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import WeatherPage from './pages/WeatherPage';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={CLOCK} element={<ClockPage />} />
            <Route path={WEATHER} element={<WeatherPage />} />
            <Route path="*" element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
