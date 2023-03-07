const SearchResults = ({ animalSearch, renderSearch }) => {
  if (renderSearch) {
    return <div data-cy="animalNameResult">{animalSearch[0].name}</div>;
  }
};

export default SearchResults;
