import { useEffect, useRef, useState } from 'react';

type Item = { id: number; name: string };

// fake API
function fakeSearch(q: string): Promise<Item[]> {
  return new Promise(resolve =>
    setTimeout(() =>
      resolve(
        ['Ada', 'Grace', 'Linus', 'Alan', 'Barbara', 'Edsger']
          .map((n, i) => ({ id: i, name: n }))
          .filter(it => it.name.toLowerCase().includes(q.toLowerCase()))
      ),
      200 + Math.random() * 300
    )
  );
}

export const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {                // empty query → reset list synchronously
      setItems([]);
      return;
    }

    let cancelled = false;
    setLoading(!!query);

    const timeoutId = window.setTimeout(() => {
      if (!query) return;

      fakeSearch(query).then(res => {
        if (cancelled) return;
        setItems(res);
        setLoading(false);
        console.log(`Concluded search ID ${timeoutId}`);
      });
    }, 500);

    console.log(`Scheduled search ID ${timeoutId}`);

    return () => {
      clearTimeout(timeoutId);
      cancelled = true;
      setLoading(false);
      console.log(`Cancelled search ID ${timeoutId}`);
    };
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
    </>
  );
};
