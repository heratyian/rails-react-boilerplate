import React from 'react';
import { Outlet } from 'react-router';
import { CLOCK, HOME, WEATHER } from '../config/routes';


class Layout extends React.Component {

  render() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <a href={HOME}>Home</a>
            </li>
            <li>
              <a href={CLOCK}>Clock</a>
            </li>
            <li>
              <a href={WEATHER}>Weather</a>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    );
  }
}

export default Layout;
