import React, { useState } from 'react';
import Headline from '../Headline/Headline';
import Button from '../Button/Button';

import styles from './ScreenError.module.scss';

const ScreenError = ({ retry }) => {
  const [clicked, setClicked] = useState(false);

  const handleRetry = event => {
    event.preventDefault();
    setClicked(true);
    retry();
  };

  return (
    <div className={styles.centered}>
      <Headline>Oh no!</Headline>
      <p>Something went wrong.</p>
      <p>
        <Button
          onClick={handleRetry}
          disabled={clicked}
        >
          Try again
        </Button>
      </p>
    </div>
  );
};

export default ScreenError;
