import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

const Button = ({ type, className, onClick, disabled, children }) => {
  return (
    <button
      type="button"
      onClick={(event) => onClick(event)}
      className={
        classNames(
          styles.button,
          {
            [styles[`button--${type}`]]: type,
          },
          className,
        )
      }
      disabled={disabled}
    >
      { children }
    </button>
  );
};

export default Button;
