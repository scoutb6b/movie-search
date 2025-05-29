import useSWR from "swr";

export const useGenreMap = () => {
  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    }).then((res) => res.json());
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/genre/movie/list?language=ja",
    fetcher
  );

  if (error) {
    console.error("ジャンル一覧の取得に失敗しました", error);
    return {};
  }
  if (!data) {
    return {};
  }

  const genreMap: Record<number, string> = {};
  data.genres.forEach((genre: { id: number; name: string }) => {
    genreMap[genre.id] = genre.name;
  });

  return genreMap;
};
