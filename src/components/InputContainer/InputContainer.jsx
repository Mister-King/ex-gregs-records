import React from 'react';
import classNames from 'classnames';
import styles from './InputContainer.module.scss';

const InputContainer = props => {
  const renderBody = () => {
    if (props.type === 'select') {
      return (
        <select
          className={`${styles.input} ${styles['input--select']}`}
          name={props.name}
          id={props.name}
          value={props.value}
          onChange={props.handleInputChange}
          onBlur={props.handleInputBlur}
        >
          {props.children}
        </select>
      );
    }

    if (props.children) {
      return props.children;
    }

    return (
      <input
        className={
          classNames(
            styles.input,
            {
              [styles['input--error']]: props.error,
            },
          )
        }
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleInputChange}
        onBlur={props.handleInputBlur}
        required={props.required}
        step={props.step}
        min={props.min}
      />
    );
  };

  return (
    <fieldset className={classNames(styles.fieldset, props.containerClassName)}>
      <label className={classNames(styles.label, props.labelClassName)} htmlFor={props.name}>
        {props.label}
      </label>
      <div className={styles.inputContainer}>
        <span className={styles.inputContainer__inner}>
          {renderBody()}
        </span>

        {(props.error && typeof props.errorText === 'string')
        && <span className={styles.error}>{props.errorText}</span>}
      </div>
    </fieldset>
  );
};

export default InputContainer;
