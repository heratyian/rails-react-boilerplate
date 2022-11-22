import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CLOCK, WEATHER } from './config/routes';
import ClockPage from './pages/ClockPage';
import PageProps from './pages/definitions/PageProps';
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
            <Route path={WEATHER} element={<WeatherPage {...this.props as PageProps} />} />
            <Route path="*" element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default connect(state => state)(App);
