import { Link } from "react-router-dom"

function Products() {

    let products = [
        {id:1, name:"Laptop"},
        {id:2, name:"Mobile"},
        {id:3, name:"Headphones"},
        {id:4, name:"Keyboard"}
    ]
    return (
        <div>
            <h2>Products</h2>

            {products.map((product)=>(
                    <p key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            {product.name}
                        </Link>
                    </p>
                ))}
        </div>
    )
}

export default Products