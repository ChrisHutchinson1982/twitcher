const SearchResults = ({ animalSearch, renderSearch }) => {
  if (renderSearch) {
    return (
      <>
        {animalSearch.map((animal, index) => {
          return (
            <div
              className="sm:container sm:mx-auto bg-neutral-50 rounded-xl shadow border p-4 m-10"
              data-cy={`animalNameResult${animal.name}`}
              key={index}
            >
              <h1 className="label-text text-gray-700 font-bold text-base">
                {animal.name}
              </h1>
              <h2 className="label-text text-gray-700 font-bold text-sm">
                Where do they live?
              </h2>
              {animal.locations.map((place, index) => {
                return (
                  <p className="label-text text-gray-700 text-sm" key={index}>
                    {place}
                  </p>
                );
              })}
              <h2 className="label-text text-gray-700 font-bold text-sm">
                What do the eat?
              </h2>
              <p className="label-text text-gray-700 text-sm">
                {animal.characteristics.prey}
                {animal.characteristics.main_prey}
              </p>
            </div>
          );
        })}
      </>
    );
  }
};

export default SearchResults;
