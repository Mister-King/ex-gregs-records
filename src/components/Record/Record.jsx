import React, { useState } from 'react';
import RecordDetails from './RecordDetails/RecordDetails';
import RecordEdit from './RecordEdit/RecordEdit';

const Record = props => {
  const {
    artist,
    album,
    year,
    condition,
    recordIndex,
    updateRecord,
  } = props;

  const [editing, setEditing] = useState(false);

  let conditionText;

  switch (condition) {
    case 'poor':
      conditionText = 'Poor';
      break;
    case 'fair':
      conditionText = 'Fair';
      break;
    case 'good':
      conditionText = 'Good';
      break;
    case 'very_good':
      conditionText = 'Great';
      break;
    case 'mint':
      conditionText = 'Mint';
      break;
    default:
      conditionText = 'N/A';
  }

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
        artist={artist}
        album={album}
        year={year}
        condition={condition}
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
      artist={artist}
      album={album}
      year={year}
      condition={condition}
      conditionText={conditionText}
      toggleEdit={toggleEdit}
    />
  );
};

export default Record;
