import {useCallback, useState} from "react";

const App = () => {

  const [items, setItems] = useState<string[]>([])

  const handleAddItem = useCallback(() => setItems(oldItems => [...oldItems, "Item " + (oldItems.length + 1)]), []);

  return (
      <div>
        <h1>My Item Lister</h1>
        <button onClick={handleAddItem}>Add Item</button>
        <ul>
          {items.length > 0 && items.map(item => <li key={item}>{item}</li>)}
          {items.length == 0 && <p>No items yet</p>}
        </ul>
      </div>
  )
};

export default App;
