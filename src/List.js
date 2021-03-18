import React from 'react';


function DoneImg(props){

  if(props.done){
    return(<img alt="check" src="./assets/check.png"></img>)
  }else{
    return (<img alt="marked" src="./assets/check-mark.png"></img>)
  }

}



function List(props) {

  return (
    <ul>
      {props.items.map(item =>
        <li key={item.id}>{item.text}

          <div className="align">
          <button className="btnList" onClick={() => {
            props.onDone(item)
          }}>
            
            <DoneImg done={item.done}></DoneImg>
            
          </button>

          <button className="btnList" onClick={() => {
            props.onItemDeleted(item)
          }}>
            <img src="./assets/delete.png" alt="delete"></img>
          </button>
          </div>
        </li>)}
    </ul>
  )
}

export default List;