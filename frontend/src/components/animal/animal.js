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

    refreshSightingsLog(response);
  };

  const handleAnimalDelete = async (e) => {
    e.preventDefault();

    const response = await fetch("/animalSightings", {
      method: "DELETE",
      headers: {
        animal_id: animal._id,
      },
    });

    refreshSightingsLog(response);
  };

  const refreshSightingsLog = (response) => {
    if (response.status !== 200) {
      console.log("Action not completed");
    } else {
      console.log("Action completed");
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
      return createButton(handleAnimalSave, "saveButton", "Add to log");
    } else {
      return createButton(handleAnimalDelete, "deleteButton", "Delete");
    }
  };

  const createButton = (handleAction, id, label) => {
    return (
      <>
        <form onSubmit={handleAction}>
          <input
            className="btn btn-outline"
            data-cy={id}
            type="submit"
            value={label}
          />
        </form>
      </>
    );
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
