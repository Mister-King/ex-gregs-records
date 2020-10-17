import React, { useState } from 'react';
import FilterResults from 'react-filter-search';
import Pagination from 'react-js-pagination';
import Headline from '../Headline/Headline';
import Record from '../Record/Record';

import styles from './ScreenList.module.scss';
import InputContainer from '../InputContainer/InputContainer';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const ScreenList = ({ records, setRecords }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activePage, setActivePage] = useState(1);

  const limit = 10;

  const handleUpdateRecord = (originalRecord, editedRecord) => {
    const updatedRecords = records;
    const originalIndex = records.findIndex(record => record === originalRecord);
    updatedRecords[originalIndex] = editedRecord;

    const originalArtist = records[originalIndex].artist;
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
    setActivePage(1);
  };

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
  };

  const renderPage = results => {
    const pageResults = results.slice(activePage * limit - limit, activePage * limit);

    return pageResults.map((record, i) => (
      <Record
        key={`record-${i}`}
        record={record}
        updateRecord={handleUpdateRecord}
      />
    ));
  };

  return (
    <>
      <Headline>Records List</Headline>

      <InputContainer
        containerClassName={styles.search}
        label="Search"
        name="search"
        type="text"
        placeholder="e.g. Steel Panther"
        value={searchTerm}
        handleInputChange={handleInputChange}
      />


      <FilterResults
        value={searchTerm}
        data={records}
        renderResults={results => (
          <>
            <SwitchTransition component={null}>
              <CSSTransition
                key={activePage}
                timeout={100}
                classNames={styles['filter-transition']}
              >
                <div className={styles['filter-transition']}>
                  <div className={styles.recordlist}>
                    {!results.length
                      ? <Headline className={styles.recordlist__empty} type="secondary">No results</Headline>
                      : renderPage(results)}
                  </div>
                </div>
              </CSSTransition>
            </SwitchTransition>

            {results.length > limit
            && (
              <Pagination
                activePage={activePage}
                itemsCountPerPage={limit}
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
    </>
  );
};

export default ScreenList;
