import SearchBar from "../../components/searchBar/searchBar";
import NavBar from "../../components/navBar/navBar";
import SightingsLog from "../../components/sightingsLog/sightingsLog";

const HomePage = () => {
  return (
    <main id="main-container">
      <nav>
        <NavBar />
      </nav>
      <div>
        <SearchBar />
      </div>
      <div>
        <SightingsLog />
      </div>
    </main>
  );
};

export default HomePage;
