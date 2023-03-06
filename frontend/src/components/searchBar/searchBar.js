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
    <div id="searchBar">
      <h1 data-cy="searchBarLabel">What animal have you spotted?</h1>
      <form onSubmit={handleSubmit}>
        <input
          data-cy="animalName"
          type="text"
          placeholder="e.g. Robin"
          required
          value={animal}
          onChange={handleChange}
        />
        <input data-cy="searchSubmit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SearchBar;
