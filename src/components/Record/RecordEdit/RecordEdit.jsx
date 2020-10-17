import React, { useState } from 'react';
import { isFormValid } from '../../../utils/FormHandlers';

import Button from '../../Button/Button';
import InputContainer from '../../InputContainer/InputContainer';
import image from '../../Logo/logo.svg';
import Conditions from '../../../config/Conditions.json';

import styles from '../Record.module.scss';

const RecordEdit = props => {
  const {
    artist,
    album,
    year,
    condition,
    conditionText,
    recordIndex,
    handleCancel,
    toggleEdit,
    updateRecord,
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
      setRecord({
        ...record,
        artist: {
          ...record.artist,
          name: event.target.value,
        },
      });
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

  const handleSubmit = event => {
    event.preventDefault();

    if (!isFormValid(formErrors)) {
      return false;
    }

    const formattedRecord = record;
    formattedRecord.album_title = formattedRecord.album;

    updateRecord(recordIndex, formattedRecord);
    toggleEdit();
    return true;
  };

  const renderConditionOpts = () => {
    const options = Conditions.map((cond, i) => <option key={`conditionOpt-${i}`} value={cond.value}>{cond.label}</option>);

    return (
      <optgroup label="Choose a condition">
        {options}
      </optgroup>
    );
  };

  return (
    <div className={`${styles.record} ${styles['record--edit']}`}>
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
            required
          />

          <div className={styles.form__inlinefields}>
            <InputContainer
              containerClassName={styles.form__smallfield}
              label="Year"
              name="year"
              type="number"
              value={record.year}
              handleInputChange={handleInputChange}
              handleInputBlur={handleInputBlur}
              error={formErrors.year}
              required
            />

            <InputContainer
              containerClassName={styles.form__smallfield}
              label="Condition"
              name="condition"
              type="select"
              value={record.condition}
              handleInputChange={handleInputChange}
              handleInputBlur={handleInputBlur}
              error={formErrors.condition}
              required
            >
              { renderConditionOpts() }
            </InputContainer>
          </div>

          <div className={styles.form__inlinefields}>
            <Button
              variant="secondary"
              onClick={handleCancel}
              className={styles.form__button}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className={styles.form__button}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RecordEdit;
