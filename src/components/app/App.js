import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Hexagon from '../hexagon/Hexagon';
import Text from '../hexagon/Text';
import Splash from './Splash';
import styles from './App.css';

class App extends PureComponent {
  state = {
    splash: true
  };

  removeSplash = () => {
    this.setState(({ splash: false }));
  };

  render() { 
    const { splash } = this.state;
    return (
      <Router>
        <div className="page-container">
          {splash && <Splash onClick={this.removeSplash}/>}
          <Header/>
          <main className={styles.app}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/hexagon" component={Hexagon}/>
              <Route path="/text" component={Text}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
 
export default App;