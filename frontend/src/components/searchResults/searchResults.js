const SearchResults = ({ animalSearch, renderSearch }) => {
  if (renderSearch) {
    return (
      <>
        {animalSearch.map((animal) => {
          return (
            <div data-cy={`animalNameResult${animal.name}`}>{animal.name}</div>
          );
        })}
      </>
    );
  }
};

export default SearchResults;
