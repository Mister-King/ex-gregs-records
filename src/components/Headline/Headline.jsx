import React from 'react';
import classnames from 'classnames';

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
        classnames(
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
