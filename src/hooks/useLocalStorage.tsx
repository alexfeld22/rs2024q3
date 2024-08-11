import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function useLocalStorage(
  key: string = 'searchValue',
  initialValue: string = ''
): [string, Dispatch<SetStateAction<string>>] {
  const [query, setQuery] = useState(() => {
    const savedQuery = localStorage.getItem(key);
    return savedQuery !== null ? savedQuery : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, query);
    return () => {
      localStorage.setItem(key, query);
    };
  }, [query, key]);

  return [query, setQuery];
}
