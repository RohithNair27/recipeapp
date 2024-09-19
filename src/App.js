import { useEffect, useState } from 'react';
import './App.css';
import NewItem from './components/NewItem';
import ItemList from './components/ItemList';

function App() {

  const [items, setItems] = useState([]);

  useEffect(()=>{
    const storedItems = JSON.parse(localStorage.getItem('items'))
    if(storedItems) setItems(storedItems);
  },[])

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items])

  const addItem = (item) => {
    setItems([...items, item]);
  }
  // Update an existing item
  const updateItem = (id, updatedItem) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  };

  // Delete an item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };


  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto p-6 bg-white shadow-md rounded">
        <h1 className='text-2xl mb-4 text-center'>Recipe App</h1>
        <NewItem addItem={addItem}/>
        <ItemList items={items} updateItem={updateItem} deleteItem={deleteItem}/>
      </div>
    </div>
  );
}

export default App;
