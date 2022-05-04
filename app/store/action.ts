//import { Action } from "rxjs/internal/scheduler/Action";
import { Action } from "@ngrx/store";

export enum CartActionTypes{
    ADD_PRODUCT='ADD_PRODUCT',
    REMOVE_PRODUCT='REMOVE_PRODUCT'
}
export class Addproduct implements Action {
    readonly type=CartActionTypes.ADD_PRODUCT
    constructor(public payload:any){}
}
export class Removeproduct implements Action {
    readonly type=CartActionTypes.REMOVE_PRODUCT
    constructor(public payload:any){}
}
export type CartActions = Addproduct | Removeproduct