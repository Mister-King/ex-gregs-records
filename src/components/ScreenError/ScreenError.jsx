import React from 'react';
import Headline from '../Headline/Headline';
import Button from '../Button/Button';

import styles from './ScreenError.module.scss';
import Alert from '../Alert/Alert';

const ScreenError = retry => (
  <div className={styles.centered}>
    <Headline>Oh no!</Headline>
    <p>Something went wrong.</p>
    <p>
      <Button onClick={retry}>Try again</Button>
    </p>
  </div>
);

export default ScreenError;
