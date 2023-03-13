import { GiHummingbird } from "react-icons/gi";
import Animal from "../animal/animal";

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
            <Animal
              animal={animal}
              index={index}
              food={false}
              parentComponent={"Search"}
            />
          );
        })}
      </>
    );
  }
};

export default SearchResults;
