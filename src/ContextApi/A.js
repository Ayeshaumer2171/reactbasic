import React,{createContext} from 'react'
import B from './B'

  const GreetContext=createContext();

  export default function A() {

    const greet='hello';
    const greet2='hi'

  return (
    <div>
        <GreetContext.Provider value={{greet,greet2}}>
            <B />
  </GreetContext.Provider>
    </div>
  )
}
export {GreetContext}
