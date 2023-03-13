import React, { useEffect, useState } from "react";

const SightingsLog = () => {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    fetch("/animalSightings")
      .then((response) => {
        return response.json();
      })
      .then(async (responseData) => {
        setSightings(responseData);
      });
  }, []);

  return (
    <>
      <div data-cy="sightingsLog">
        {sightings.map((animal) => {
          return <div>{animal.name}</div>;
        })}
      </div>
    </>
  );
};

export default SightingsLog;
