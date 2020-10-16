import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

const Button = props => {
  const {
    type,
    variant,
    className,
    onClick,
    disabled,
    children,
  } = props;

  return (
    <button
      type="button"
      onClick={(event) => onClick(event)}
      className={
        classNames(
          styles.button,
          {
            [styles[`button--${type}`]]: type,
            [styles[`button--${variant}`]]: variant,
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
