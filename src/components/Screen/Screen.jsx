import React from 'react';
import classNames from 'classnames';
import Logo from '../Logo/Logo';
import Headline from '../Headline/Headline';

import styles from './Screen.module.scss';

const Screen = ({ className, full, children }) => (
  <div
    className={classNames(
      styles.screen,
      {
        [styles['screen--full']]: full,
      },
      className,
    )}
  >
    {full
      ? children
      : (
        <>
          <header className={styles.header}>
            <Logo className={styles.logo} />
            <Headline type="secondary" className={styles.title}>Greg's Records</Headline>
          </header>
          <div className={styles.body}>
            {children}
          </div>
        </>
      )}
  </div>
);

export default Screen;
