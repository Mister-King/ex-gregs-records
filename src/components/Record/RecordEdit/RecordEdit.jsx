import React, { useState } from 'react';
import image from '../../Logo/logo.svg';

import styles from '../Record.module.scss';
import Button from '../../Button/Button';
import InputContainer from '../../InputContainer/InputContainer';

const RecordEdit = props => {
  const {
    artist,
    album,
    year,
    condition,
    conditionText,
    handleSubmit,
    handleCancel,
  } = props;

  const [formErrors, setFormErrors] = useState({});
  const [record, setRecord] = useState({
    artist,
    album,
    year,
    condition,
    conditionText,
  });

  const recordImage = props.image || image;

  const handleInputChange = event => {
    if (event.target.name === 'artist') {
      console.log('do something else');
    } else {
      setRecord({
        ...record,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleInputBlur = event => {
    setFormErrors({
      ...formErrors,
      [event.target.name]: !event.target.value,
    });
  };

  return (
    <div className={styles.record}>
      <img src={recordImage} className={styles.record__image} alt={album} />

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.record__body}>
          <InputContainer
            label="Album"
            name="album"
            type="text"
            value={record.album}
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
            error={formErrors.album}
            errorText="Album cannot be blank."
            required
          />

          <InputContainer
            label="Artist"
            name="artist"
            type="text"
            value={record.artist.name}
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
            error={formErrors.artist}
            errorText="Artist cannot be blank."
            required
          />

          <InputContainer
            containerClassName={styles.form__year}
            label="Year"
            name="year"
            type="number"
            value={record.year}
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
            error={formErrors.year}
            errorText="Year cannot be blank."
            required
          />

          <Button
            variant="secondary"
            onClick={handleCancel}
            className={styles.form__button}
          >
            Cancel
          </Button>

          <Button
            onClick={handleSubmit}
            className={styles.form__button}
          >
            Submit
          </Button>
        </div>

      {/*<Badge*/}
      {/*  className={styles.record__condition}*/}
      {/*  type={condition}*/}
      {/*>*/}
      {/*  {conditionText}*/}
      {/*</Badge>*/}
      </form>
    </div>
  );
};

export default RecordEdit;
