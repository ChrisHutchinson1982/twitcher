const SearchResults = ({ animalSearch, renderSearch }) => {
  if (renderSearch) {
    return (
      <>
        {animalSearch.map((animal, index) => {
          return (
            <div
              className="sm:container sm:mx-auto bg-neutral-50 rounded-xl shadow border p-4"
              data-cy={`animalNameResult${animal.name}`}
              key={index}
            >
              <h1 className="label-text text-gray-700 font-bold text-2xl pb-2">
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
                What do they eat?
              </h2>
              <p className="label-text text-gray-700 text-sm pb-2">
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
