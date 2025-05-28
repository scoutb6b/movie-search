import MovieCard from "./MovieCard";
import { useFetch } from "../_hooks/useFetch";
import { useEffect, useState } from "react";
import type { Movie } from "../_types/Moives";

type Props = {
  query: {
    keyword: string;
    release: string;
  };
  page: number;
  onLoadMore: () => void;
};

export default function MovieList({ query, page, onLoadMore }: Props) {
  const { data, error, isLoading } = useFetch(query, page);
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    if (!data) return;

    if (page === 1) {
      setMovies(data.results);
    } else {
      setMovies((prev) => [...prev, ...data.results]);
    }
  }, [data, page]);
  if (isLoading) return <p className="loading">読み込み中...</p>;
  if (error) return <p className="error">エラーが発生しました</p>;
  if (data.results.length === 0)
    return <p className="no">該当する映画はありません</p>;
  console.log(data);

  return (
    <>
      <p className="results">検索結果：{data.total_results}件</p>
      <div className="cardGrid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {page < data.total_pages && (
        <button className="andMore" onClick={onLoadMore}>
          さらに読み込む
        </button>
      )}
    </>
  );
}
