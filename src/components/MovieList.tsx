import MovieCard from "./MovieCard";
import { useFetch } from "../_hooks/useFetch";

type Props = {
  keyword: string;
  release: string;
};

export default function MovieList({ query }: { query: Props }) {
  const { data, error, isLoading } = useFetch(query);

  if (isLoading) return <p>読み込み中...</p>;
  if (error) return <p>エラーが発生しました</p>;

  return (
    <div className="cardGrid">
      {data.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
