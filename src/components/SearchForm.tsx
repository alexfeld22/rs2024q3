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
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
