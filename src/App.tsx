import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { baseCharacterUrl } from './assets/CONSTS';
import Characters from './components/Characters';
import ErrorBoundaryForm from './components/ErrorBoundaryForm';
import Pagination from './components/Pagination';
import SearchForm from './components/SearchForm';
import useLocalStorage from './hooks/useLocalStorage';
import { Character } from './types/characters.types';

const fetchCharacters = async (url: string) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('We have an error while fetching data: ', error);
  }
};

function App() {
  const [loader, setLoader] = useState(false);
  const [searchValue, setSearchValue] = useLocalStorage();
  const [cards, setCards] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);

  const getCharacters = async (searchString: string, page: number) => {
    setLoader(true);
    try {
      const url = baseCharacterUrl + `?name=${searchString}` + `&page=${page}`;
      const data = await fetchCharacters(url);
      const characters = data?.error ? [] : data.results;
      const pagesNum = data?.error ? 1 : data.info.pages;
      setCards(characters);
      setPages(pagesNum);
      setLoader(false);
    } catch (error) {
      console.error('Fetch Error: ', error);
      setLoader(false);
      setCurrentPage(1);
      setPages(1);
      setCards([]);
    }
  };

  useEffect(() => {
    getCharacters(searchValue, currentPage);
  }, []);

  const seachHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    setCurrentPage(1);
    getCharacters(searchValue, currentPage);
  };

  const handlePagination = (num: number) => {
    setCurrentPage(num);
    getCharacters(searchValue, num);
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
      <div>
        <Pagination
          currentPage={currentPage}
          pages={pages}
          handlePagination={handlePagination}
        />
      </div>
      <div className="flex items-center justify-center bg-[#272B33] px-1 sm:px-6">
        {loader && <h2 className="text-white">Loadind...</h2>}
        {!loader && !cards?.length && (
          <h2 className="text-white">No data to display</h2>
        )}
        {!loader && cards?.length > 0 && <Characters characters={cards} />}
      </div>
    </div>
  );
}

export default App;
