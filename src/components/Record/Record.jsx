import React, { useState } from 'react';
import RecordDetails from './RecordDetails/RecordDetails';
import RecordEdit from './RecordEdit/RecordEdit';

const Record = props => {
  const {
    artist,
    album,
    year,
    condition,
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

  const handleSubmit = newRecordData => {
    console.log(newRecordData);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleEdit = event => {
    event.stopPropagation();
    setEditing(true);
  };

  if (editing) {
    return (
      <RecordEdit
        artist={artist}
        album={album}
        year={year}
        condition={condition}
        conditionText={conditionText}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    )
  }

  return (
    <RecordDetails
      artist={artist}
      album={album}
      year={year}
      condition={condition}
      conditionText={conditionText}
      handleEdit={handleEdit}
    />
  );
};

export default Record;
