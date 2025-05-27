import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchForm from "./components/SearchForm";

type Query = {
  keyword: string;
  release: string;
};

function App() {
  const [keyword, setKeyword] = useState<string>("");
  const [release, setRelease] = useState<string>("2025");
  const [query, setQuery] = useState<Query>({
    keyword: "",
    release: "2025",
  });

  const handleSearch = () => {
    setQuery({ keyword, release });
  };

  return (
    <>
      <h1>Search Movie App</h1>
      <SearchForm
        keyword={keyword}
        release={release}
        onKeyword={setKeyword}
        onRelease={setRelease}
        onSubmit={handleSearch}
      />
      <MovieList query={query} />
    </>
  );
}

export default App;
