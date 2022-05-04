import { CartActions ,CartActionTypes } from "./action"

export let initialState = []

export function reducer(state=initialState, action: CartActions) {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT: 
            return [...state, action.payload]
        case CartActionTypes.REMOVE_PRODUCT: 
            let product = action.payload        
            return state.filter((el:any)=>el.id != product.id)
        default: 
            return state
    }
}