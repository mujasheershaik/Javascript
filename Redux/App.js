import {createStore} from "redux";
import A from "../Redux Components/A"



// (1) Store 
// (2) Action Reducers 
// (3) Dispatches 

let initialState = {
    sum:1000
}
let reducer=(state=initialState, action)=>{
    switch ( action.type){
        case "a":
            return{ ...state,
                sum:state.sum+1
            }
            break;
            case "B":
                return {...state,
                    sum:state.sum-1
                }
                default :
                return state
    }

}

export let store = createStore(reducer)
// console.log(a)