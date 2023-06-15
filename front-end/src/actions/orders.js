import OrderService from "../services/OrderService";
import { LIST_ORDERS } from "./type";
export const listOrders = () => async (dispatch) =>{
    try {
       const res = await OrderService.getAll();
       dispatch({
        type:LIST_ORDERS,
        payload:res.data
       });
    } catch(err){
        console.log(err)
    }
}