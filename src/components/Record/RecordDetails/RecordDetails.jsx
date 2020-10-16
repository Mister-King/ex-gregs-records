import React from 'react';
import Headline from '../../Headline/Headline';
import Badge from '../../Badge/Badge';
import image from '../../Logo/logo.svg';
import editIcon from '../edit-icon.svg';

import styles from '../Record.module.scss';
import Button from '../../Button/Button';

const RecordDetails = props => {
  const {
    artist,
    album,
    year,
    condition,
    conditionText,
    handleEdit,
  } = props;

  const recordImage = props.image || image;

  return (
    // Disabling linting as there is a button element inside this div for accessibility
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={styles.record}
      onClick={handleEdit}
    >
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

      <Button
        className={styles.edit}
        type="text"
        onClick={handleEdit}
      >
        <img
          src={editIcon}
          className={styles.edit__image}
          alt="Edit"
        />
      </Button>

      <Badge
        className={styles.record__condition}
        type={condition}
      >
        {conditionText}
      </Badge>
    </div>
  );
};

export default RecordDetails;
