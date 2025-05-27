type Props = {
  keyword: string;
  release: string;
  onKeyword: (v: string) => void;
  onRelease: (v: string) => void;
  onSubmit: () => void;
};

export default function SearchForm({
  keyword,
  release,
  onKeyword,
  onRelease,
  onSubmit,
}: Props) {
  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onKeyword(e.target.value);
  };

  const YEARS = ["2025", "2024", "2023", "2022", "2021"] as const;
  const onReleaseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onRelease(e.target.value);
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="formContainer" onSubmit={onSearch}>
      <label className="keyword" htmlFor="keyword">
        キーワード
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={onKeywordChange}
        />
      </label>
      <label className="release" htmlFor="release">
        リリース年
        <select
          name="release"
          id="release"
          value={release}
          onChange={onReleaseChange}
        >
          {YEARS.map((year) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </label>
      <button className="btn" type="submit">
        検索する
      </button>
    </form>
  );
}
