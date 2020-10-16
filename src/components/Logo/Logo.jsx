import React, { forwardRef } from 'react';
import classNames from 'classnames';

import logo from './logo.svg';
import styles from './Logo.module.scss';

const Logo = forwardRef(({
  large,
  animated,
  className,
}, ref) => (
  <img
    src={logo}
    className={classNames(
      styles.logo,
      {
        [styles['logo--large']]: large,
        [styles['logo--animated']]: animated,
      },
      className,
    )}
    alt="logo"
    ref={ref}
  />
));

export default Logo;
