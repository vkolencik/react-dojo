import { useEffect, useRef, useState } from 'react';
import { fakeSearch, type Item } from './fakeSearch';

export const SearchBoxAbort = () => {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!query) {
      abortRef.current?.abort();
      setItems([]);
      return;
    }

    const timer = setTimeout(() => {
      // cancel any request still in flight
      abortRef.current?.abort();

      // new controller for this fetch
      const ac = new AbortController();
      abortRef.current = ac;

      setLoading(true);

      fakeSearch(query, ac.signal)
        .then(setItems)
        .catch(err => {
          if (err.name !== 'AbortError') console.error(err); // normal network errors
        })
        .finally(() => setLoading(false));
    }, 500);

    // debounce-timer cleanup
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      <input
        aria-label="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {loading && <p>loading…</p>}
      <ul>
        {items.map(it => <li key={it.id}>{it.name}</li>)}
      </ul>

      <pre>Reason: {abortRef.current?.signal.reason}</pre>
    </>
  );
};
