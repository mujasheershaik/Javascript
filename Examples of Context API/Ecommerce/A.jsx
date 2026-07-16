import React, { createContext, useState } from "react";
import B from "./B";
import C from "./C";

export let cartcontext = createContext()
function A(){
    let [user, setuser] = useState("Shaik")
    let [cart, setcart] = useState([])
    let [wishlist, setwishlist] = useState([])
    let [theme, settheme] = useState("Light")
    return(
        <cartcontext.Provider 
        value = {{
            user, setuser,
            cart, setcart,
            wishlist, setwishlist,
            theme, settheme
        }}>
            <B/>
            <C/>
        </cartcontext.Provider>

    )
}

export default A