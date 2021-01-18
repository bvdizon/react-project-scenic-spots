import React from 'react';
import Place from './Place';

// Props received from App.js, Destructured
const PlacesList = ({ places, removePlace }) => {
  return (
    <div id='places'>
      {places.map((place) => {
        // Noted { ...place }, passing properties destructured
        return <Place key={place.id} {...place} removePlace={removePlace} />;
      })}
    </div>
  );
};

export default PlacesList;
