import React, { lazy, Suspense, useState } from 'react'

let Productdetails = lazy(()=>import("./Productdetails"))

function Lazycomponent() {
    let [showproduct, setshowproduct] = useState(false)
   
  return (
    <div>
      <h1>Online Shopping</h1>

      <button onClick={()=>setshowproduct(true)}>View Products</button>

      <Suspense fallback = {<h2>Loading Components...</h2>}>
      {showproduct && <Productdetails/>}
      </Suspense>
    </div>
  )
}

export default Lazycomponent
