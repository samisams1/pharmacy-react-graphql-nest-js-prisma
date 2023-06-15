import {CREATE_ORDER, DELETE_ORDER, LIST_ORDERS, UPDATE_ORDER } from "../actions/type";
const initialState=[];
function orderReducer (orders=initialState,action){
const {type,payload}=action;
switch(type){
case LIST_ORDERS:
     return [...orders, payload];
case CREATE_ORDER:
    return orders;
case UPDATE_ORDER:
    return orders;
case DELETE_ORDER:
     return orders.filiter(({id})=>id!== payload.id);
    default:
        return orders;
}

}
export default orderReducer;
