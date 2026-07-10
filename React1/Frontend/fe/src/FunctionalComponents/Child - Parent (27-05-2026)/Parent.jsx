import React from 'react'
import Child from './child';
 
function Parent () {
 //this function getting data from child
    function receiveData(data){
    console.log("data from child",data);
  }
 
    return (
    <div>
      <h1>This is parent component</h1>
      <Child sendData={receiveData}/>
    </div>
  )
}
 
export default Parent