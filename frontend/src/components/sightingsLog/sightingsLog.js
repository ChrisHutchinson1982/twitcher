import React, { useEffect, useState } from "react";
import SearchAnimal from "../searchAnimal/searchAnimal";

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
      <div
        className="container mx-auto rounded-md shadow border p-4 m-10 w-full max-w-sm space-y-2"
        data-cy="sightingsLog"
      >
        {sightings.map((animal, index) => {
          return (
            <SearchAnimal
              animal={animal}
              index={index}
              food={animal.food}
              parentComponent={"Log"}
            />
          );
        })}
      </div>
    </>
  );
};

export default SightingsLog;
