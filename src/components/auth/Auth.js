import React, { PureComponent } from 'react';
import styles from './Auth.css';

class Auth extends PureComponent {
  render() { 
    return (
      <form className={styles.auth}>
        <p>welcome, librarian.</p>
        <input placeholder="name"/>
        <input placeholder="password"/>
      </form>
    );
  }
}
 
export default Auth;