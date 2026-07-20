import React from 'react'
import Preparing from './Preparing'
import Outfordelivery from './Outfordelivery'
import Delivered from './Delivered'

function Orderstatus() {
  let status = "delivery"

  switch(status){

    case "preparing":
      return <Preparing/>

      case "delivery":
        return <Outfordelivery/>

        case "delivered":
          return <Delivered/>

          default:
            return <h1>No Order</h1>
  }

}

export default Orderstatus
