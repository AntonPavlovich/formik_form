import React from 'react';

const ErrMessage = (props) => {
  const {msg} = props;

  return (
    <p>
      {msg}
    </p>
  );
}

export default ErrMessage;
