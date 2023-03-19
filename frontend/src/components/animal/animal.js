import AnimalFacts from "../animalFacts/animalFacts";
import Button from "../button/button";

const Animal = ({ animal, index, food, parentComponent, setSightings }) => {
  if (!food) {
    let prey = animal.characteristics.prey;
    let main_prey = animal.characteristics.main_prey;
    if (prey) {
      food = prey;
    } else if (main_prey) {
      food = main_prey;
    } else {
      food = "Not available";
    }
  }

  return (
    <>
      <div
        className="sm:container sm:mx-auto bg-white rounded-xl shadow border p-4"
        data-cy={`animal${parentComponent}${animal.name}`}
        key={index}
      >
        <h1 className="label-text text-black font-bold text-2xl pb-2 h-16">
          {animal.name}
        </h1>
        <AnimalFacts locations={animal.locations} food={food} />
        <Button
          animal={animal}
          food={food}
          parentComponent={parentComponent}
          setSightings={setSightings}
        />
      </div>
    </>
  );
};

export default Animal;
