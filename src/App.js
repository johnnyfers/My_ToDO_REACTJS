import './App.css';
import { useEffect, useState } from 'react';
import List from './List'
import TodoForm from './TodoForm';
import Item from './Item';

const SAVED_ITEM = 'savedItem';

function App() {

  const [items, setItems] = useState([]);


  useEffect(()=>{
    let saved = JSON.parse(localStorage.getItem(SAVED_ITEM))
    if(saved){
      setItems(saved);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(SAVED_ITEM, JSON.stringify(items))
  },[items])

 


  function onAddItem(text) {

    let item = new Item(text);

    setItems([...items, item]);
  }


  function onItemDeleted(item) {
    let filtered = items.filter(itemx => itemx.id !== item.id);

    setItems(filtered);
  }



  function onDone(item) {

    let updateItems = items.map(itemx => {
      if (itemx.id === item.id) {
        itemx.done = !itemx.done;
      }
      return itemx;
    })
    setItems(updateItems);
  }




  return (
    <div className="container">

      <div id="box">
        <h1>ToDo</h1>

        <TodoForm onAddItem={onAddItem}></TodoForm>
      </div>

      <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

    </div>
  );
}

export default App;
