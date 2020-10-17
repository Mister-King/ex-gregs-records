import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import RecordDetails from './RecordDetails/RecordDetails';
import RecordEdit from './RecordEdit/RecordEdit';

import Conditions from '../../config/Conditions.json';

import styles from './Record.module.scss';

const Record = props => {
  const {
    record,
    recordIndex,
    updateRecord,
  } = props;

  const [editing, setEditing] = useState(false);

  const { label: conditionText } = Conditions.find(condition => condition.value === record.condition) || { label: 'N/A' };

  const handleCancel = () => {
    setEditing(false);
  };

  const toggleEdit = event => {
    if (event) {
      event.stopPropagation();
    }

    setEditing(!editing);
  };

  return (
    <SwitchTransition component={null}>
      <CSSTransition
        key={editing}
        timeout={100}
        classNames={styles['record-transition']}
      >
        <div className={styles['record-transition']}>
          {editing
            ? (
              <RecordEdit
                record={record}
                conditionText={conditionText}
                recordIndex={recordIndex}
                updateRecord={updateRecord}
                toggleEdit={toggleEdit}
                handleCancel={handleCancel}
              />
            )
            : (
              <RecordDetails
                record={record}
                conditionText={conditionText}
                toggleEdit={toggleEdit}
              />
            )}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Record;
