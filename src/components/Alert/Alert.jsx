import React from 'react';
import classNames from 'classnames';

import styles from './Alert.module.scss';

const Alert = ({ type, className, children }) => (
  <div
    className={
      classNames(
        styles.alert,
        {
          [styles[`alert--${type}`]]: type,
        },
        className,
      )
    }
  >
    { children }
  </div>
);

export default Alert;
