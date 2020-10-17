/* eslint-disable import/prefer-default-export */
export const isFormValid = form => Object.keys(form).every(key => form[key] === false);
