import React, { useState } from "react";
import SearchResults from "../../components/searchResults/searchResults";

const SearchBar = () => {
  const [animal, setAnimal] = useState("");
  const [animalSearch, setAnimalSearch] = useState([]);
  const [renderSearch, setRenderSearch] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch(`http://localhost:8080/animals?name=${animal}`)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setAnimalSearch(responseData);
        setRenderSearch(true);
      });
  };

  const handleChange = (event) => {
    event.preventDefault();
    return setAnimal(event.target.value);
  };

  return (
    <>
      <div className="w-1/3 pl-20">
        <div className="sm:container sm:mx-auto bg-gray-200 rounded-xl shadow border p-4 m-10">
          <form
            className="form-control w-full max-w-xs space-y-2"
            onSubmit={handleSubmit}
          >
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
              value="Search"
            />
            <SearchResults
              animalSearch={animalSearch}
              renderSearch={renderSearch}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
