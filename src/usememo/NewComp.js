import React,{memo} from 'react'

 function NewComp(props) {

 console.log('render hojao')

  return (
    <div>NewComp {props.newCount}</div>
  )
}
export default memo(NewComp);
