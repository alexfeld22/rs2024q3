import { ChangeEvent, Component, FormEvent } from 'react';

type SearchProps = {
  searchHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  submitForm: (event: FormEvent) => void;
  searchValue: string;
};

export default class SearchForm extends Component<SearchProps> {
  render() {
    return (
      <form onSubmit={this.props.submitForm}>
        <input
          type="search"
          placeholder="search"
          onChange={this.props.searchHandler}
          value={this.props.searchValue}
          className="border border-blue-400"
        />
        <button type="submit" className="rounded bg-blue-400 p-2">
          Search
        </button>
      </form>
    );
  }
}
