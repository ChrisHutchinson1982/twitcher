import SearchBar from "../../components/searchBar/searchBar";
import NavBar from "../../components/navBar/navBar";

const HomePage = () => {
  return (
    <main id="main-container">
      <nav>
        <NavBar />
      </nav>
      <div>
        <SearchBar />
      </div>
    </main>
  );
};

export default HomePage;
