import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Error from './Error';
import styles from './Header.css';

class Header extends PureComponent {

  render() { 

    return (
      <header className={styles.header}>
        <section>
          <section id="title">
            <h1><NavLink exact to="/">Library of Babel</NavLink></h1>
          </section>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/goals">
                  <i className="fas fa-list"></i> library
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/users">
                  <i className="fas fa-users"></i> users
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <i className="fas fa-sign-out-alt"></i> logout
                </NavLink>
              </li>
            </ul>
          </nav>
        </section>

        <Error/>
      </header>
    );
  }
}
 
export default Header;