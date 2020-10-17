import React, { useState } from 'react';
import { isFormValid } from '../../../utils/FormHandlers';

import Button from '../../Button/Button';
import InputContainer from '../../InputContainer/InputContainer';
import image from '../../Logo/logo.svg';
import Conditions from '../../../config/Conditions.json';

import styles from '../Record.module.scss';

const RecordEdit = props => {
  const {
    record,
    handleCancel,
    toggleEdit,
    updateRecord,
  } = props;

  const [formErrors, setFormErrors] = useState({});
  const [newRecord, setNewRecord] = useState(record);

  const recordImage = props.image || image;

  const handleInputChange = event => {
    if (event.target.name === 'artist') {
      setNewRecord({
        ...newRecord,
        artist: {
          ...newRecord.artist,
          name: event.target.value,
        },
      });
    } else {
      setNewRecord({
        ...newRecord,
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

    updateRecord(record, newRecord);
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
      <img src={recordImage} className={styles.record__image} alt={newRecord.album_title} />

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.record__body}>
          <InputContainer
            label="Album"
            name="album_title"
            type="text"
            value={newRecord.album_title}
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
            error={formErrors.album_title}
            required
          />

          <InputContainer
            label="Artist"
            name="artist"
            type="text"
            value={newRecord.artist.name}
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
              value={newRecord.year}
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
              value={newRecord.condition}
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
