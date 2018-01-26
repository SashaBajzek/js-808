import React, { Component } from 'react';
import styles from './App.scss';
import HeaderContainer from '../Header/HeaderContainer';
import LoopContainer from '../Loop/LoopContainer';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {

    return (
      <div className={styles.App}>
        <HeaderContainer />
        <LoopContainer />
        <Footer />
      </div>
    );
  }
}

export default App;