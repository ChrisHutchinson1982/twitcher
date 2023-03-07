import React, { useState } from "react";

const SearchBar = () => {
  const [animal, setAnimal] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch(`http://localhost:8080/animals?name=${animal}`).then(
      (response) => {
        return response.json();
      }
    );
  };

  const handleChange = (event) => {
    event.preventDefault();
    return setAnimal(event.target.value);
  };

  return (
    <div className="w-1/3 pl-20">
      <div className="sm:container sm:mx-auto bg-gray-200 rounded-xl shadow border p-4 m-10">
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs space-y-2">
            <label className="label">
              <span
                className="label-text text-gray-700 font-bold text-base"
                data-cy="searchBarLabel"
              >
                What animal have you spotted?
              </span>
            </label>
            <input
              className="input input-bordered input-s"
              data-cy="animalName"
              type="text"
              placeholder="e.g. Robin"
              required
              value={animal}
              onChange={handleChange}
            />
            <input
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              data-cy="searchSubmit"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
