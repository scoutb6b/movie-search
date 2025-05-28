import type { Movie } from "../_types/Moives";

type MovieProps = {
  movie: Movie;
};

export default function MoiveCard({ movie }: MovieProps) {
  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
            : "https://placehold.jp/4d4d4d/ffffff/200x300.png?text=no-image"
        }
        alt=""
      />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <p>{movie.genre_ids}</p>
    </div>
  );
}
