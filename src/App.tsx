import { ChangeEvent, Component, FormEvent } from 'react';
import Characters from './components/Characters';
import ErrorBoundaryForm from './components/ErrorBoundaryForm';
import SearchForm from './components/SearchForm';
import { Character, Welcome } from './types/characters.types';

const fetchData = async (query: string) => {
  try {
    const url = `https://rickandmortyapi.com/api/character/?name=${query}`;
    const response = await fetch(url);
    const data: Welcome = await response.json();
    return data.results;
  } catch (error) {
    console.log('We have an error: ', error);
  }
};

type StateType = {
  searchValue: string;
  cards: Character[];
  loader: boolean;
};

class App extends Component {
  state: StateType = {
    searchValue: localStorage.getItem('searchValue') || '',
    cards: [],
    loader: false,
  };
  getCharacters = async () => {
    try {
      this.setState({ loader: true });
      const characters = await fetchData(this.state.searchValue);
      this.setState({ cards: characters, loader: false });
    } catch (error) {
      console.error('Fetch Error: ', error);
      this.setState({ cards: [], loader: false });
    }
  };
  componentDidMount() {
    this.getCharacters();
  }
  seachHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
  };
  submitForm = (event: FormEvent) => {
    event.preventDefault();
    this.getCharacters();
    localStorage.setItem('searchValue', this.state.searchValue);
  };
  render() {
    return (
      <div>
        <div className="flex h-[150px] w-full flex-col items-center justify-center dark:bg-black">
          <h1 className="text-[5.625rem] font-black text-[#202329]">
            Find your Morty
          </h1>
        </div>
        <div className="flex h-10 flex-col items-center justify-center">
          <SearchForm
            searchHandler={this.seachHandler}
            submitForm={this.submitForm}
            searchValue={this.state.searchValue}
          />
        </div>
        <div className="flex h-10 flex-col items-center justify-center">
          <ErrorBoundaryForm children={undefined} />
        </div>
        <div className="flex items-center justify-center bg-[#272B33] px-1 sm:px-6">
          {this.state.loader && <h2>Loadind...</h2>}
          {!this.state.loader && !this.state.cards?.length && (
            <h2>No data to display</h2>
          )}
          {!this.state.loader && this.state.cards?.length > 0 && (
            <Characters characters={this.state.cards} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
