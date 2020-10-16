import React from 'react';
import classNames from 'classnames';

import styles from './Headline.module.scss';

const Headline = props => {
  const {
    as,
    type,
    className,
  } = props;

  const Component = as || 'h1';

  return (
    <Component
      className={
        classNames(
          styles.headline,
          {
            [styles[`headline--${type}`]]: type,
          },
          className,
        )
      }
    >
      { props.children }
    </Component>
  );
};

export default Headline;
