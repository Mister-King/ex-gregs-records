import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

const Button = ({ type, className, children }) => {
  return (
    <button
      type="button"
      className={
        classNames(
          styles.button,
          {
            [styles[`button--${type}`]]: type,
          },
          className,
        )
      }
    >
      { children }
    </button>
  );
};

export default Button;
