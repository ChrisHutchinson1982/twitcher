const SearchResults = ({ animalSearch, renderSearch }) => {
  if (renderSearch) {
    return (
      <>
        {animalSearch.map((animal) => {
          return (
            <div data-cy={`animalNameResult${animal.name}`}>
              <div>{animal.name}</div>
              <div>Where do they live?</div>
              {animal.locations.map((place) => {
                return <div>{place}</div>;
              })}
              <div>What do the eat?</div>
              <div>{animal.characteristics.prey}</div>
              <div>{animal.characteristics.main_prey}</div>
            </div>
          );
        })}
      </>
    );
  }
};

export default SearchResults;
