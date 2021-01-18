import React, { useState } from 'react';
import './Place.css';

// Inline styles saved in a variable,
// notice that it is declared outside the component
const readMoreStyles = {
  color: 'red',
  fontSize: '12px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  cursor: 'pointer',
};

// Receiving the destructured props, and function from Places.js
const Place = ({ id, name, info, image, price, removePlace }) => {
  // Create state for the 'read more' button using useState() hook
  const [readMore, setReadMore] = useState(true);

  return (
    <div className='card'>
      <div style={{ maxHeight: '300px', overflow: 'hidden' }}>
        <img src={image} alt={id} style={{ width: '100%' }} />
      </div>
      <h2>{name}</h2>
      <p className='price'>$ {price}</p>

      {/* Conditional render based on the state 'readMore' */}
      <p>
        {readMore ? info.substring(0, 150) : info}{' '}
        <span style={readMoreStyles} onClick={() => setReadMore(!readMore)}>
          {readMore ? '... Read More' : ' --- Show Less'}
        </span>
      </p>
      <p>
        <button onClick={() => removePlace(id)}>Not Interested</button>
      </p>
    </div>
  );
};

export default Place;
