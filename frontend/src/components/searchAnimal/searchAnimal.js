const SearchAnimal = ({ animal, index }) => {
  let food = animal.characteristics.prey;

  if (!food) {
    food = animal.characteristics.main_prey;
  }

  const handleAnimalSave = async (e) => {
    e.preventDefault();

    let response = await fetch("/animalSightings", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: animal.name,
        locations: animal.locations,
        food: food,
      }),
    });

    if (response.status !== 200) {
      console.log("animal NOT added");
    } else {
      console.log("animal added");
    }
  };

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
      <p className="label-text text-black text-sm pb-2">{food}</p>
      <div>
        <form onSubmit={handleAnimalSave}>
          <input
            className="btn btn-outline"
            data-cy="saveButton"
            type="submit"
            value="Add to log"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchAnimal;
