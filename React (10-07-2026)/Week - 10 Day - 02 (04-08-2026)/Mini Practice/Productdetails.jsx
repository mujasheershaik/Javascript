import { useParams } from "react-router-dom";

function Productdetails() {

    let {id} = useParams();

    let products = [
        {id:1,name:"Laptop",price:65000},
        {id:2,name:"Mobile",price:25000},
        {id:3,name:"Headphones",price:3000},
        {id:4,name:"Keyboard",price:1500}
    ]
    let product = products.find((p)=>p.id===Number(id))

    if(!product){
        return <h2>Product Not Found</h2>
    }
    return (
        <div>
            <h2>Product Details</h2>

            <h3>{product.name}</h3>

            <h4>Price : ${product.price}</h4>
        </div>
    )
}

export default Productdetails;