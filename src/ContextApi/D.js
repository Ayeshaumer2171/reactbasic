// import React from 'react'
// import { GreetContext } from './A'
// export default function D() {
//   return (
//   <GreetContext.Consumer>{(val)=>{
//     return <h1>Greet:{val}</h1>

// }}
//   </GreetContext.Consumer>
//   )}


import React,{useContext} from 'react'
import { GreetContext} from './A'

export default function D() {

 const useCon=useContext(GreetContext)

  return (
    <>
  <h1>greet:{useCon.greet} {useCon.greet2}</h1>
  {/* <h1>greet:{useCon2}</h1> */}
  </>
  )
}
