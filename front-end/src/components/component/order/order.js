import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../../../actions/orders";

const CreateOrder=()=>{
    return "order"
}

const OrderList = () => {
  const orders = useSelector(state => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]); 
return {
    orders
}
};
const UpdateOrder = () =>{
return "udate";
}
const DeleteOrder = () =>{
  return "Delete";  
}
const  Order ={
CreateOrder,
OrderList,
UpdateOrder,
DeleteOrder

};
export default Order;
