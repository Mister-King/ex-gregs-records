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
      type={type || 'button'}
      onClick={onClick}
      className={
        classNames(
          styles.button,
          {
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
