import React from 'react'

function Orderstatus1() {
    let status = "shipped"

    switch(status){
        case "pending" :
            return <h2>Order is being processed</h2>
            case "shipped" :
                return <h2>Order has been shipped</h2>
                case "delivered" :
                    return <h2>Order delivered successfully</h2>
                    case "cancelled" :
                        return <h2>Order has been cancelled</h2>
                        default :
                        return <h2>Unknown order status</h2>
    }
}

export default Orderstatus1
