const AnimalFacts = ({ locations, food }) => {
  const getLocations = () => {
    return (
      <>
        {locations.map((place, index) => {
          return (
            <p className="label-text text-black text-sm" key={index}>
              {place}
            </p>
          );
        })}
      </>
    );
  };

  const facts = [
    { label: "Where do they live?", content: getLocations() },
    { label: "What do they eat?", content: food },
  ];

  return (
    <>
      <div data-cy="animalFacts" className="h-56">
        {facts.map((fact, index) => {
          return (
            <div key={index}>
              <h2 className="label-text text-black font-bold text-sm pt-2">
                {fact.label}
              </h2>
              <div className="label-text text-black text-sm pb-2">
                {fact.content}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AnimalFacts;
