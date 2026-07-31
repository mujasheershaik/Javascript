import { useState } from "react"

function useCounter() {

    let [count, setCount] = useState(0)

    function increment() {
        setCount(previousCount => previousCount + 1)
    }

    return { count, increment }
}

export default useCounter