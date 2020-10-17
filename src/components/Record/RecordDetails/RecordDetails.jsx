import React from 'react';
import Headline from '../../Headline/Headline';
import Badge from '../../Badge/Badge';
import image from '../../Logo/logo.svg';
import editIcon from '../edit-icon.svg';

import styles from '../Record.module.scss';
import Button from '../../Button/Button';

const RecordDetails = props => {
  const {
    record,
    conditionText,
    toggleEdit,
  } = props;

  const recordImage = props.image || image;

  return (
    // Disabling linting as there is a button element inside this div for accessibility
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={styles.record}
      onClick={toggleEdit}
    >
      <img src={recordImage} className={styles.record__image} alt={record.album_title} />

      <div className={styles.record__body}>
        <Headline
          type="tertiary"
          className={styles.record__title}
        >
          {record.album_title}
        </Headline>

        <ul className={styles.record__details}>
          <li>{record.artist.name}</li>
          <li>{record.year}</li>
        </ul>

      </div>

      <Button
        className={styles.edit}
        variant="text"
        onClick={toggleEdit}
      >
        <img
          src={editIcon}
          className={styles.edit__image}
          alt="Edit"
        />
      </Button>

      <Badge
        className={styles.record__condition}
        type={record.condition}
      >
        {conditionText}
      </Badge>
    </div>
  );
};

export default RecordDetails;
