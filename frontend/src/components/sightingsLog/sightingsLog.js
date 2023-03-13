import React, { useEffect } from "react";
import Animal from "../animal/animal";

const SightingsLog = ({ sightings, setSightings }) => {
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
            <div key={index}>
              <Animal
                animal={animal}
                index={index}
                food={animal.food}
                parentComponent={"Log"}
                setSightings={setSightings}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SightingsLog;
