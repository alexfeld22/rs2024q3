import { Component } from 'react';

export default class SearchForm extends Component {
  render() {
    return (
      <form>
        <input type="search" placeholder="search" />
        <button type="submit">Search</button>
      </form>
    );
  }
}
