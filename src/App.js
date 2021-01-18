import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Places from './components/Places';

const App = () => {
  // API for the tours data by John Smilga
  const url = 'https://course-api.com/react-tours-project';
  // Setting component states; one to save the fetched data,
  // and the other is to set the display "Loading..."
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching the data from an API using javascript async/await
  // Try/Catch (javascript) is a good way to add in this approach
  const fetchPlaces = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const places = await response.json();
      setPlaces(places);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  // Using the useEffect() hook to call the function to fetch data
  // Note that '[]' is passed to only render/fetch once.
  useEffect(() => {
    fetchPlaces();
  }, []);

  // Function to remove an item; as always using '.filter()' js method
  const removePlace = (id) => {
    const filteredPlaces = places.filter((place) => place.id !== id);
    setPlaces(filteredPlaces);
  };

  // Here starts the multiple return / conditional render
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // Render when the places array is empty
  if (places.length === 0) {
    return (
      <main style={{ textAlign: 'center' }}>
        <h1>Hit "Refresh" to load available Scenic Spots.</h1>
        <button
          style={{
            backgroundColor: 'black',
            color: 'white',
            textTransform: 'uppercase',
            padding: '10px',
            border: '1px solid white',
            outline: '1px solid black',
            cursor: 'pointer',
          }}
          onClick={() => fetchPlaces()}>
          Refresh
        </button>
      </main>
    );
  }

  // Render when places are successfully fetched and is not empty
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Scenic Spots</h1>

      {/* Passing state and function as prop */}
      <Places places={places} removePlace={removePlace} />
    </div>
  );
};

export default App;
