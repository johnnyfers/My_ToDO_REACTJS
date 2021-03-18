import React from 'react';
import { useState } from 'react';

function TodoForm(props){

    const [text, setText] = useState('');
   
    function handleChange(event) {
        let t = event.target.value;
        setText(t);
      }
    
      function addItem(event) {
        event.preventDefault();
        props.onAddItem(text);
        setText('');
      }

    return(
        <form>
        <input onChange={handleChange} type="text" value={text}></input>
        <button id="btnADD" onClick={addItem}>ADD</button>
      </form>
    );
}

export default TodoForm;