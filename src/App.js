import React from 'react';
import Logo from './components/Logo/Logo';
import styles from './App.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App__header}>
        <Logo className={styles.App__logo} />
        <p className={styles.App__text}>Greg's Records</p>
      </header>
    </div>
  );
}

export default App;
