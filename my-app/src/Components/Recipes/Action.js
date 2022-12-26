
import { Get, Success } from "./Types"
 import RecipesData from "./data"




let reducer=(state=RecipesData,action)=>{
    if(action.type==Success){
        return {
            ...state,
            current:action.payload

        }
    }
    if(action.type==Get){
        return {
            ...state,
            apidata:action.payload
            
        }
    }
    return state
}

export {reducer}