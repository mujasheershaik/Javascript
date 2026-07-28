import React from 'react'
import useProducts from './useProducts'

function withLoading(Component) {
    return function ProtectedComponent(){
        let {products, loading} = useProducts()

        if (loading) {
            return <h2>Loading Products...</h2>
        }

        return <Component products ={products}/>
    }
}

export default withLoading
