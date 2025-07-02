import { useEffect, useState } from 'react';
import { fakeSearch, type Item } from './fakeSearch';

function useDebouncedValue<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const id = window.setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

export const SearchBox4 = () => {
  const [rawQuery, setRawQuery] = useState('');
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  const query = useDebouncedValue(rawQuery, 500);
  
  useEffect(() => {
    setLoading(!!query);

    if (!query) {                // empty query → reset list synchronously
      setItems([]);
      return;
    }

    setLoading(false);
    fakeSearch(query).then(result => {
      console.log(`Concluded search`);

      setItems(result);
    });

    return () => {
      setLoading(false);
    };
  }, [query]);

  return (
    <>
      <input
        aria-label="search"
        value={rawQuery}
        onChange={e => setRawQuery(e.target.value)}
      />
      {loading && <p>loading…</p>}
      <ul>
        {items.map(it => <li key={it.id}>{it.name}</li>)}
      </ul>
    </>
  );
};
