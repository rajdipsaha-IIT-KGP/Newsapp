import React from 'react';
import Loading from './Loading.gif'; // Adjust path if needed

const Spinner = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={Loading} alt="Loading..." />
    </div>
  );
};

export default Spinner;
