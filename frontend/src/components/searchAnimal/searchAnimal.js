const SearchAnimals = ({ animal, index }) => {
  return (
    <div
      className="sm:container sm:mx-auto bg-white rounded-xl shadow border p-4"
      data-cy={`animalNameResult${animal.name}`}
      key={index}
    >
      <h1 className="label-text text-black font-bold text-2xl pb-2">
        {animal.name}
      </h1>
      <h2 className="label-text text-black font-bold text-sm">
        Where do they live?
      </h2>
      {animal.locations.map((place, index) => {
        return (
          <p className="label-text text-black text-sm" key={index}>
            {place}
          </p>
        );
      })}
      <h2 className="label-text text-black font-bold text-sm pt-2">
        What do they eat?
      </h2>
      <p className="label-text text-black text-sm pb-2">
        {animal.characteristics.prey}
        {animal.characteristics.main_prey}
      </p>
      <form>
        <input
          className="btn btn-outline"
          data-cy="saveButton"
          type="submit"
          value="Add to log"
        />
      </form>
    </div>
  );
};

export default SearchAnimals;
