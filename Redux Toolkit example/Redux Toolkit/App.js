import {configureStore} from "@reduxjs/toolkit"

import countReducer from "./Reducer"


export let store = configureStore({
    reducer:{
        count : countReducer
    }
})