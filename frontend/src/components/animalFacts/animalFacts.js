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
      <div data-cy="animalFacts" className="h-24 pt-2">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-black text-primary-content peer-checked:bg-green-400 peer-checked:text-secondary-content bg-opacity-75">
            Animal Facts...
          </div>
          <div className="collapse-content bg-black text-primary-content peer-checked:bg-green-400 peer-checked:text-secondary-content">
            {facts.map((fact, index) => {
              return (
                <div key={index}>
                  <h2 className="label-text text-black font-bold text-sm">
                    {fact.label}
                  </h2>
                  <div className="label-text text-black text-sm pb-2">
                    {fact.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimalFacts;
