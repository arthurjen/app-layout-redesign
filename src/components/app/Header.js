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
                <NavLink exact to="/hexagon">hexagon</NavLink>
              </li>
              <li>
                <NavLink exact to="/text">text</NavLink>
              </li>
              <li>
                <NavLink exact to="/librarians">librarians</NavLink>
              </li>
              <li>
                <NavLink to="/auth">login</NavLink>
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