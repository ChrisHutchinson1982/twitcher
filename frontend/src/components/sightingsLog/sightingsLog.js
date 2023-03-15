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
        className="container mx-auto rounded-md shadow border p-4 m-10 w-full max-w-4xl space-y-2 bg-white bg-opacity-75"
        data-cy="sightingsLog"
      >
        <label className="label">
          <span
            className="label-text text-black font-bold text-5xl"
            data-cy="searchBarLabel"
          >
            Twitching Log
          </span>
        </label>
        <div className="grid grid-cols-4 gap-4">
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
      </div>
    </>
  );
};

export default SightingsLog;
