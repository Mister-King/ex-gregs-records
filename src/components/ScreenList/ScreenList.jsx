import React from 'react';
import Headline from '../Headline/Headline';
import Record from '../Record/Record';

import styles from './ScreenList.module.scss';

const ScreenList = ({ records, setRecords }) => {
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

  return (
    <>
      <Headline>Records List</Headline>
      <Headline type="tertiary">Page 1</Headline>

      <div className={styles.recordlist}>
        { records.map((record, i) => (
          <Record
            key={`record-${i}`}
            artist={record.artist}
            album={record.album_title}
            year={record.year}
            condition={record.condition}
            recordIndex={i}
            updateRecord={handleUpdateRecord}
          />
        ))}
      </div>
    </>
  );
};

export default ScreenList;
