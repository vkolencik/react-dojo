import { Accordeon } from "./Day2 - controlled component + useCallback/Accordeon";

const App = () => {
  const qAs = [
    { id: '1', q: 'What\'s the meaning of life, universe, and everything?', a: '42' },
    { id: '2', q: 'Why did the chicken cross the road?', a: 'To improve its metrics' },
    { id: '3', q: 'Something else', a: 'Answer' }
  ]
  return <Accordeon qAs={qAs}/>
}

export default App;
