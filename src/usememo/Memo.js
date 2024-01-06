 //memo
 
 import React,{useState} from 'react'
 import NewComp from './NewComp';
 export default function Memo() {

 const[count,setCount]=useState(0);
 const[input,setInput]=useState('')

 function handleInput(e){
  setInput(e.target.value)
 }

  return (
    <>
    <div>{count}</div>
    <button onClick={()=>{setCount(count+1)}}>click me</button>
    <hr></hr>
    <input type='text' placeholder='enter your text' value={input}
    onChange={handleInput}
    ></input>
    <br></br>
    <NewComp newCount={count} />
    </>
  )
  }
