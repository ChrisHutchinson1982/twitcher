import SearchFacts from "../../components/searchFacts/searchFacts";

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
      <SearchFacts locations={animal.locations} food={food} />
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
