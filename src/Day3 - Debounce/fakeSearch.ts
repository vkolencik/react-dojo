export type Item = { id: number; name: string };

export function fakeSearch(q: string, as?: AbortSignal): Promise<Item[]> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() =>
      resolve(
        ['Ada', 'Grace', 'Linus', 'Alan', 'Barbara', 'Edsger']
          .map((n, i) => ({ id: i, name: n }))
          .filter(it => it.name.toLowerCase().includes(q.toLowerCase()))
      ),
      200 + Math.random() * 300
    )

    if (as) as.onabort = () => {
      console.log('Aborting...');
      reject('Aborted');
      clearTimeout(timeoutId)
    }
  });
}
