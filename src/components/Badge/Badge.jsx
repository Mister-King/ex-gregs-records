import React from 'react';
import classNames from 'classnames';

import './starburst.css';
import styles from './Badge.module.scss';

const Badge = props => {
  const {
    type,
    className,
    children,
  } = props;

  if (type === 'mint') {
    return (
      <div
        className={classNames(
          styles.badge,
          styles['badge--mint'],
        )}
      >
        <div className={`${styles.badge__starburst} starburst starburst--both`} />
        <span className={styles['badge__starburst-text']}>{children}</span>
      </div>
    );
  }

  return (
    <div
      className={
        classNames(
          styles.badge,
          {
            [styles[`badge--${type}`]]: type,
          },
          className,
        )
      }
    >
      {children}
    </div>
  );
};

export default Badge;
