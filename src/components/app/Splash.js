import React, { Component } from 'react';
import styles from './Splash.css';

class Splash extends Component {
  render() { 
    return (
      <div className={styles.splash}>
        <span>
          <p>By this art you may contemplate the variations of the 23 letters...</p>
          <p><cite>The Anatomy of Melancholy</cite>, part 2, sect. II, mem. IV</p>
        </span>
      </div>
    );
  }
}
 
export default Splash;