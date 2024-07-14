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
        onChange={props.searchHandler}
        value={props.searchValue}
        className="border border-blue-400"
      />
      <button type="submit" className="rounded bg-blue-400 p-2">
        Search
      </button>
    </form>
  );
}
