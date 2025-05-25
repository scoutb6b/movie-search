import { useState } from "react";

export default function SearchForm() {
  const [keyword, setKeyWord] = useState<string>("");
  const [release, setRelease] = useState<string>("2025");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
    console.log(e.target.value);
  };

  const YEARS = ["2025", "2024", "2023", "2022", "2021"] as const;
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRelease(e.target.value);
    console.log(e.target.value);
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ keyword, release });
  };

  return (
    <form className="formContainer" onSubmit={onSearch}>
      <label className="keyword" htmlFor="keyword">
        キーワード
        <input type="text" id="keyword" value={keyword} onChange={onChange} />
      </label>
      <label className="release" htmlFor="release">
        リリース年
        <select
          name="release"
          id="release"
          value={release}
          onChange={handleChange}
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
