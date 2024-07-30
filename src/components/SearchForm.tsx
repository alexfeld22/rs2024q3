import { ChangeEvent, FormEvent } from 'react';

type SearchProps = {
  searchHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  submitForm: (event: FormEvent) => void;
  searchValue: string;
};

export default function SearchForm(props: SearchProps) {
  return (
    <form onSubmit={props.submitForm}>
      <input
        type="search"
        placeholder="search"
        name="searchInput"
        onChange={props.searchHandler}
        value={props.searchValue}
        className="m-1 border border-blue-400 p-1"
      />
      <button type="submit" className="rounded bg-blue-400 p-2">
        Search
      </button>
    </form>
  );
}
