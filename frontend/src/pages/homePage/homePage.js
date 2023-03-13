import SearchBar from "../../components/searchBar/searchBar";
import NavBar from "../../components/navBar/navBar";
import SightingsLog from "../../components/sightingsLog/sightingsLog";

const HomePage = () => {
  return (
    <main id="main-container">
      <nav>
        <NavBar />
      </nav>
      <div className="flex flex-row space-x-4">
        <div className="basis-1/4">
          <SearchBar />
        </div>
        <div className="basis-3/4">
          <SightingsLog />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
