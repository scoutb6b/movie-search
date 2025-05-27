import useSWR from "swr";

type Props = {
  keyword: string;
  release: string;
};

export default function MovieList({ keyword, release }: Props) {
  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    }).then((res) => res.json());

  const endPoint =
    keyword === ""
      ? "https://api.themoviedb.org/3/movie/popular?language=ja&page=1"
      : `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          keyword
        )}&include_adult=false&language=ja&page=1&primary_release_year=${release}`;
  const { data, error, isLoading } = useSWR(endPoint, fetcher);

  if (isLoading) return <p>読み込み中...</p>;
  if (error) return <p>エラーが発生しました</p>;
  console.log(data);

  return <div></div>;
}
