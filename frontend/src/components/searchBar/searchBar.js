import React, { useState } from "react";
import SearchResults from "../../components/searchResults/searchResults";

const SearchBar = ({ setSightings }) => {
  const [animal, setAnimal] = useState("");
  const [animalSearch, setAnimalSearch] = useState([]);
  const [renderSearch, setRenderSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    await fetch(`/animals?name=${animal}`)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setAnimalSearch(responseData);
        setRenderSearch(true);
        setLoading(false);
      });
  };

  const handleChange = (event) => {
    event.preventDefault();
    return setAnimal(event.target.value);
  };

  return (
    <>
      <div className="pl-10">
        <div className="container mx-auto rounded-md shadow border p-4 m-10 w-full max-w-sm space-y-2">
          <form
            className="form-control w-full max-w-xs space-y-2"
            onSubmit={handleSubmit}
          >
            <label className="label">
              <span
                className="label-text text-black font-bold text-base"
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
              className="btn btn-outline"
              data-cy="searchSubmit"
              type="submit"
              value="Search"
            />
          </form>
          <SearchResults
            animalSearch={animalSearch}
            renderSearch={renderSearch}
            loading={loading}
            setSightings={setSightings}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
