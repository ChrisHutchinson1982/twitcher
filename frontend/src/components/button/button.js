const Button = ({ animal, food, parentComponent, setSightings }) => {
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

  const createButton = (handleAction, id, label) => {
    return (
      <>
        <form onSubmit={handleAction} key={id}>
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

  if (parentComponent === "Search") {
    return createButton(handleAnimalSave, "saveButton", "Add to log");
  } else {
    return createButton(handleAnimalDelete, "deleteButton", "Delete");
  }
};

export default Button;
