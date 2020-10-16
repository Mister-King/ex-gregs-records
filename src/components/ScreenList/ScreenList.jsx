import React from 'react';
import Headline from '../Headline/Headline';
import Record from '../Record/Record';

import styles from './ScreenList.module.scss';

const ScreenList = ({ records }) => (
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
        />
      ))}
    </div>
  </>
);

export default ScreenList;
