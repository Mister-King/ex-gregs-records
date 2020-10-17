import React, { useState } from 'react';
import FilterResults from 'react-filter-search';
import Pagination from 'react-js-pagination';
import Headline from '../Headline/Headline';
import Record from '../Record/Record';

import styles from './ScreenList.module.scss';
import InputContainer from '../InputContainer/InputContainer';

const ScreenList = ({ records, setRecords }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [limit, setLimit] = useState(10);

  const handleUpdateRecord = (recordIndex, editedRecord) => {
    const updatedRecords = records;
    updatedRecords[recordIndex] = editedRecord;

    const originalArtist = records[recordIndex].artist;
    const updatedArtist = editedRecord.artist;

    if (originalArtist.name !== updatedArtist) {
      updatedRecords.forEach((record, i) => {
        if (record.artist.id === updatedArtist.id) {
          updatedRecords[i].artist.name = updatedArtist.name;
        }
      });
    }

    setRecords([...updatedRecords]);
  };

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  return (
    <>
      <Headline>Records List</Headline>
      <Headline type="tertiary">Page 1</Headline>

      <form onSubmit={() => null}>
        <InputContainer
          containerClassName={styles.search}
          label="Search"
          name="search"
          type="text"
          value={searchTerm}
          handleInputChange={handleInputChange}
        />

        <FilterResults
          value={searchTerm}
          data={records}
          renderResults={results => (
            <>
              <div className={styles.recordlist}>
                { !results.length
                  ? (
                    <Headline className={styles.recordlist__empty} type="secondary">No results</Headline>
                  )
                  : (
                    results.map((record, i) => (
                      <Record
                        key={`record-${i}`}
                        artist={record.artist}
                        album={record.album_title}
                        year={record.year}
                        condition={record.condition}
                        recordIndex={i}
                        updateRecord={handleUpdateRecord}
                      />
                    ))
                  )}
              </div>

              { results.length > 1
              && (
                <Pagination
                  activePage={activePage}
                  itemsCountPerPage={10}
                  totalItemsCount={results.length}
                  onChange={handlePageChange}
                  innerClass={styles.pagination}
                  itemClass={styles.pagination__item}
                  linkClass={styles.pagination__link}
                  activeLinkClass={`${styles.pagination__link} ${styles['pagination__link--active']}`}
                />
              )}
            </>
          )}
        />
      </form>
    </>
  );
};

export default ScreenList;
