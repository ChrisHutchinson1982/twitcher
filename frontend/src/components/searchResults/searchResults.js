import { GiHummingbird } from "react-icons/gi";
import SearchAnimal from "../searchAnimal/searchAnimal";

const SearchResults = ({ animalSearch, renderSearch, loading }) => {
  if (loading) {
    return (
      <>
        <div className="sm:container sm:mx-auto bg-white p-4" data-cy="loading">
          <div className="text-2xl animate-bounce h-5 w-5 pl-5">
            <GiHummingbird />
          </div>
          <div className="text-lg">Loading...</div>
        </div>
      </>
    );
  } else if (renderSearch) {
    return (
      <>
        {animalSearch.map((animal, index) => {
          return (
            <SearchAnimal animal={animal} index={index} />
            // <div
            //   className="sm:container sm:mx-auto bg-white rounded-xl shadow border p-4"
            //   data-cy={`animalNameResult${animal.name}`}
            //   key={index}
            // >
            //   <h1 className="label-text text-black font-bold text-2xl pb-2">
            //     {animal.name}
            //   </h1>
            //   <h2 className="label-text text-black font-bold text-sm">
            //     Where do they live?
            //   </h2>
            //   {animal.locations.map((place, index) => {
            //     return (
            //       <p className="label-text text-black text-sm" key={index}>
            //         {place}
            //       </p>
            //     );
            //   })}
            //   <h2 className="label-text text-black font-bold text-sm pt-2">
            //     What do they eat?
            //   </h2>
            //   <p className="label-text text-black text-sm pb-2">
            //     {animal.characteristics.prey}
            //     {animal.characteristics.main_prey}
            //   </p>
            // </div>
          );
        })}
      </>
    );
  }
};

export default SearchResults;
