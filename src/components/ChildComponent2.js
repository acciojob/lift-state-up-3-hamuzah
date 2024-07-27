// ChildComponent2.js
import React from 'react';

const ChildComponent2 = ({ handleOptionChange }) => {
  const option = 'Option 2';

  const handleClick = () => {
    handleOptionChange(option);
  };

  return (
    <div>
      <button onClick={handleClick}>Select {option}</button>
    </div>
  );
};

export default ChildComponent2;