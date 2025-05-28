import useSWR from "swr";

type Query = {
  keyword: string;
  release: string;
};

const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  }).then((res) => res.json());

export const useFetch = ({ keyword, release }: Query, page: number) => {
  const baseUrl = "https://api.themoviedb.org/3";
  const url =
    keyword === ""
      ? `${baseUrl}/discover/movie?include_adult=false&include_video=false&language=ja&page=${page}&sort_by=popularity.desc&year=${release}`
      : `${baseUrl}/search/movie?query=${encodeURIComponent(
          keyword
        )}&include_adult=false&language=ja&page=${page}&primary_release_year=${release}`;

  const { data, error, isLoading } = useSWR(url, fetcher);

  return { data, error, isLoading };
};
