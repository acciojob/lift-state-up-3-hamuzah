// ChildComponent1.js
import React from 'react';

const ChildComponent1 = ({ handleOptionChange }) => {
  const option = 'Option 1';

  const handleClick = () => {
    handleOptionChange(option);
  };

  return (
    <div>
      <button onClick={handleClick}>Select {option}</button>
    </div>
  );
};

export default ChildComponent1;