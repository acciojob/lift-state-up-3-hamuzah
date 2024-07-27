
// import React from "react";
import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App

// App.js
import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <ChildComponent1 handleOptionChange={handleOptionChange} />
      <ChildComponent2 handleOptionChange={handleOptionChange} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default App;
