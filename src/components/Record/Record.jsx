import React, { useState } from 'react';
import RecordDetails from './RecordDetails/RecordDetails';
import RecordEdit from './RecordEdit/RecordEdit';
import Conditions from '../../config/Conditions.json';

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

  if (editing) {
    return (
      <RecordEdit
        record={record}
        conditionText={conditionText}
        recordIndex={recordIndex}
        updateRecord={updateRecord}
        toggleEdit={toggleEdit}
        handleCancel={handleCancel}
      />
    );
  }

  return (
    <RecordDetails
      record={record}
      conditionText={conditionText}
      toggleEdit={toggleEdit}
    />
  );
};

export default Record;
