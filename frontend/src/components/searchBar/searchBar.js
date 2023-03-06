const SearchBar = () => {
  return (
    <div id="searchBar">
      <h1 data-cy="searchBarLabel">What animal have you spotted?</h1>
      <form>
        <input
          data-cy="animalName"
          type="text"
          placeholder="e.g. Robin"
          // value={animal}
          // onChange={handleChange(setAnimal)}
        />

        <input data-cy="searchSubmit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SearchBar;
