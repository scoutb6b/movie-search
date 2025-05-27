import "./App.css";
import MovieList from "./components/MovieList";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <>
      <h1>Search Movie App</h1>
      <SearchForm />
      <MovieList keyword={""} release={""} />
    </>
  );
}

export default App;
