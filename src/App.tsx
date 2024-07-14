import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
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
    console.log('We have an error while fetching data: ', error);
  }
};

function App() {
  const [loader, setLoader] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('searchValue') || ''
  );
  const [cards, setCards] = useState<Character[]>([]);

  const getCharacters = async (searchString: string) => {
    try {
      setLoader(true);
      let characters = await fetchData(searchString);
      console.log(characters);
      if (!characters) characters = [];
      setCards(characters);
      setLoader(false);
    } catch (error) {
      console.error('Fetch Error: ', error);
      setLoader(false);
      setCards([]);
    }
  };

  useEffect(() => {
    getCharacters(searchValue);
  }, []);

  const seachHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    getCharacters(searchValue);
    localStorage.setItem('searchValue', searchValue);
  };

  return (
    <div>
      <div className="flex h-[150px] w-full flex-col items-center justify-center dark:bg-black">
        <h1 className="text-[5.625rem] font-black text-[#202329]">
          Find your Morty
        </h1>
      </div>
      <div className="flex h-10 flex-col items-center justify-center">
        <SearchForm
          searchHandler={seachHandler}
          submitForm={submitForm}
          searchValue={searchValue}
        />
      </div>
      <div className="flex h-10 flex-col items-center justify-center">
        <ErrorBoundaryForm />
      </div>
      <div className="flex items-center justify-center bg-[#272B33] px-1 sm:px-6">
        {loader && <h2>Loadind...</h2>}
        {!loader && !cards?.length && <h2>No data to display</h2>}
        {!loader && cards?.length > 0 && <Characters characters={cards} />}
      </div>
    </div>
  );
}

export default App;
