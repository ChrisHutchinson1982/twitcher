import AnimalFacts from "../animalFacts/animalFacts";

const Animal = ({ animal, index, food, parentComponent, setSightings }) => {
  if (!food) {
    food = animal.characteristics.prey;
    if (!food) {
      food = animal.characteristics.main_prey;
    }
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
      fetch("/animalSightings")
        .then((response) => {
          return response.json();
        })
        .then(async (responseData) => {
          setSightings(responseData);
        });
    }
  };

  const handleAnimalDelete = async (e) => {
    e.preventDefault();

    const response = await fetch("/animalSightings", {
      method: "DELETE",
      headers: {
        animal_id: animal._id,
      },
    });

    if (response.status !== 200) {
      console.log("animal NOT deleted");
    } else {
      console.log("animal deleted");
      fetch("/animalSightings")
        .then((response) => {
          return response.json();
        })
        .then(async (responseData) => {
          setSightings(responseData);
        });
    }
  };

  const renderButton = () => {
    if (parentComponent === "Search") {
      return (
        <>
          <form onSubmit={handleAnimalSave}>
            <input
              className="btn btn-outline"
              data-cy="saveButton"
              type="submit"
              value="Add to log"
            />
          </form>
        </>
      );
    } else {
      return (
        <>
          <form onSubmit={handleAnimalDelete}>
            <input
              className="btn btn-outline"
              data-cy="deleteButton"
              type="submit"
              value="Delete"
            />
          </form>
        </>
      );
    }
  };

  return (
    <>
      <div
        className="sm:container sm:mx-auto bg-white rounded-xl shadow border p-4"
        data-cy={`animal${parentComponent}${animal.name}`}
        key={index}
      >
        <h1 className="label-text text-black font-bold text-2xl pb-2">
          {animal.name}
        </h1>
        <AnimalFacts locations={animal.locations} food={food} />
        {renderButton()}
      </div>
    </>
  );
};

export default Animal;
