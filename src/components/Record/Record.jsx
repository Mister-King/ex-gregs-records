import React from 'react';
import classNames from 'classnames';
import Headline from '../Headline/Headline';
import image from '../Logo/logo.svg';

import styles from './Record.module.scss';
import Badge from '../Badge/Badge';

const Record = props => {
  const {
    artist,
    album,
    year,
    condition,
    updateRecord,
  } = props;

  let recordImage = props.image || image;
  let conditionText;

  switch (condition) {
    case 'poor':
      conditionText = 'Poor';
      break;
    case 'fair':
      conditionText = 'Fair';
      break;
    case 'good':
      conditionText = 'Good';
      break;
    case 'very_good':
      conditionText = 'Great';
      break;
    case 'mint':
      conditionText = 'Mint';
      break;
    default:
      conditionText = 'Unknown';
  }

  return (
    <div className={styles.record}>
      <img src={recordImage} className={styles.record__image} alt={album} />

      <div className={styles.record__body}>
        <Headline
          type="tertiary"
          className={styles.record__title}
        >
          {album}
        </Headline>

        <ul className={styles.record__details}>
          <li>{artist.name}</li>
          <li>{year}</li>
        </ul>

      </div>

      <Badge
        className={styles.record__condition}
        type={condition}
      >
        {conditionText}
      </Badge>
    </div>
  );
};

export default Record;
