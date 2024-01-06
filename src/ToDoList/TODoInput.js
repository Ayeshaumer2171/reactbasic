import React,{useState} from "react";

 function TodoInput(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>+</button>      
    </div>
  );
}

export default TodoInput;


// import React, { useState } from 'react'
// import "./App.css"
// import TodoInput from './components/TodoInput'
// import Todolist from './components/TodoList';
// function App() {
//   const [listTodo,setListTodo]=useState([]);
//   let addList = (inputText)=>{
//     if(inputText!=='')
//       setListTodo([...listTodo,inputText]);
//   }
//   const deleteListItem = (key)=>{
//     let newListTodo = [...listTodo];
//     newListTodo.splice(key,1)
//     setListTodo([...newListTodo])
//   }
//   return (
//     <div className="main-container">
//       <div className="center-container">
//         <TodoInput addList={addList}/>
//         <h1 className="app-heading">TODO</h1>
//         <hr/>
//         {listTodo.map((listItem,i)=>{
//           return (
//             <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default App
