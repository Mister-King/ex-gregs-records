import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getRecords = (records, resolve, reject, url) => {
  const target = url || process.env.REACT_APP_API_URL;

  axios.get(target)
    .then(response => {
      const retrievedRecords = records.concat(response.data.results);
      if (response.data.nextPage !== null) {
        getRecords(retrievedRecords, resolve, reject, response.data.nextPage);
      } else {
        resolve(retrievedRecords);
      }
    })
    .catch(() => {
      reject('Oh no! Something went wrong. Refresh the page to try again.');
    });
};
