import React,{useMemo, useState} from 'react'
 export default function UseMemo() {

 const[count,setCount]=useState(0);
 const[input,setInput]=useState('')

 function handleInput(e){
  setInput(e.target.value)
 }

 const result= useMemo( function slowFunc(){
    let sum=0;
    for(var i=0;i<10000000;i++){
        sum+=i;
    }
    console.log('hii goiz')
return sum;
},[]
 )
 

  return (
    <>
    <div>{count}</div>
    <button onClick={()=>{setCount(count+1)}}>click me</button>
    <hr></hr>
    <input type='text' placeholder='enter your text' value={input}
    onChange={handleInput}
    ></input>
    <br></br>
    <h1>{input}</h1>
    <hr></hr>
    {result}
    </>
  )
  }
