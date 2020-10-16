import React from 'react';
import Logo from './components/Logo/Logo';
import styles from './App.module.scss';
import Headline from './components/Headline/Headline';

const App = () => (
  <div className={styles.App}>
    <header className={styles.App__header}>
      <Logo className={styles.App__logo} />
      <Headline className={styles.App__headline}>Greg's Records</Headline>
    </header>
  </div>
);

export default App;
